import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { clearAdminSession } from "@/api/admin";
import { getRun } from "@/api/runs";
import { ApiError } from "@/api/types";
import { orderedScenarios } from "@/content/load";
import type { RunDetail } from "@/content/types";
import { PROFILE_COPY } from "@/game/profile";
import { HeaderMuseumBastion } from "@/ui/HeaderMuseumBastion";
import { PrimaryButton } from "@/ui/Buttons";
import { AdminRunAnswers, Banner, CategoryBars, EmptyState, IndexRing } from "@/ui/kit";

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function AdminRunPage() {
  const { runId = "" } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [run, setRun] = useState<RunDetail | null>(null);
  const valid = UUID.test(runId);

  useEffect(() => {
    if (!valid) {
      setLoading(false);
      setRun(null);
      return;
    }
    setLoading(true);
    getRun(runId)
      .then(setRun)
      .catch((err: unknown) => {
        if (err instanceof ApiError && (err.code === "UNAUTHORIZED" || err.status === 401)) {
          clearAdminSession();
          nav(`/admin/login?next=/admin/runs/${runId}`);
          return;
        }
        if (err instanceof ApiError && err.code === "NOT_FOUND") {
          setRun(null);
        } else {
          setError("Не удалось загрузить прохождение");
        }
      })
      .finally(() => setLoading(false));
  }, [nav, runId, valid]);

  const titles = Object.fromEntries(
    orderedScenarios().map((s) => [s.id, `${s.order}. ${s.chipLabel} · ${s.title}`]),
  );

  return (
    <div className="grid gap-6">
      <HeaderMuseumBastion />
      <Link to="/admin" style={{ color: "var(--blue-primary)" }}>
        ← К сводке
      </Link>
      <h1 className="t-h2">Прохождение</h1>
      {valid ? <p className="font-mono break-all">{runId}</p> : null}
      {!valid || (!loading && !run && !error) ? (
        <EmptyState
          title="Прохождение не найдено"
          action={<PrimaryButton onClick={() => nav("/admin")}>К сводке</PrimaryButton>}
        />
      ) : null}
      {error ? (
        <Banner>
          {error}{" "}
          <button type="button" onClick={() => nav(0)}>
            Повторить
          </button>
        </Banner>
      ) : null}
      {loading ? (
        <div className="h-40" style={{ background: "var(--bg-route-muted)" }} />
      ) : run ? (
        <>
          <p className="text-sm">
            {new Date(run.startedAt).toLocaleString("ru-RU")} →{" "}
            {new Date(run.completedAt).toLocaleString("ru-RU")}
          </p>
          <IndexRing value={run.index} />
          <p className="t-h2">{PROFILE_COPY[run.profileId].title}</p>
          <AdminRunAnswers items={run.answers} titles={titles} />
          <CategoryBars items={run.categories} />
        </>
      ) : null}
    </div>
  );
}
