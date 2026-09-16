import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postRun } from "@/api/runs";
import { profileFromIndex } from "@/game/profile";
import { buildResultsView, toPostRunAnswers } from "@/game/scoring";
import { downloadChecklistPdf } from "@/pdf/checklist";
import { shareIndex } from "@/share/share";
import {
  firstUnansweredId,
  markSynced,
  readSession,
  replaySession,
} from "@/session/storage";
import { GhostButton, PrimaryButton } from "@/ui/Buttons";
import {
  CategoryBars,
  EmptyState,
  IndexRing,
  StrengthRiskCards,
} from "@/ui/kit";
import { useToast } from "@/ui/Toast";

export function ResultsPage() {
  const nav = useNavigate();
  const { showToast } = useToast();
  const session = readSession();
  const view = buildResultsView(session);

  useEffect(() => {
    if (view.isComplete && !session.synced && session.completedAt) {
      void postRun({
        anonymousId: session.anonymousId,
        runId: session.runId,
        startedAt: session.startedAt,
        completedAt: session.completedAt,
        index: view.index,
        profileId: view.profileId ?? profileFromIndex(view.index),
        answers: toPostRunAnswers(session.answers),
        categories: view.categories.map(({ id, earned, max, percent }) => ({
          id,
          earned,
          max,
          percent,
        })),
        contentVersion: 1,
        client: "mdd-web",
      })
        .then(() => markSynced(true))
        .catch(() => markSynced(false));
    }
  }, [session.completedAt, session.runId, session.synced, view.index, view.isComplete]);

  useEffect(() => {
    if (!view.isComplete) return;
    let idle = window.setTimeout(() => {
      replaySession();
      nav("/");
    }, 120_000);
    const bump = () => {
      window.clearTimeout(idle);
      idle = window.setTimeout(() => {
        replaySession();
        nav("/");
      }, 120_000);
    };
    window.addEventListener("pointerdown", bump);
    window.addEventListener("keydown", bump);
    window.addEventListener("scroll", bump, true);
    return () => {
      window.clearTimeout(idle);
      window.removeEventListener("pointerdown", bump);
      window.removeEventListener("keydown", bump);
      window.removeEventListener("scroll", bump, true);
    };
  }, [nav, view.isComplete]);

  if (session.answers.length === 0) {
    return (
      <EmptyState
        title="Сначала пройдите хотя бы один тест"
        action={
          <PrimaryButton onClick={() => nav("/")}>На главную</PrimaryButton>
        }
      />
    );
  }

  return (
    <div className="grid gap-6">
      <h1 className="t-h2">Результаты</h1>
      <IndexRing value={view.index} />
      {view.isComplete ? (
        <>
          <section>
            <h2 className="t-h2">{view.profileTitle}</h2>
            <p className="t-body-l">{view.profileBody}</p>
          </section>
          <StrengthRiskCards strengths={view.strengths} risks={view.risks} />
        </>
      ) : null}
      <details>
        <summary className="t-caption cursor-pointer">Статистика</summary>
        <div className="pt-3">
          <CategoryBars items={view.categories} />
        </div>
      </details>
      {view.isComplete ? (
        <div className="grid gap-3">
          <PrimaryButton
            onClick={async () => {
              try {
                await downloadChecklistPdf(view, session);
              } catch {
                try {
                  await downloadChecklistPdf(view, session);
                } catch {
                  showToast("Не удалось сформировать файл, попробуйте ещё раз");
                }
              }
            }}
          >
            Скачайте чек-лист безопасности
          </PrimaryButton>
          <GhostButton
            onClick={async () => {
              const mode = await shareIndex(view.index, view.profileTitle);
              if (mode === "copied") showToast("Текст скопирован");
            }}
          >
            Поделиться
          </GhostButton>
          <PrimaryButton
            onClick={() => {
              replaySession();
              nav("/play/s01");
            }}
          >
            Пройти игру ещё раз
          </PrimaryButton>
        </div>
      ) : (
        <PrimaryButton onClick={() => nav(`/play/${firstUnansweredId()}`)}>
          Продолжить маршрут
        </PrimaryButton>
      )}
    </div>
  );
}
