import type { ReactNode } from "react";
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

export function CategoryBars({ items }: { items: CategoryStat[] }) {
  return (
    <div className={kit.bars}>
      {items.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between text-sm mb-1">
            <span>{item.label}</span>
            <span>
              {item.earned}/{item.max}
            </span>
          </div>
          <div className={kit.barTrack}>
            <div className={kit.barFill} style={{ width: `${item.percent}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function StrengthRiskCards({
  strengths,
  risks,
}: {
  strengths: CategoryStat[];
  risks: CategoryStat[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <section className="bg-white p-4 border" style={{ borderColor: "var(--border)" }}>
        <h3 className="t-h2 mb-2">Сильные стороны</h3>
        {strengths.length === 0 ? (
          <p>Пока нет устойчивых тем — это нормально, откройте памятку.</p>
        ) : (
          strengths.map((item) => (
            <p key={item.id}>
              {item.label} · {item.percent}%
            </p>
          ))
        )}
      </section>
      <section className="bg-white p-4 border" style={{ borderColor: "var(--border)" }}>
        <h3 className="t-h2 mb-2">Зоны риска</h3>
        {risks.length === 0 ? (
          <p>Критических провалов по темам нет. Держите привычки.</p>
        ) : (
          risks.map((item) => (
            <p key={item.id}>
              {item.label} · {item.percent}%
            </p>
          ))
        )}
      </section>
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
