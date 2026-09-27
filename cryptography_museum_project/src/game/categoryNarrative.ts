import { orderedScenarios } from "@/content/load";
import type { CategoryId, StoredAnswer } from "@/content/types";
import { CATEGORY_ORDER, scoreFromBundle } from "./scoring";

const PRAISE = /^Правильный ответ\.\s*Вы молодец!\s*/;

function resultSentence(outcome: string): string {
  const body = outcome.replace(PRAISE, "").trim();
  const end = body.search(/[.!?](?:\s|$)/);
  if (end === -1) return body;
  return body.slice(0, end + 1).trim();
}

export function categoryNarrative(id: CategoryId, answers: StoredAnswer[]): string {
  const meta = CATEGORY_ORDER.find((item) => item.id === id);
  if (!meta) return "";
  const scenarios = orderedScenarios();
  const byId = new Map(scoreFromBundle(answers).map((item) => [item.scenarioId, item]));
  const sentences = meta.scenarioIds.flatMap((scenarioId) => {
    const stored = byId.get(scenarioId);
    const scenario = scenarios.find((item) => item.id === scenarioId);
    const choice = scenario?.answers.find((item) => item.id === stored?.answerId);
    if (!choice) return [];
    const sentence = resultSentence(choice.outcome);
    return sentence ? [sentence] : [];
  });
  return sentences.join(" ");
}
