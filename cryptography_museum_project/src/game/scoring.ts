import { orderedScenarios } from "@/content/load";
import type {
  CategoryId,
  CategoryStat,
  ResultsView,
  Scenario,
  SessionState,
  StoredAnswer,
} from "@/content/types";
import { PROFILE_COPY, profileFromIndex } from "./profile";

export const CATEGORY_ORDER: Array<{
  id: CategoryId;
  label: string;
  scenarioIds: Scenario["id"][];
  max: number;
}> = [
  { id: "phishing", label: "Фишинг", scenarioIds: ["s01", "s07", "s08"], max: 30 },
  { id: "privacy", label: "Приватность", scenarioIds: ["s02", "s09"], max: 20 },
  { id: "wifi", label: "Wi-Fi / Сети", scenarioIds: ["s03"], max: 10 },
  { id: "accounts", label: "Пароли / Аккаунты", scenarioIds: ["s04", "s05"], max: 20 },
  { id: "devices", label: "Устройства", scenarioIds: ["s06", "s10"], max: 20 },
  { id: "finance", label: "Финансы", scenarioIds: ["s01", "s07"], max: 20 },
];

function roundHalfUp(value: number): number {
  return Math.round(value);
}

export function scoreFromBundle(answers: StoredAnswer[]): StoredAnswer[] {
  const scenarios = orderedScenarios();
  return answers.map((item) => {
    const scenario = scenarios.find((s) => s.id === item.scenarioId);
    const choice = scenario?.answers.find((a) => a.id === item.answerId);
    return choice ? { ...item, score: choice.score } : item;
  });
}

export function categoryStats(answers: StoredAnswer[]): CategoryStat[] {
  const byId = new Map(scoreFromBundle(answers).map((a) => [a.scenarioId, a]));
  return CATEGORY_ORDER.map((cat) => {
    const earned = cat.scenarioIds.reduce((sum, id) => {
      const hit = byId.get(id);
      return sum + (hit ? hit.score : 0);
    }, 0);
    return {
      id: cat.id,
      label: cat.label,
      earned,
      max: cat.max,
      percent: roundHalfUp((earned / cat.max) * 100),
    };
  });
}

export function strengthsAndRisks(
  categories: CategoryStat[],
  answers: StoredAnswer[],
): { strengths: CategoryStat[]; risks: CategoryStat[] } {
  const answeredIds = new Set(answers.map((a) => a.scenarioId));
  const eligible = categories.filter((c) => {
    const meta = CATEGORY_ORDER.find((m) => m.id === c.id)!;
    return meta.scenarioIds.some((id) => answeredIds.has(id));
  });

  if (eligible.length <= 2) {
    return { strengths: eligible, risks: [] };
  }

  const byCanon = (a: CategoryStat, b: CategoryStat) =>
    CATEGORY_ORDER.findIndex((c) => c.id === a.id) -
    CATEGORY_ORDER.findIndex((c) => c.id === b.id);

  const allEqual = eligible.every((c) => c.percent === eligible[0].percent);
  if (allEqual && eligible.length === 6) {
    return { strengths: eligible.slice(0, 2), risks: eligible.slice(-2) };
  }

  const strengths = [...eligible]
    .sort((a, b) => (b.percent !== a.percent ? b.percent - a.percent : byCanon(a, b)))
    .slice(0, 2);
  const strengthIds = new Set(strengths.map((s) => s.id));
  const risks = eligible
    .filter((c) => !strengthIds.has(c.id))
    .sort((a, b) => (a.percent !== b.percent ? a.percent - b.percent : byCanon(a, b)))
    .slice(0, 2);
  return { strengths, risks };
}

export function buildResultsView(session: SessionState): ResultsView {
  const answers = scoreFromBundle(session.answers);
  const index = answers.reduce((sum, a) => sum + a.score, 0);
  const isComplete = answers.length === 10;
  const categories = categoryStats(answers);
  const cards = isComplete
    ? strengthsAndRisks(categories, answers)
    : { strengths: [] as CategoryStat[], risks: [] as CategoryStat[] };
  const profileId = isComplete ? profileFromIndex(index) : null;
  return {
    answeredCount: answers.length,
    index,
    indexMax: 100,
    isComplete,
    profileId,
    profileTitle: profileId ? PROFILE_COPY[profileId].title : null,
    profileBody: profileId ? PROFILE_COPY[profileId].body : null,
    strengths: cards.strengths,
    risks: cards.risks,
    categories,
  };
}

export function toPostRunAnswers(answers: StoredAnswer[]) {
  return scoreFromBundle(answers).map((a) => ({
    scenarioId: a.scenarioId,
    answerId: a.answerId,
    score: a.score,
  }));
}
