import type { ReactNode } from "react";
import { useAdminData } from "@/admin/data";
import { useDrawProgress } from "@/admin/motion";
import { percentLabel, type AdminSnapshot, type ScenarioRow } from "@/admin/aggregate";
import { Banner } from "@/ui/kit";
import styles from "./AdminShell.module.css";

export function AdminStatus({ children }: { children: (snapshot: AdminSnapshot) => ReactNode }) {
  const { loading, error, reload, snapshot } = useAdminData();
  if (error) {
    return (
      <Banner>
        {error}{" "}
        <button type="button" onClick={reload}>
          Повторить
        </button>
      </Banner>
    );
  }
  if (loading || !snapshot) {
    return (
      <div className={styles.kpis}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={styles.skeleton} />
        ))}
      </div>
    );
  }
  return children(snapshot);
}

export function CategoryBars({ snapshot }: { snapshot: AdminSnapshot }) {
  const progress = useDrawProgress();
  return (
    <section className={styles.panel}>
      <h2 className={styles.panelTitle}>Категории</h2>
      {snapshot.categories.map((item) => {
        const shown = Math.round(item.percent * progress);
        return (
          <div key={item.id} className={styles.barRow}>
            <span className={styles.barLabel}>{item.label}</span>
            <div className={styles.track}>
              <div className={styles.fill} style={{ width: `${shown}%` }} />
            </div>
            <span className={styles.barValue}>{shown}%</span>
          </div>
        );
      })}
    </section>
  );
}

export function ProfileDonut({ snapshot }: { snapshot: AdminSnapshot }) {
  const progress = useDrawProgress();
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <section className={styles.panel}>
      <h2 className={styles.panelTitle}>Профили</h2>
      <div className={styles.donutWrap}>
        <svg className={styles.donut} viewBox="0 0 140 140" aria-hidden="true">
          <circle cx="70" cy="70" r={radius} fill="none" stroke="#eff1f7" strokeWidth="16" />
          {snapshot.profiles
            .filter((item) => item.share > 0)
            .map((item) => {
              const length = item.share * progress * circumference;
              const circle = (
                <circle
                  key={item.id}
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="16"
                  strokeDasharray={`${length} ${circumference - length}`}
                  strokeDashoffset={-offset}
                  transform="rotate(-90 70 70)"
                />
              );
              offset += length;
              return circle;
            })}
        </svg>
        <ul className={styles.legend}>
          {snapshot.profiles.map((item) => (
            <li key={item.id} className={styles.legendItem}>
              <span className={styles.swatch} style={{ background: item.color }} />
              <span>
                {item.title} · {item.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MistakeTable({ rows }: { rows: ScenarioRow[] }) {
  if (rows.length === 0) {
    return <p className={styles.empty}>За этот период ошибок нет.</p>;
  }
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Сценарий</th>
            <th>С ошибкой</th>
            <th>Правильно</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                {row.order}. {row.chip} · {row.title}
              </td>
              <td>{percentLabel(row.missShare)}</td>
              <td>{percentLabel(row.correctShare)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
