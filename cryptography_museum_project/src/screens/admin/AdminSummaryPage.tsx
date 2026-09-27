import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearAdminSession } from "@/api/admin";
import { listRuns } from "@/api/runs";
import { getStatsSummary } from "@/api/stats";
import { ApiError } from "@/api/types";
import type { Paginated, RunListItem, StatsSummary } from "@/content/types";
import { HeaderMuseumBastion } from "@/ui/HeaderMuseumBastion";
import { GhostButton, PrimaryButton } from "@/ui/Buttons";
import { AdminRunsTable, AdminStatCard, Banner, EmptyState } from "@/ui/kit";

export function AdminSummaryPage() {
  const nav = useNavigate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<StatsSummary | null>(null);
  const [runs, setRuns] = useState<Paginated<RunListItem> | null>(null);

  async function load(nextPage = page) {
    setLoading(true);
    setError(null);
    try {
      const [summary, list] = await Promise.all([
        getStatsSummary(),
        listRuns({ page: nextPage, per_page: 20 }),
      ]);
      setStats(summary);
      setRuns(list);
    } catch (err) {
      if (err instanceof ApiError && (err.code === "UNAUTHORIZED" || err.status === 401)) {
        clearAdminSession();
        nav("/admin/login?next=/admin");
        return;
      }
      setError("Не удалось загрузить статистику");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load(page);
  }, [page]);

  return (
    <div className="grid gap-6">
      <HeaderMuseumBastion
        rightSlot={
          <GhostButton
            onClick={() => {
              clearAdminSession();
              nav("/admin/login");
            }}
          >
            Выйти
          </GhostButton>
        }
      />
      <h1 className="t-h2">Сводка прохождений</h1>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        Строки — анонимные runId. ФИО, email, телефон не храним и не показываем.
      </p>
      {error ? (
        <Banner>
          {error}{" "}
          <button type="button" onClick={() => void load()}>
            Повторить
          </button>
        </Banner>
      ) : null}
      {loading && !stats ? (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[88px]" style={{ background: "var(--bg-route-muted)" }} />
          ))}
        </div>
      ) : stats ? (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          <AdminStatCard kicker="Посещения" value={stats.startedCount} hint="Старты (пока = завершения)" />
          <AdminStatCard kicker="Завершения" value={stats.completedCount} hint="Принятые POST /runs" />
          <AdminStatCard kicker="Посещаемость" value={stats.attendance} hint="= завершения" />
          <AdminStatCard kicker="Средний индекс" value={stats.averageIndex} hint="из 100" />
          <AdminStatCard kicker="Доля завершений" value={`${stats.completionRate}%`} hint="%" />
        </div>
      ) : null}
      {runs && runs.meta.total === 0 ? (
        <EmptyState
          title="Пока нет завершённых прохождений. Сыграйте десятку в этой вкладке (мок) или дождитесь POST на стороне Бастиона."
          action={<PrimaryButton onClick={() => nav("/")}>Открыть игру</PrimaryButton>}
        />
      ) : (
        <>
          {runs ? <AdminRunsTable items={runs.data} /> : null}
          <div className="grid gap-3 md:hidden">
            {runs?.data.map((item) => (
              <button
                key={item.runId}
                type="button"
                className="text-left bg-white p-4 border"
                style={{ borderColor: "var(--border)" }}
                onClick={() => nav(`/admin/runs/${item.runId}`)}
              >
                <p>{item.index} · {item.runId.slice(0, 8)}…</p>
                <p className="text-sm">{new Date(item.completedAt).toLocaleString("ru-RU")}</p>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <GhostButton disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
              Назад
            </GhostButton>
            <span className="text-sm">
              стр. {page} · {runs?.meta.total ?? 0}
            </span>
            <GhostButton
              disabled={!runs || page * 20 >= runs.meta.total}
              onClick={() => setPage((p) => p + 1)}
            >
              Далее
            </GhostButton>
          </div>
        </>
      )}
    </div>
  );
}
