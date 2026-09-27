import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { clearAdminSession } from "@/api/admin";
import { ApiError } from "@/api/types";
import type { RunDetail } from "@/content/types";
import { buildSnapshot, filterByPeriod, type AdminSnapshot, type PeriodId } from "./aggregate";
import { loadAllRunDetails } from "./loadRuns";

interface AdminDataValue {
  period: PeriodId;
  setPeriod: (period: PeriodId) => void;
  loading: boolean;
  error: string | null;
  reload: () => void;
  snapshot: AdminSnapshot | null;
}

const AdminDataContext = createContext<AdminDataValue | null>(null);

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const nav = useNavigate();
  const [period, setPeriod] = useState<PeriodId>("30");
  const [runs, setRuns] = useState<RunDetail[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const reload = useCallback(() => setTick((value) => value + 1), []);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    loadAllRunDetails()
      .then((next) => {
        if (alive) setRuns(next);
      })
      .catch((err: unknown) => {
        if (!alive) return;
        if (err instanceof ApiError && (err.code === "UNAUTHORIZED" || err.status === 401)) {
          clearAdminSession();
          nav("/admin/login?next=/admin");
          return;
        }
        setError("Не удалось загрузить статистику");
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [nav, tick]);

  const snapshot = useMemo(
    () => (runs ? buildSnapshot(filterByPeriod(runs, period)) : null),
    [period, runs],
  );

  const value = useMemo(
    () => ({ period, setPeriod, loading, error, reload, snapshot }),
    [error, loading, period, reload, snapshot],
  );

  return <AdminDataContext.Provider value={value}>{children}</AdminDataContext.Provider>;
}

export function useAdminData(): AdminDataValue {
  const value = useContext(AdminDataContext);
  if (!value) throw new Error("useAdminData outside AdminDataProvider");
  return value;
}
