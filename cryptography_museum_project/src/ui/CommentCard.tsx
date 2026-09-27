import styles from "./CommentCard.module.css";
import { BracketPhrase } from "./BracketPhrase";

type Props = {
  index: "01" | "02" | "03";
  title: string;
  text: string;
  ruled?: boolean;
  filled?: boolean;
};

export function CommentCard({ index, title, text, ruled = false, filled = false }: Props) {
  return (
    <article className={filled ? `${styles.card} ${styles.filled}` : styles.card}>
      <p className={styles.num}>{index}</p>
      <p className={styles.kicker}>
        <BracketPhrase text={title} />
      </p>
      <p className={ruled ? styles.ruled : styles.body}>{text}</p>
    </article>
  );
}
