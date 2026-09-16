import raw from "./scenarios.json";
import { ScenariosFileSchema } from "./schema";
import type { Scenario, ScenariosFile } from "./types";

let cached: ScenariosFile | null = null;

export function loadScenariosFile(): ScenariosFile {
  if (cached) return cached;
  cached = ScenariosFileSchema.parse(raw) as ScenariosFile;
  const ids = new Set(cached.scenarios.map((s) => s.id));
  const orders = new Set(cached.scenarios.map((s) => s.order));
  if (ids.size !== 10 || orders.size !== 10) {
    throw new Error("scenarios.json: duplicate id or order");
  }
  return cached;
}

export function getScenario(id: string): Scenario | undefined {
  return loadScenariosFile().scenarios.find((s) => s.id === id);
}

export function orderedScenarios(): Scenario[] {
  return [...loadScenariosFile().scenarios].sort((a, b) => a.order - b.order);
}
