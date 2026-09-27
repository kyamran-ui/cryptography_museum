import { useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createAdminSession } from "@/api/admin";
import { ApiError } from "@/api/types";
import { HeaderMuseumBastion } from "@/ui/HeaderMuseumBastion";
import { GhostButton, PrimaryButton } from "@/ui/Buttons";
import { PasswordField } from "@/ui/kit";
import styles from "./AdminLoginPage.module.css";

export function AdminLoginPage() {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const nextRaw = params.get("next") ?? "/admin";
  const next = nextRaw.startsWith("/admin") ? nextRaw : "/admin";
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const empty = password.trim().length === 0;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (empty) return;
    setLoading(true);
    setError(null);
    try {
      await createAdminSession(password);
      nav(next);
    } catch (err) {
      if (err instanceof ApiError && err.code === "INVALID_CREDENTIALS") {
        setError("Неверный пароль");
      } else {
        setError("Не удалось войти, попробуйте ещё раз");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-dvh grid place-items-center px-4">
      <form
        className="w-full max-w-[400px] grid gap-4 bg-white p-6"
        style={{ maxWidth: 400 }}
        onSubmit={onSubmit}
      >
        <HeaderMuseumBastion />
        <h1 className="t-h2">Посмотреть статистику</h1>
        <PasswordField
          value={password}
          onChange={setPassword}
          label="Введите пароль"
          labelClassName={styles.label}
        />
        {error ? <p style={{ color: "var(--error)" }}>{error}</p> : null}
        <PrimaryButton
          className={styles.enter}
          type="submit"
          disabled={empty || loading}
          iconSrc={empty || loading ? undefined : "/icons/arrow_right.svg"}
        >
          {loading ? "Вход…" : "Войти"}
        </PrimaryButton>
        <GhostButton
          className={styles.game}
          type="button"
          iconSrc="/icons/arrow_right.svg"
          onClick={() => nav("/")}
        >
          К игре
        </GhostButton>
      </form>
    </div>
  );
}
