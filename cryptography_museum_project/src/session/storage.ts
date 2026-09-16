import { getScenario, orderedScenarios } from "@/content/load";
import type { AnswerId, Scenario, SessionState, StoredAnswer } from "@/content/types";
import { SessionStateSchema } from "./schema";

const KEY = "mdd.session.v1";
const BACKUP = "mdd.session.v1.bak";

let memoryFallback: SessionState | null = null;
let storageBlocked = false;

export function isStorageBlocked(): boolean {
  return storageBlocked;
}

function nowIso(): string {
  return new Date().toISOString();
}

function newSession(anonymousId?: string): SessionState {
  return {
    version: 1,
    anonymousId: anonymousId ?? crypto.randomUUID(),
    runId: crypto.randomUUID(),
    startedAt: nowIso(),
    completedAt: null,
    synced: false,
    answers: [],
  };
}

function persist(state: SessionState): void {
  memoryFallback = state;
  if (storageBlocked) return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    storageBlocked = true;
  }
}

function sanitize(state: SessionState): SessionState {
  const seen = new Set<string>();
  const answers: StoredAnswer[] = [];
  for (const item of state.answers) {
    if (seen.has(item.scenarioId)) continue;
    const scenario = getScenario(item.scenarioId);
    if (!scenario) continue;
    seen.add(item.scenarioId);
    const fromBundle = scenario.answers.find((a) => a.id === item.answerId);
    answers.push({
      ...item,
      score: fromBundle ? fromBundle.score : item.score,
    });
  }
  const completedAt = answers.length === 10 ? state.completedAt ?? nowIso() : null;
  const synced = answers.length === 10 ? state.synced : false;
  return { ...state, answers, completedAt, synced };
}

export function readSession(): SessionState {
  if (memoryFallback && storageBlocked) {
    return sanitize(memoryFallback);
  }
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const created = newSession();
      persist(created);
      return created;
    }
    const parsed = SessionStateSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) {
      try {
        localStorage.setItem(BACKUP, raw);
      } catch {
        /* ignore */
      }
      const created = newSession();
      persist(created);
      return created;
    }
    const clean = sanitize(parsed.data as SessionState);
    persist(clean);
    return clean;
  } catch {
    storageBlocked = true;
    if (!memoryFallback) memoryFallback = newSession();
    return sanitize(memoryFallback);
  }
}

export function writeSession(state: SessionState): SessionState {
  const clean = sanitize(state);
  persist(clean);
  return clean;
}

export function replaySession(): SessionState {
  const current = readSession();
  const next = newSession(current.anonymousId);
  return writeSession(next);
}

export function recordAnswer(
  scenarioId: Scenario["id"],
  answerId: AnswerId,
): SessionState {
  const current = readSession();
  if (current.answers.some((a) => a.scenarioId === scenarioId)) {
    return current;
  }
  const scenario = getScenario(scenarioId);
  if (!scenario) return current;
  const choice = scenario.answers.find((a) => a.id === answerId);
  if (!choice) return current;
  const answers = [
    ...current.answers,
    {
      scenarioId,
      answerId,
      score: choice.score,
      answeredAt: nowIso(),
    },
  ];
  const completed = answers.length === 10;
  return writeSession({
    ...current,
    answers,
    completedAt: completed ? nowIso() : null,
    synced: false,
  });
}

export function markSynced(synced: boolean): SessionState {
  return writeSession({ ...readSession(), synced });
}

export function firstUnansweredId(): Scenario["id"] {
  const answered = new Set(readSession().answers.map((a) => a.scenarioId));
  const next = orderedScenarios().find((s) => !answered.has(s.id));
  return next?.id ?? "s01";
}

export function nextUnansweredAfter(fromId: Scenario["id"]): Scenario["id"] | null {
  const list = orderedScenarios();
  const answered = new Set(readSession().answers.map((a) => a.scenarioId));
  const unanswered = list.filter((s) => !answered.has(s.id));
  if (unanswered.length === 0) return null;
  const from = list.find((s) => s.id === fromId);
  const after = unanswered.find((s) => (from ? s.order > from.order : true));
  return (after ?? unanswered[0]).id;
}
