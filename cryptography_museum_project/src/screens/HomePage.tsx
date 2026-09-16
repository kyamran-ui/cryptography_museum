import { Link, useNavigate } from "react-router-dom";
import { loadScenariosFile } from "@/content/load";
import {
  firstUnansweredId,
  readSession,
  replaySession,
} from "@/session/storage";
import { GhostButton, PrimaryButton } from "@/ui/Buttons";

export function HomePage() {
  const nav = useNavigate();
  const session = readSession();
  const file = loadScenariosFile();
  const complete = session.answers.length === 10;
  const partial = session.answers.length > 0 && !complete;

  return (
    <div className="grid gap-6">
      <p className="t-badge">Выставка «ключ к доверию»</p>
      <h1 className="t-h1">{file.productTitle}</h1>
      <p className="t-subtitle">цифровой профиль в конце</p>
      <p className="t-caption">~7 мин</p>
      {!complete ? (
        <PrimaryButton
          iconSrc="/icons/arrow_upright.svg"
          onClick={() =>
            nav(partial ? `/play/${firstUnansweredId()}` : "/play/s01")
          }
        >
          {partial ? "Продолжить маршрут" : "Пройти квест"}
        </PrimaryButton>
      ) : (
        <div className="grid gap-3">
          <PrimaryButton
            onClick={() => {
              replaySession();
              nav("/play/s01");
            }}
          >
            Пройти игру ещё раз
          </PrimaryButton>
          <GhostButton onClick={() => nav("/results")} iconSrc="/icons/arrow_right.svg">
            К результатам
          </GhostButton>
        </div>
      )}
      <a href={file.museumSiteUrl} className="text-sm" style={{ color: "var(--blue-primary)" }}>
        На сайт музея
      </a>
      <Link className="sr-only" to="/play/s01">
        Старт
      </Link>
    </div>
  );
}
