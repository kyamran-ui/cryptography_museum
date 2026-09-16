import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderMuseumBastion.module.css";

type Props = {
  showResults?: boolean;
  rightSlot?: ReactNode;
};

export function HeaderMuseumBastion({ showResults = false, rightSlot }: Props) {
  return (
    <header className={styles.header}>
      <img
        className={styles.logoMuseum}
        src="/logos/main-logo_cryptography-museum.svg"
        alt="Музей криптографии"
      />
      <div className="flex items-center gap-3">
        {showResults ? (
          <Link className={styles.resultsLink} to="/results">
            Результаты
          </Link>
        ) : null}
        {rightSlot}
        <img className={styles.logoBastion} src="/logos/logo-bastion.svg" alt="Бастион" />
      </div>
    </header>
  );
}
