import { useEffect, useState, type ReactNode } from "react";
import kit from "./kit.module.css";
import type { CategoryStat, RunAnswerDetail, RunListItem } from "@/content/types";
import { PROFILE_COPY } from "@/game/profile";
import { Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function IndexRing({ value, max = 100 }: { value: number; max?: number }) {
  return (
    <div className={kit.ring} aria-label={`Индекс ${value} из ${max}`}>
      {value}
    </div>
  );
}

export function CategoryBars({
  items,
  variant = "plain",
  play = true,
}: {
  items: CategoryStat[];
  variant?: "plain" | "profile";
  /** When false, profile bars stay at zero until the block is revealed. */
  play?: boolean;
}) {
  const reveal = variant === "profile";
  const [progress, setProgress] = useState(reveal ? 0 : 1);

  useEffect(() => {
    if (!reveal) return;
    if (!play) {
      setProgress(0);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    setProgress(0);
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1100);
      setProgress(1 - (1 - t) ** 3);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reveal, play]);

  return (
    <div className={kit.bars}>
      {items.map((item) => {
        const weak = variant === "profile" && item.percent < 50;
        const width = reveal ? item.percent * progress : item.percent;
        const mark = reveal ? Math.round(item.percent * progress) : null;
        return (
          <div key={item.id} className={variant === "profile" ? kit.statBlock : undefined}>
            <div className={`${kit.statRow} ${weak ? kit.weak : ""}`}>
              <span>{item.label}</span>
              <span>{mark === null ? `${item.earned}/${item.max}` : `${mark}%`}</span>
            </div>
            <div className={kit.barTrack}>
              <div
                className={weak ? kit.barFillWeak : kit.barFill}
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AdminStatCard({
  kicker,
  value,
  hint,
}: {
  kicker: string;
  value: string | number;
  hint: string;
}) {
  return (
    <article className="bg-white p-4 rounded-xl border" style={{ borderColor: "var(--border)" }}>
      <p className="t-caption">{kicker}</p>
      <p className="t-h2" style={{ fontWeight: 700, fontSize: 32 }}>
        {value}
      </p>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {hint}
      </p>
    </article>
  );
}

export function AdminRunsTable({ items }: { items: RunListItem[] }) {
  const nav = useNavigate();
  return (
    <table className={`${kit.table} hidden md:table`}>
      <thead>
        <tr>
          <th>Завершено</th>
          <th>Индекс</th>
          <th>Профиль</th>
          <th>Run</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.runId}
            className={kit.row}
            onClick={() => nav(`/admin/runs/${item.runId}`)}
          >
            <td>{new Date(item.completedAt).toLocaleString("ru-RU")}</td>
            <td>{item.index}</td>
            <td>{PROFILE_COPY[item.profileId].title}</td>
            <td>
              <span className="mr-2">{item.runId.slice(0, 8)}…</span>
              <button
                type="button"
                aria-label="Копировать runId"
                onClick={(event) => {
                  event.stopPropagation();
                  void navigator.clipboard.writeText(item.runId);
                }}
              >
                <Copy size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AdminRunAnswers({
  items,
  titles,
}: {
  items: RunAnswerDetail[];
  titles: Record<string, string>;
}) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item.scenarioId}
          className="bg-white p-3 border"
          style={{ borderColor: "var(--border)" }}
        >
          <p>{titles[item.scenarioId] ?? item.scenarioId}</p>
          <p>
            {item.answerId} · {item.score}/10 ·{" "}
            <span style={{ color: item.correct ? "var(--success)" : "var(--error)" }}>
              {item.correct ? "верно" : "ошибка"}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export function PasswordField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className={kit.field}>
      <span className="t-caption">Пароль стенда</span>
      <input
        className={kit.input}
        type="password"
        autoComplete="current-password"
        maxLength={200}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export function Banner({ children }: { children: ReactNode }) {
  return <div className={kit.banner}>{children}</div>;
}

export function EmptyState({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className={kit.empty}>
      <p>{title}</p>
      {action}
    </div>
  );
}
