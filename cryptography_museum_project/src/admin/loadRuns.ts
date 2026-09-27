import { getRun, listRuns } from "@/api/runs";
import type { RunDetail } from "@/content/types";

export async function loadAllRunDetails(): Promise<RunDetail[]> {
  const perPage = 20;
  const first = await listRuns({ page: 1, per_page: perPage });
  const items = [...first.data];
  const pages = Math.ceil(first.meta.total / perPage);
  for (let page = 2; page <= pages; page += 1) {
    const next = await listRuns({ page, per_page: perPage });
    items.push(...next.data);
  }
  return Promise.all(items.map((item) => getRun(item.runId)));
}
