const FLAG = "mdd.admin";

export function hasAdminSession(): boolean {
  try {
    return sessionStorage.getItem(FLAG) === "1";
  } catch {
    return false;
  }
}

export function setAdminSession(): void {
  sessionStorage.setItem(FLAG, "1");
}

export function clearAdminFlag(): void {
  sessionStorage.removeItem(FLAG);
}
