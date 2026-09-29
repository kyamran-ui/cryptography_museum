import { Link, useNavigate } from "react-router-dom";
import { loadScenariosFile } from "@/content/load";
import {
  firstUnansweredId,
  readSession,
  replaySession,
} from "@/session/storage";
import { GhostButton, PrimaryButton } from "@/ui/Buttons";
import { HomeRouteMap } from "@/ui/HomeRouteMap";
import { BracketPhrase } from "@/ui/BracketPhrase";
import styles from "./HomePage.module.css";

export function HomePage() {
  const nav = useNavigate();
  const session = readSession();
  const file = loadScenariosFile();
  const complete = session.answers.length === 10;
  const partial = session.answers.length > 0 && !complete;

  return (
    <div className={styles.page}>
      <div className={styles.copy}>
        <p
          className={`t-badge mb-20 ${styles.badge}`}
          style={{ color: "#1E53E6" }}
        >
          <BracketPhrase text={"Выставка «ключ к\u00A0доверию»"} />
        </p>
        <h1 className={`t-h1 ${styles.title}`}>
          <span className={styles.titleMobile}>
            {file.productTitle}
            <img
              src="/icons/star-icon.svg"
              alt=""
              className="inline-block w-6 h-6 ml-2 align-middle object-contain"
            />
          </span>
          <span className={styles.titleDesktop} aria-hidden="true">
            Маршрут
            <br />
            цифрового
            <br />
            дня
            <img
              src="/icons/star-icon.svg"
              alt=""
              className={`inline-block align-middle object-contain ${styles.star}`}
            />
          </span>
        </h1>
        <p className={`t-subtitle ${styles.subtitle}`}>
          Ваш обычный день&nbsp;&mdash;
          <br />
          испытание на&nbsp;цифровую безопасность.
        </p>
        <p className={`t-intro mb-20 ${styles.lead}`}>
          Пройдите 10&nbsp;бытовых ситуаций, где вы рискуете потерять свои
          данные, даже не&nbsp;заметив.
        </p>
        {!complete ? (
          <PrimaryButton
            className={`w-full ${styles.start}`}
            iconSrc="/icons/arrow_upright.svg"
            onClick={() =>
              nav(partial ? `/play/${firstUnansweredId()}` : "/play/s01")
            }
          >
            {partial ? "Продолжить маршрут" : "Начать игру"}
          </PrimaryButton>
        ) : (
          <div className={`grid gap-3 ${styles.actions}`}>
            <PrimaryButton
              className={`w-full ${styles.start}`}
              onClick={() => {
                replaySession();
                nav("/play/s01");
              }}
            >
              Пройти игру ещё раз
            </PrimaryButton>
            <GhostButton
              className="w-full"
              onClick={() => nav("/results")}
              iconSrc="/icons/arrow_right.svg"
            >
              К результатам
            </GhostButton>
          </div>
        )}

        <div
          className={`mt-6 flex flex-col gap-3 ${styles.meta}`}
          style={{
            color: "#1E53E6",
            fontFamily: '"Bahnschrift", "Segoe UI", "Arial Narrow", sans-serif',
          }}
        >
          <div className={`flex items-center gap-3 ${styles.metaItem}`}>
            <span
              className={`h-5 w-5 shrink-0 ${styles.metaIcon}`}
              style={{
                maskImage: "url(/icons/hourglass-icon.svg)",
                WebkitMaskImage: "url(/icons/hourglass-icon.svg)",
              }}
            />
            <span
              className={`min-w-0 text-sm tracking-wide ${styles.metaText}`}
            >
              Прохождение ~7 минут
            </span>
          </div>
          <div className={`flex items-center gap-3 ${styles.metaItem}`}>
            <span
              className={`h-5 w-5 shrink-0 ${styles.metaIcon}`}
              style={{
                maskImage: "url(/icons/security-icon.svg)",
                WebkitMaskImage: "url(/icons/security-icon.svg)",
              }}
            />
            <span
              className={`min-w-0 text-sm tracking-wide ${styles.metaText}`}
            >
              Твой цифровой профиль в конце игры
            </span>
          </div>
        </div>

        <Link className="sr-only" to="/play/s01">
          Старт
        </Link>
      </div>
      <div className={styles.map}>
        <HomeRouteMap />
      </div>
    </div>
  );
}
