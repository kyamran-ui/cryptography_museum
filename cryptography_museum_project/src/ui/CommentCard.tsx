import styles from "./CommentCard.module.css";

type Props = {
  role: "hacker" | "expert";
  text: string;
  how?: string;
  howEmphasis?: string;
};

export function CommentCard({ role, text, how, howEmphasis }: Props) {
  const hacker = role === "hacker";
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.num}>{hacker ? "01" : "02"}</span>
        <img
          className={styles.portrait}
          src={hacker ? "/hacker-expert/hacker.png" : "/hacker-expert/expert.png"}
          alt=""
        />
        <span className="t-caption">{hacker ? "Хакер" : "Эксперт"}</span>
        {hacker ? (
          <img className={styles.quote} src="/icons/kovichki-icon.svg" alt="" />
        ) : null}
      </div>
      <p className={styles.body}>{text}</p>
      {!hacker && how ? (
        <p className={styles.body} style={{ borderLeft: "3px solid var(--blue-primary)", paddingLeft: 12 }}>
          <strong>Как правильно: </strong>
          {howEmphasis && how.includes(howEmphasis) ? (
            <>
              {how.split(howEmphasis)[0]}
              <em>{howEmphasis}</em>
              {how.split(howEmphasis).slice(1).join(howEmphasis)}
            </>
          ) : (
            how
          )}
        </p>
      ) : null}
    </article>
  );
}
