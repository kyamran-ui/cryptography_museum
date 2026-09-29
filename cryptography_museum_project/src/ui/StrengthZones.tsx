import type { CategoryStat, StoredAnswer } from "@/content/types";
import { categoryNarrative } from "@/game/categoryNarrative";
import { CATEGORY_ORDER } from "@/game/scoring";
import { BracketPhrase } from "@/ui/BracketPhrase";
import styles from "./StrengthZones.module.css";

export function StrengthZones({
  strengths,
  risks,
  answers,
  className = "",
}: {
  strengths: CategoryStat[];
  risks: CategoryStat[];
  answers: StoredAnswer[];
  className?: string;
}) {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <ZoneList
        title="Сильные стороны"
        items={strengths}
        answers={answers}
        empty="Пока нет устойчивых тем — это нормально, откройте памятку."
      />
      <ZoneList
        title="Зоны риска"
        items={risks}
        answers={answers}
        markBelow
        empty="Критических провалов по темам нет. Держите привычки."
      />
    </div>
  );
}

function ZoneList({
  title,
  items,
  answers,
  empty,
  markBelow = false,
}: {
  title: string;
  items: CategoryStat[];
  answers: StoredAnswer[];
  empty: string;
  markBelow?: boolean;
}) {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {items.length === 0 ? (
        <p className={styles.text}>{empty}</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => {
            const badge = CATEGORY_ORDER.find((category) => category.id === item.id)?.label ?? item.label;
            const text = categoryNarrative(item.id, answers);
            return (
              <li key={item.id} className={styles.item}>
                <p className={markBelow && item.percent < 50 ? styles.badgeWeak : "t-badge"}>
                  <BracketPhrase text={badge} />
                </p>
                {text ? <p className={styles.text}>{text}</p> : null}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
