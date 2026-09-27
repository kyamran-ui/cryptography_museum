import { useEffect, type ReactNode } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { clearAdminSession } from "@/api/admin";
import { AdminDataProvider, useAdminData } from "@/admin/data";
import type { PeriodId } from "@/admin/aggregate";
import { CipherTitle } from "./CipherTitle";
import styles from "./AdminShell.module.css";

const NAV = [
  { to: "/admin", label: "Обзор", end: true },
  { to: "/admin/runs", label: "Прохождения", end: false },
  { to: "/admin/scenarios", label: "Сценарии", end: false },
  { to: "/admin/categories", label: "Категории", end: false },
  { to: "/admin/mistakes", label: "Ошибки", end: false },
  { to: "/admin/profiles", label: "Профили", end: false },
];

const PERIODS: Array<{ id: PeriodId; label: string }> = [
  { id: "7", label: "7 дней" },
  { id: "30", label: "30 дней" },
  { id: "all", label: "Всё время" },
];

function sectionTitle(path: string): string {
  if (/^\/admin\/runs\/[^/]+$/.test(path)) return "Прохождение";
  const item = NAV.find((entry) => (entry.end ? path === entry.to : path.startsWith(entry.to)));
  return item?.label ?? "Обзор";
}

function ShellFrame({ children }: { children: ReactNode }) {
  const nav = useNavigate();
  const path = useLocation().pathname;
  const { period, setPeriod } = useAdminData();
  const showPeriod = !/^\/admin\/runs\/[^/]+$/.test(path);

  useEffect(() => {
    document.documentElement.classList.add("adminNoBar");
    return () => document.documentElement.classList.remove("adminNoBar");
  }, []);

  return (
    <div className={styles.shell}>
      <aside className={styles.side}>
        <div className={styles.brand}>
          <a
            className={styles.logoLink}
            href="https://cryptography-museum.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoMuseum} src="/logos/main-logo_cryptography-museum.svg" alt="Музей криптографии" />
          </a>
          <img className={styles.logoBastion} src="/logos/logo-bastion.svg" alt="Бастион" />
        </div>
        <nav className={styles.nav}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className={styles.logout}
          onClick={() => {
            clearAdminSession();
            nav("/admin/login");
          }}
        >
          <span className={styles.bracket} aria-hidden="true">[</span>
          <span className={styles.word}>Выйти</span>
          <span className={styles.bracket} aria-hidden="true">]</span>
        </button>
      </aside>
      <div className={styles.main}>
        <header className={styles.top}>
          <CipherTitle className={styles.title} text={sectionTitle(path)} />
          {showPeriod ? (
            <div className={styles.periods} role="group" aria-label="Период">
              {PERIODS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === period ? styles.periodOn : styles.period}
                  onClick={() => setPeriod(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : null}
        </header>
        {children}
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <AdminDataProvider>
      <ShellFrame>{children}</ShellFrame>
    </AdminDataProvider>
  );
}
