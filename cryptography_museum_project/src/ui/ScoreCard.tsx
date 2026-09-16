import { SCORE_LABEL_ICON, iconUrl } from "@/content/chips";
import type { Answer, Score } from "@/content/types";
import styles from "./ScoreCard.module.css";

const LABEL: Record<Score, string> = {
  0: "опасное решение",
  3: "небезопасное решение",
  5: "небезопасное решение",
  10: "безопасное решение",
};

type Props = {
  answer: Answer;
};

export function ScoreCard({ answer }: Props) {
  const tone =
    answer.score === 0 ? styles.s0 : answer.score === 10 ? styles.s10 : styles.s3;
  return (
    <section className={styles.card}>
      <div>
        <p className={styles.kicker}>Ваш выбор</p>
        <p className="t-body-l" style={{ fontWeight: 600 }}>
          {answer.choiceSummary}
        </p>
        <p className={`${tone} flex items-center gap-2 mt-2`}>
          <img
            className={styles.icon}
            src={iconUrl(SCORE_LABEL_ICON[answer.score])}
            alt=""
          />
          {LABEL[answer.score]}
        </p>
      </div>
      <div className={tone}>
        <div className={styles.points}>+{answer.score}</div>
        <div className={styles.caption}>{answer.score === 3 ? "Балла" : "Баллов"}</div>
      </div>
    </section>
  );
}
