import { getScenario } from "@/content/load";
import type { PostRunRequest } from "@/content/types";
import { categoryStats } from "@/game/scoring";
import { profileFromIndex } from "@/game/profile";

type StoredRun = PostRunRequest;
type Pick = "A" | "B" | "C" | "D";

const SCENARIO_IDS = ["s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10"] as const;

/** Ten styles a day: from a careful full route down to a weak one. */
const PATTERNS: Pick[][] = [
  ["D", "C", "C", "B", "D", "C", "C", "D", "D", "A"],
  ["D", "C", "C", "B", "D", "C", "B", "D", "D", "A"],
  ["D", "C", "B", "B", "C", "C", "C", "C", "D", "B"],
  ["C", "C", "C", "B", "D", "C", "C", "D", "C", "A"],
  ["C", "D", "B", "C", "C", "D", "D", "C", "C", "C"],
  ["C", "B", "B", "C", "B", "D", "B", "C", "B", "C"],
  ["B", "C", "B", "C", "C", "B", "C", "C", "B", "A"],
  ["B", "B", "A", "A", "B", "B", "B", "B", "B", "B"],
  ["A", "B", "A", "A", "B", "A", "A", "A", "A", "B"],
  ["A", "A", "A", "A", "A", "B", "A", "A", "B", "D"],
];

export const LEGEND_DAYS = 45;
export const LEGEND_PER_DAY = 10;
export const LEGEND_VERSION = "45x10";

function legendUuid(prefix: "b45d" | "c45d", n: number): string {
  return `${prefix}0000-0000-4000-8000-${n.toString(16).padStart(12, "0")}`;
}

export function isLegendRunId(runId: string): boolean {
  return (
    runId.startsWith("b45d0000-") ||
    runId.startsWith("a1000001-") ||
    runId === "7aa21f02-9c44-4d18-b0e1-55c8d2a91f30" ||
    runId === "b2e91c44-0a18-4f77-9d03-81aa0c12e4f8" ||
    runId === "c8f10d55-1b29-4088-ae14-92bb1d23f509"
  );
}

/** 45 days × 10 anonymous plays. Day 0 is about an hour ago, so 7 days = 70 and 30 days = 300. */
export function buildLegendRuns(now = Date.now()): StoredRun[] {
  const runs: StoredRun[] = [];
  let n = 1;
  for (let day = 0; day < LEGEND_DAYS; day += 1) {
    for (let user = 0; user < LEGEND_PER_DAY; user += 1) {
      const completedAt = new Date(now - day * 86_400_000 - 3_600_000 - user * 60_000).toISOString();
      const startedAt = new Date(new Date(completedAt).getTime() - (8 + user) * 60_000).toISOString();
      const picks = PATTERNS[user];
      const answers = SCENARIO_IDS.map((scenarioId, index) => {
        const scenario = getScenario(scenarioId)!;
        const answerId = picks[index];
        const score = scenario.answers.find((answer) => answer.id === answerId)!.score;
        return { scenarioId: scenario.id, answerId, score };
      }) as PostRunRequest["answers"];
      const index = answers.reduce((sum, answer) => sum + answer.score, 0);
      const categories = categoryStats(
        answers.map((answer) => ({ ...answer, answeredAt: completedAt })),
      ).map(({ id, earned, max, percent }) => ({ id, earned, max, percent }));
      runs.push({
        anonymousId: legendUuid("c45d", n),
        runId: legendUuid("b45d", n),
        startedAt,
        completedAt,
        index,
        profileId: profileFromIndex(index),
        answers,
        categories,
        contentVersion: 1,
        client: "mdd-web",
      });
      n += 1;
    }
  }
  return runs;
}
