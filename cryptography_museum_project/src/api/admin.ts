import { clearAdminFlag, setAdminSession } from "@/admin/gate";
import { apiFetch } from "./client";
import { useMockApi } from "./env";
import { mockCreateAdminSession } from "./mock";
import { AdminSessionRequestSchema, AdminSessionResponseSchema } from "./schema";

export async function createAdminSession(password: string): Promise<{ ok: true }> {
  const body = AdminSessionRequestSchema.parse({ password });
  if (useMockApi()) {
    const result = await mockCreateAdminSession(body.password);
    setAdminSession();
    return result;
  }
  const json = await apiFetch<unknown>("/admin/session", {
    method: "POST",
    body: JSON.stringify(body),
  });
  const parsed = AdminSessionResponseSchema.parse(json);
  setAdminSession();
  return parsed;
}

export function clearAdminSession(): void {
  clearAdminFlag();
}
