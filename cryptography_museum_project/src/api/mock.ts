import { getScenario } from "@/content/load";
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
import { profileFromIndex } from "@/game/profile";
import { adminPassword } from "./env";
import { PostRunRequestSchema } from "./schema";
import { ApiError } from "./types";

const STORE_KEY = "mdd.mocks.runs";
const DELAY_MS = 120;
const MAX_RUNS = 50;

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

function seedRuns(): StoredRun[] {
  const fixtures: Array<{
    runId: string;
    startedAt: string;
    completedAt: string;
    picks: Record<string, "A" | "B" | "C" | "D">;
    anonymousId: string;
  }> = [
    {
      runId: "7aa21f02-9c44-4d18-b0e1-55c8d2a91f30",
      anonymousId: "3d1c0a7e-6b21-4f0c-9a11-2c8f0e4d7b91",
      startedAt: "2026-09-13T12:04:11.204Z",
      completedAt: "2026-09-13T12:11:40.002Z",
      picks: {
        s01: "A",
        s02: "C",
        s03: "B",
        s04: "B",
        s05: "D",
        s06: "C",
        s07: "C",
        s08: "D",
        s09: "D",
        s10: "A",
      },
    },
    {
      runId: "b2e91c44-0a18-4f77-9d03-81aa0c12e4f8",
      anonymousId: "11111111-1111-4111-8111-111111111111",
      startedAt: "2026-09-13T11:40:00.000Z",
      completedAt: "2026-09-13T11:47:12.500Z",
      picks: {
        s01: "A",
        s02: "A",
        s03: "A",
        s04: "A",
        s05: "A",
        s06: "B",
        s07: "C",
        s08: "C",
        s09: "D",
        s10: "A",
      },
    },
    {
      runId: "c8f10d55-1b29-4088-ae14-92bb1d23f509",
      anonymousId: "22222222-2222-4222-8222-222222222222",
      startedAt: "2026-09-13T10:02:00.000Z",
      completedAt: "2026-09-13T10:09:33.000Z",
      picks: {
        s01: "D",
        s02: "C",
        s03: "C",
        s04: "B",
        s05: "D",
        s06: "C",
        s07: "C",
        s08: "D",
        s09: "D",
        s10: "A",
      },
    },
  ];

  return fixtures.map((fx) => {
    const answers = Object.entries(fx.picks).map(([scenarioId, answerId]) => {
      const scenario = getScenario(scenarioId)!;
      const score = scenario.answers.find((a) => a.id === answerId)!.score;
      return {
        scenarioId: scenario.id,
        answerId,
        score,
      };
    }) as PostRunRequest["answers"];
    const index = answers.reduce((sum, a) => sum + a.score, 0);
    const storedAnswers = answers.map((a) => ({
      ...a,
      answeredAt: fx.completedAt,
    }));
    const categories = categoryStats(storedAnswers).map(({ id, earned, max, percent }) => ({
      id,
      earned,
      max,
      percent,
    }));
    return {
      anonymousId: fx.anonymousId,
      runId: fx.runId,
      startedAt: fx.startedAt,
      completedAt: fx.completedAt,
      index,
      profileId: profileFromIndex(index),
      answers,
      categories,
      contentVersion: 1 as const,
      client: "mdd-web" as const,
    };
  });
}

function readStore(): StoredRun[] {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (!raw) {
      const seeded = seedRuns();
      sessionStorage.setItem(STORE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    const parsed = JSON.parse(raw) as StoredRun[];
    return Array.isArray(parsed) ? parsed : seedRuns();
  } catch {
    return seedRuns();
  }
}

function writeStore(runs: StoredRun[]): void {
  const trimmed = runs.slice(-MAX_RUNS);
  sessionStorage.setItem(STORE_KEY, JSON.stringify(trimmed));
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
