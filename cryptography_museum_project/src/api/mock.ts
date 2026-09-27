import type {
  Paginated,
  PostRunRequest,
  PostRunResponse,
  RunDetail,
  RunListItem,
  StatsSummary,
} from "@/content/types";
import { hasAdminSession } from "@/admin/gate";
import { categoryStats } from "@/game/scoring";
import { buildLegendRuns, isLegendRunId, LEGEND_VERSION } from "./legend";
import { adminPassword } from "./env";
import { PostRunRequestSchema } from "./schema";
import { ApiError } from "./types";

const STORE_KEY = "mdd.mocks.runs";
const DELAY_MS = 16;
const MAX_RUNS = 600;
const LEGEND_KEY = "mdd.mocks.legend";

type StoredRun = PostRunRequest;

function sleep(): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, DELAY_MS));
}

function unauthorized(): never {
  throw new ApiError("UNAUTHORIZED", "admin session required", 401);
}

function requireAdmin(): void {
  if (!hasAdminSession()) unauthorized();
}

let memory: StoredRun[] | null = null;

function remember(runs: StoredRun[]): StoredRun[] {
  memory = runs.slice(-MAX_RUNS);
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(memory));
    sessionStorage.setItem(LEGEND_KEY, LEGEND_VERSION);
  } catch {
    /* the tab still keeps the legend in memory */
  }
  return memory;
}

function readStore(): StoredRun[] {
  if (memory && sessionStorage.getItem(LEGEND_KEY) === LEGEND_VERSION) return memory;
  let parsed: StoredRun[] = [];
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (raw) {
      const json = JSON.parse(raw) as StoredRun[];
      if (Array.isArray(json)) parsed = json;
    }
  } catch {
    parsed = [];
  }
  if (sessionStorage.getItem(LEGEND_KEY) === LEGEND_VERSION) {
    memory = parsed;
    return parsed;
  }
  const real = parsed.filter((run) => !isLegendRunId(run.runId));
  return remember([...real, ...buildLegendRuns()]);
}

function writeStore(runs: StoredRun[]): void {
  remember(runs);
}

function sameBody(a: PostRunRequest, b: PostRunRequest): boolean {
  return JSON.stringify({ ...a, anonymousId: "" }) === JSON.stringify({ ...b, anonymousId: "" });
}

export async function mockPostRun(body: PostRunRequest): Promise<PostRunResponse> {
  await sleep();
  const parsed = PostRunRequestSchema.parse(body) as PostRunRequest;
  const store = readStore();
  const existing = store.find((r) => r.runId === parsed.runId);
  if (existing) {
    if (sameBody(existing, parsed)) {
      return { ok: true, runId: parsed.runId, stored: true };
    }
    throw new ApiError("CONFLICT", "runId already stored with a different body", 409);
  }
  writeStore([...store, parsed]);
  return { ok: true, runId: parsed.runId, stored: true };
}

export async function mockCreateAdminSession(password: string): Promise<{ ok: true }> {
  await sleep();
  if (password !== adminPassword()) {
    throw new ApiError("INVALID_CREDENTIALS", "Неверный пароль", 401);
  }
  return { ok: true };
}

export async function mockListRuns(query: {
  page?: number;
  per_page?: number;
}): Promise<Paginated<RunListItem>> {
  await sleep();
  requireAdmin();
  const page = query.page && query.page >= 1 ? query.page : 1;
  const perPage =
    query.per_page && query.per_page >= 1 && query.per_page <= 100 ? query.per_page : 20;
  const all = [...readStore()].sort((a, b) => (a.completedAt < b.completedAt ? 1 : -1));
  const start = (page - 1) * perPage;
  const data: RunListItem[] = all.slice(start, start + perPage).map((run) => ({
    runId: run.runId,
    startedAt: run.startedAt,
    completedAt: run.completedAt,
    index: run.index,
    profileId: run.profileId,
    answeredCount: 10,
  }));
  return { data, meta: { total: all.length, page, per_page: perPage } };
}

export async function mockGetRun(runId: string): Promise<RunDetail> {
  await sleep();
  requireAdmin();
  const run = readStore().find((r) => r.runId === runId);
  if (!run) throw new ApiError("NOT_FOUND", "run not found", 404);
  return {
    runId: run.runId,
    startedAt: run.startedAt,
    completedAt: run.completedAt,
    index: run.index,
    profileId: run.profileId,
    answers: run.answers.map((a) => ({
      scenarioId: a.scenarioId,
      answerId: a.answerId,
      score: a.score,
      correct: a.score === 10,
      maxScore: 10 as const,
    })),
    categories: categoryStats(
      run.answers.map((a) => ({
        ...a,
        answeredAt: run.completedAt,
      })),
    ),
  };
}

export async function mockGetStatsSummary(): Promise<StatsSummary> {
  await sleep();
  requireAdmin();
  const all = readStore();
  const completedCount = all.length;
  const averageIndex =
    completedCount === 0
      ? 0
      : Math.round(all.reduce((sum, r) => sum + r.index, 0) / completedCount);
  const profileCounts = {
    easy_target: 0,
    trusting_passerby: 0,
    careful_analyst: 0,
    digital_ninja: 0,
  };
  for (const run of all) profileCounts[run.profileId] += 1;
  return {
    startedCount: completedCount,
    completedCount,
    attendance: completedCount,
    averageIndex,
    completionRate: completedCount === 0 ? 0 : 100,
    profileCounts,
  };
}
