import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getScenario, orderedScenarios } from "@/content/load";
import type { AnswerId, Scenario } from "@/content/types";
import { nextUnansweredAfter, readSession, recordAnswer } from "@/session/storage";
import { AnswerButton } from "@/ui/AnswerButton";
import { GhostButton, PrimaryButton } from "@/ui/Buttons";
import { CommentCard } from "@/ui/CommentCard";
import { RouteChips } from "@/ui/RouteChips";
import { ScoreCard } from "@/ui/ScoreCard";
import { useToast } from "@/ui/Toast";

export function PlayPage() {
  const { scenarioId = "" } = useParams();
  const nav = useNavigate();
  const { showToast } = useToast();
  const scenario = getScenario(scenarioId);
  const session = readSession();
  const [tick, setTick] = useState(0);
  const stored = session.answers.find((a) => a.scenarioId === scenarioId);
  const [picked, setPicked] = useState<AnswerId | null>(stored?.answerId ?? null);
  const [unknown, setUnknown] = useState(false);
  void tick;

  useEffect(() => {
    if (!getScenario(scenarioId)) {
      showToast("Такого теста нет");
      setUnknown(true);
    }
  }, [scenarioId, showToast]);

  if (unknown || !scenario) {
    return <Navigate to="/" replace />;
  }

  const debrief = Boolean(stored);
  const choice = scenario.answers.find((a) => a.id === (stored?.answerId ?? picked));
  const answeredCount = session.answers.length;
  const progressLabel = debrief
    ? `${answeredCount}/10`
    : `${Math.min(answeredCount + 1, 10)}/10`;

  return (
    <div className="grid gap-4">
      <RouteChips scenarios={orderedScenarios()} currentId={scenario.id} />
      <p className="t-caption">{progressLabel}</p>
      <p className="t-badge">{scenario.badge}</p>
      <h1 className="t-h2">{scenario.title}</h1>
      {!debrief ? (
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
      ) : choice ? (
        <Debrief
          answer={choice}
          onNext={() => {
            const next = nextUnansweredAfter(scenario.id);
            if (!next) nav("/results");
            else nav(`/play/${next}`);
          }}
          nextLabel={
            nextUnansweredAfter(scenario.id) ? "Следующий вопрос" : "Смотреть результат"
          }
        />
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
  return (
    <>
      {!brokenArt ? (
        <img
          className="w-full max-h-56 object-contain"
          src={scenario.illustration}
          alt=""
          onError={() => setBrokenArt(true)}
        />
      ) : (
        <div
          className="h-40 grid place-items-center"
          style={{ background: "var(--bg-route-muted)" }}
        >
          Слот иллюстрации {scenario.id}
        </div>
      )}
      <p className="t-body-l">{scenario.situation}</p>
      <div className="grid gap-2">
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
      <div className="sticky bottom-0 pt-3" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <PrimaryButton className="w-full" disabled={!picked} onClick={onSubmit}>
          Ответить
        </PrimaryButton>
      </div>
    </>
  );
}

function Debrief({
  answer,
  onNext,
  nextLabel,
}: {
  answer: Scenario["answers"][number];
  onNext: () => void;
  nextLabel: string;
}) {
  return (
    <>
      <ScoreCard answer={answer} />
      <CommentCard role="hacker" text={answer.hacker} />
      <CommentCard
        role="expert"
        text={answer.expert}
        how={answer.expertHow}
        howEmphasis={answer.expertHowEmphasis}
      />
      <div className="sticky bottom-0 pt-3" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <GhostButton className="w-full" iconSrc="/icons/arrow_right.svg" onClick={onNext}>
          {nextLabel}
        </GhostButton>
      </div>
    </>
  );
}
