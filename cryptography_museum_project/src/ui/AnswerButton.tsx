import type { AnswerId } from "@/content/types";
import styles from "./AnswerButton.module.css";

type Props = {
  id: AnswerId;
  text: string;
  selected: boolean;
  onSelect: (id: AnswerId) => void;
};

export function AnswerButton({ id, text, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${selected ? styles.selected : ""}`}
      onClick={() => onSelect(id)}
    >
      {text}
      <span className="sr-only">{id}</span>
    </button>
  );
}
