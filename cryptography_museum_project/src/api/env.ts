export function apiBaseUrl(): string {
  return (import.meta.env.VITE_API_BASE_URL ?? "").trim().replace(/\/+$/, "");
}

export function adminPassword(): string {
  const value = (import.meta.env.VITE_ADMIN_PASSWORD ?? "").trim();
  return value.length > 0 ? value : "mdd-admin-stand";
}

export function useMockApi(): boolean {
  return apiBaseUrl() === "";
}
