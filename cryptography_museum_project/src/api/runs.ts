import type { Paginated, PostRunRequest, PostRunResponse, RunDetail, RunListItem } from "@/content/types";
import { apiFetch } from "./client";
import { useMockApi } from "./env";
import { mockGetRun, mockListRuns, mockPostRun } from "./mock";
import { PostRunResponseSchema, RunDetailHttpSchema, RunListResponseHttpSchema } from "./schema";
import { ApiError } from "./types";

export async function postRun(body: PostRunRequest): Promise<PostRunResponse> {
  if (useMockApi()) return mockPostRun(body);
  try {
    const json = await apiFetch<unknown>("/runs", {
      method: "POST",
      body: JSON.stringify(body),
    });
    return PostRunResponseSchema.parse(json);
  } catch (error) {
    if (error instanceof ApiError && error.code === "CONFLICT") {
      return { ok: true, runId: body.runId, stored: true };
    }
    throw error;
  }
}

export async function retryUnsyncedRun(body: PostRunRequest): Promise<PostRunResponse> {
  return postRun(body);
}

export async function listRuns(query: {
  page?: number;
  per_page?: number;
}): Promise<Paginated<RunListItem>> {
  if (useMockApi()) return mockListRuns(query);
  const page = query.page && query.page >= 1 ? query.page : 1;
  const perPage = query.per_page && query.per_page >= 1 && query.per_page <= 20 ? query.per_page : 20;
  const json = await apiFetch<unknown>(`/runs?page=${page}&per_page=${perPage}`);
  return RunListResponseHttpSchema.parse(json);
}

export async function getRun(runId: string): Promise<RunDetail> {
  if (useMockApi()) return mockGetRun(runId);
  const json = await apiFetch<unknown>(`/runs/${runId}`);
  return RunDetailHttpSchema.parse(json) as RunDetail;
}
