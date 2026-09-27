import { orderedScenarios } from "@/content/load";
import type { StoredAnswer } from "@/content/types";
import { scoreFromBundle } from "./scoring";

export type MemoLine = {
  theme: string;
  text: string;
};

export type ChecklistMemo = {
  good: MemoLine[];
  improve: MemoLine[];
};

export function checklistMemo(answers: StoredAnswer[]): ChecklistMemo {
  const byId = new Map(scoreFromBundle(answers).map((item) => [item.scenarioId, item]));
  const good: MemoLine[] = [];
  const improve: MemoLine[] = [];
  for (const scenario of orderedScenarios()) {
    const stored = byId.get(scenario.id);
    if (!stored) continue;
    const line = { theme: scenario.theme, text: scenario.howRight };
    if (stored.score >= 10) good.push(line);
    else improve.push(line);
  }
  return { good, improve };
}
