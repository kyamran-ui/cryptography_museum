import { apiBaseUrl } from "./env";
import { ApiErrorSchema } from "./schema";
import { ApiError, type ApiErrorCode } from "./types";

const TIMEOUT_MS = 8000;

export async function apiFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
  const base = apiBaseUrl();
  try {
    const response = await fetch(`${base}${path}`, {
      ...init,
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...(init.body ? { "Content-Type": "application/json" } : {}),
        ...init.headers,
      },
      signal: controller.signal,
    });
    const json: unknown = await response.json().catch(() => null);
    if (!response.ok) {
      const parsed = ApiErrorSchema.safeParse(json);
      const code = (parsed.success ? parsed.data.error.code : "INTERNAL") as ApiErrorCode;
      const message = parsed.success ? parsed.data.error.message : "Сбой запроса";
      throw new ApiError(code, message, response.status);
    }
    return json as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError("NETWORK", "Нет сети", 0);
  } finally {
    window.clearTimeout(timer);
  }
}
