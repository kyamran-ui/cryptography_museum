import { orderedScenarios } from "@/content/load";
import type { CategoryId, ProfileId, RunDetail } from "@/content/types";
import { CATEGORY_ORDER } from "@/game/scoring";
import { PROFILE_COPY } from "@/game/profile";

export type PeriodId = "7" | "30" | "all";

const PROFILE_ORDER: ProfileId[] = [
  "easy_target",
  "trusting_passerby",
  "careful_analyst",
  "digital_ninja",
];

export const PROFILE_COLOR: Record<ProfileId, string> = {
  easy_target: "#e25504",
  trusting_passerby: "#6e89d3",
  careful_analyst: "#1e53e6",
  digital_ninja: "#00b893",
};

export interface ScenarioRow {
  id: string;
  order: number;
  chip: string;
  title: string;
  correctShare: number;
  riskShare: number;
  missShare: number;
  averageScore: number;
}

export interface AdminSnapshot {
  runs: RunDetail[];
  completed: number;
  finished: number;
  averageIndex: number;
  averageDurationMin: number;
  categories: Array<{ id: CategoryId; label: string; percent: number }>;
  scenarios: ScenarioRow[];
  mistakes: ScenarioRow[];
  profiles: Array<{ id: ProfileId; title: string; count: number; share: number; color: string }>;
}

export function filterByPeriod(runs: RunDetail[], period: PeriodId, now = Date.now()): RunDetail[] {
  if (period === "all") return runs;
  const days = period === "7" ? 7 : 30;
  const from = now - days * 24 * 60 * 60 * 1000;
  return runs.filter((run) => new Date(run.completedAt).getTime() >= from);
}

function scoreOf(run: RunDetail, scenarioId: string): number {
  return run.answers.find((answer) => answer.scenarioId === scenarioId)?.score ?? 0;
}

function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function durationMin(run: RunDetail): number {
  const ms = new Date(run.completedAt).getTime() - new Date(run.startedAt).getTime();
  if (!Number.isFinite(ms) || ms <= 0) return 0;
  return ms / 60000;
}

export function buildSnapshot(runs: RunDetail[]): AdminSnapshot {
  const sorted = [...runs].sort((a, b) => (a.completedAt < b.completedAt ? 1 : -1));
  const completed = sorted.length;
  const finished = sorted.filter((run) => run.answers.length >= 10).length;
  const averageIndex = Math.round(mean(sorted.map((run) => run.index)));
  const averageDurationMin = Math.round(mean(sorted.map(durationMin)));

  const categories = CATEGORY_ORDER.map((category) => ({
    id: category.id,
    label: category.label,
    percent: Math.round(
      mean(
        sorted.map(
          (run) => run.categories.find((item) => item.id === category.id)?.percent ?? 0,
        ),
      ),
    ),
  }));

  const scenarios = orderedScenarios().map((scenario) => {
    const scores = sorted.map((run) => scoreOf(run, scenario.id));
    const correctShare = completed === 0 ? 0 : scores.filter((score) => score === 10).length / completed;
    const riskShare = completed === 0 ? 0 : scores.filter((score) => score <= 5).length / completed;
    const missShare = completed === 0 ? 0 : scores.filter((score) => score < 10).length / completed;
    return {
      id: scenario.id,
      order: scenario.order,
      chip: scenario.chipLabel,
      title: scenario.title,
      correctShare,
      riskShare,
      missShare,
      averageScore: Math.round(mean(scores)),
    };
  });

  const profiles = PROFILE_ORDER.map((id) => {
    const count = sorted.filter((run) => run.profileId === id).length;
    return {
      id,
      title: PROFILE_COPY[id].title,
      count,
      share: completed === 0 ? 0 : count / completed,
      color: PROFILE_COLOR[id],
    };
  });

  return {
    runs: sorted,
    completed,
    finished,
    averageIndex,
    averageDurationMin,
    categories,
    scenarios,
    mistakes: [...scenarios].filter((row) => row.missShare > 0).sort((a, b) => b.missShare - a.missShare),
    profiles,
  };
}

export function percentLabel(share: number): string {
  return `${Math.round(share * 100)}%`;
}
