import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { postRun } from "@/api/runs";
import { profileFromIndex } from "@/game/profile";
import { buildResultsView, toPostRunAnswers } from "@/game/scoring";
import { downloadChecklistPdf } from "@/pdf/checklist";
import {
  firstUnansweredId,
  markSynced,
  readSession,
  replaySession,
} from "@/session/storage";
import { ShareResult } from "@/ui/ShareResult";
import { ChecklistSection } from "@/ui/ChecklistSection";
import { ExhibitionPromo } from "@/ui/ExhibitionPromo";
import { IndexHeader } from "@/ui/IndexHeader";
import { Statistics } from "@/ui/Statistics";
import { StrengthZones } from "@/ui/StrengthZones";
import { useToast } from "@/ui/Toast";
import styles from "./ResultsPage.module.css";

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

  // Киоск-таймер временно снят: 2 мин бездействия больше не сбрасывают сессию и не уводят на /.
  // Вернуть эффект из SPEC §4.8, когда вёрстка /results будет принята.

  if (!view.isComplete) {
    if (session.answers.length === 0) return <Navigate to="/" replace />;
    return <Navigate to={`/play/${firstUnansweredId()}`} replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <IndexHeader
          className={styles.header}
          value={view.index}
          profileTitle={view.profileTitle ?? ""}
          profileBody={view.profileBody}
        />
        <ChecklistSection
          className={styles.checklist}
          onDownload={() => {
            void downloadChecklistPdf(view, session).catch(() => {
              showToast("Не удалось сформировать файл, попробуйте ещё раз");
            });
          }}
        />
      </div>
      <div className={styles.board}>
        <Statistics className={styles.stats} items={view.categories} />
        <StrengthZones
          className={styles.zones}
          strengths={view.strengths}
          risks={view.risks}
          answers={session.answers}
        />
      </div>
      <ExhibitionPromo className={styles.promo} />
      <ShareResult
        className={styles.share}
        index={view.index}
        profileTitle={view.profileTitle}
        onReplay={() => {
          replaySession();
          nav("/");
        }}
        onCopied={() => showToast("Ссылка скопирована")}
        onCopyFail={() => showToast("Не удалось скопировать ссылку")}
      />
    </div>
  );
}
