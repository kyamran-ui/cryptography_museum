import styles from "./BracketPhrase.module.css";

export function BracketPhrase({ text }: { text: string }) {
  const words = text.trim().split(/ +/).filter(Boolean);
  if (words.length === 0) return null;
  if (words.length === 1) {
    return <span className={styles.glue}>{`[\u00A0${words[0]}\u00A0]`}</span>;
  }
  return (
    <>
      <span className={styles.glue}>{`[\u00A0${words[0]}`}</span>
      {words.length > 2 ? ` ${words.slice(1, -1).join(" ")} ` : " "}
      <span className={styles.glue}>{`${words[words.length - 1]}\u00A0]`}</span>
    </>
  );
}
