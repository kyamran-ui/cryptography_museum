import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { desktopIllustration, mobileIllustration } from "@/content/illustrations";
import { getScenario, orderedScenarios } from "@/content/load";
import type { AnswerId, Scenario } from "@/content/types";
import { nextUnansweredAfter, readSession, recordAnswer } from "@/session/storage";
import { AnswerButton } from "@/ui/AnswerButton";
import { GhostButton } from "@/ui/Buttons";
import { CommentCard } from "@/ui/CommentCard";
import { RouteChips } from "@/ui/RouteChips";
import { ScoreCard } from "@/ui/ScoreCard";
import { useToast } from "@/ui/Toast";
import styles from "./PlayPage.module.css";

export function PlayPage() {
  const { scenarioId = "" } = useParams();
  const nav = useNavigate();
  const { showToast } = useToast();
  const scenario = getScenario(scenarioId);
  const session = readSession();
  const [tick, setTick] = useState(0);
  const stored = session.answers.find((a) => a.scenarioId === scenarioId);
  const debrief = Boolean(stored);
  const [pickedFor, setPickedFor] = useState(scenarioId);
  const [picked, setPicked] = useState<AnswerId | null>(stored?.answerId ?? null);
  const [unknown, setUnknown] = useState(false);
  void tick;

  if (pickedFor !== scenarioId) {
    setPickedFor(scenarioId);
    setPicked(stored?.answerId ?? null);
  }

  useEffect(() => {
    if (!getScenario(scenarioId)) {
      showToast("Такого теста нет");
      setUnknown(true);
    }
  }, [scenarioId, showToast]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [scenarioId, debrief]);

  if (unknown || !scenario) {
    return <Navigate to="/" replace />;
  }

  const choice = scenario.answers.find((a) => a.id === (stored?.answerId ?? picked));

  return (
    <div className={`${styles.play} flex min-w-0 flex-1 flex-col`}>
      <div className={styles.chips}>
        <RouteChips scenarios={orderedScenarios()} currentId={scenario.id} />
      </div>
      <div className={`${styles.meta} flex items-center justify-end gap-4`}>
        <p className={`t-caption ${styles.count}`}>{scenario.order}/10</p>
        <p className={`t-badge ${styles.badge}`}>[ {scenario.badge} ]</p>
      </div>
      {!debrief ? (
        <div key={`${scenario.id}-ask`} className={`${styles.scene} flex min-h-0 flex-1 flex-col`}>
          <Question
            scenario={scenario}
            picked={picked}
            onPick={setPicked}
            onSubmit={() => {
              if (!picked) return;
              recordAnswer(scenario.id, picked);
              setTick((value) => value + 1);
            }}
          />
        </div>
      ) : choice ? (
        <div key={`${scenario.id}-debrief`} className={`${styles.scene} flex min-h-0 flex-1 flex-col`}>
          <Debrief
            scenario={scenario}
            answer={choice}
            onNext={() => {
              const next = nextUnansweredAfter(scenario.id);
              if (!next) nav("/results");
              else nav(`/play/${next}`);
            }}
            nextLabel={
              nextUnansweredAfter(scenario.id) ? "Следующий вопрос" : "Цифровой профиль"
            }
          />
        </div>
      ) : null}
    </div>
  );
}

function Question({
  scenario,
  picked,
  onPick,
  onSubmit,
}: {
  scenario: Scenario;
  picked: AnswerId | null;
  onPick: (id: AnswerId) => void;
  onSubmit: () => void;
}) {
  const [brokenArt, setBrokenArt] = useState(false);
  const mobileArt = mobileIllustration[scenario.id];
  const desktopArt = desktopIllustration[scenario.id];
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className={styles.question}>
      {!brokenArt && mobileArt && desktopArt ? (
        <picture className={styles.artFrame}>
          <source
            media="(min-width: 1024px)"
            srcSet={`${desktopArt.src} 1x, ${desktopArt.src2x} 2x`}
          />
          <img
            className={styles.art}
            src={mobileArt.src}
            srcSet={`${mobileArt.src} 1x, ${mobileArt.src2x} 2x`}
            alt=""
            onError={() => setBrokenArt(true)}
          />
        </picture>
      ) : (
        <div
          className={`grid h-[188px] -mx-4 place-items-center ${styles.art}`}
          style={{ background: "var(--bg-route-muted)" }}
        >
          Слот иллюстрации {scenario.id}
        </div>
      )}
      <div className={styles.copy}>
        <h1 className={`t-h2 ${styles.title}`}>{scenario.title}</h1>
        <p className={`t-body-l ${styles.story}`}>{scenario.situation}</p>
        <div className={`grid gap-2 ${styles.answers}`}>
          {scenario.answers.map((answer) => (
            <AnswerButton
              key={answer.id}
              id={answer.id}
              text={answer.text}
              selected={picked === answer.id}
              onSelect={onPick}
            />
          ))}
        </div>
        <div className={styles.submit}>
          <GhostButton
            className={styles.reply}
            iconSrc="/icons/arrow_right.svg"
            disabled={!picked}
            onClick={onSubmit}
          >
            Ответить
          </GhostButton>
        </div>
      </div>
      </div>
    </div>
  );
}

function Debrief({
  scenario,
  answer,
  onNext,
  nextLabel,
}: {
  scenario: Scenario;
  answer: Scenario["answers"][number];
  onNext: () => void;
  nextLabel: string;
}) {
  return (
    <div className={styles.debrief}>
      <ScoreCard answer={answer} />
      <div className={styles.comments}>
        <CommentCard index="01" title="Что произойдет дальше" text={answer.outcome} />
        <CommentCard index="02" title="В чем риск" text={answer.risk} filled />
        {answer.score === 10 ? null : (
          <CommentCard index="03" title="Как правильно" text={scenario.howRight} ruled />
        )}
      </div>
      <div className={styles.submit}>
        <GhostButton className={styles.reply} iconSrc="/icons/arrow_right.svg" onClick={onNext}>
          {nextLabel}
        </GhostButton>
      </div>
    </div>
  );
}
