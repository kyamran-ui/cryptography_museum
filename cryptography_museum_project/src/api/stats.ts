import type { StatsSummary } from "@/content/types";
import { apiFetch } from "./client";
import { useMockApi } from "./env";
import { mockGetStatsSummary } from "./mock";
import { StatsSummaryHttpSchema } from "./schema";

export async function getStatsSummary(): Promise<StatsSummary> {
  if (useMockApi()) return mockGetStatsSummary();
  const json = await apiFetch<unknown>("/stats/summary");
  return StatsSummaryHttpSchema.parse(json);
}
