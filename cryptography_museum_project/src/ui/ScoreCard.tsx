import { SCORE_LABEL_ICON, iconUrl } from "@/content/chips";
import type { Answer, Score } from "@/content/types";
import styles from "./ScoreCard.module.css";

const LABEL: Record<Score, string> = {
  0: "небезопасное решение",
  3: "небезопасное решение",
  5: "спорное решение",
  10: "безопасное решение",
};

type Props = {
  answer: Answer;
};

export function ScoreCard({ answer }: Props) {
  const tone = answer.score === 10 ? styles.s10 : styles.s3;
  return (
    <section className={styles.card}>
      <div>
        <p className={styles.kicker}>Ваш выбор</p>
        <p className={styles.choice}>{answer.choiceSummary}</p>
        <p className={styles.label}>
          <span
            className={styles.icon}
            style={{
              maskImage: `url(${iconUrl(SCORE_LABEL_ICON[answer.score])})`,
              WebkitMaskImage: `url(${iconUrl(SCORE_LABEL_ICON[answer.score])})`,
            }}
          />
          {LABEL[answer.score]}
        </p>
      </div>
      <div className={`${styles.score} ${tone}`}>
        <div className={styles.points}>+{answer.score}</div>
        <div className={styles.caption}>
          {answer.score === 3 ? "Балла" : "Баллов"}
        </div>
      </div>
    </section>
  );
}
