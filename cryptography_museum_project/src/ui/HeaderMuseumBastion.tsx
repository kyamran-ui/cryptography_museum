import type { ReactNode } from "react";
import styles from "./HeaderMuseumBastion.module.css";

type Props = {
  rightSlot?: ReactNode;
  wide?: boolean;
};

export function HeaderMuseumBastion({ rightSlot, wide }: Props) {
  return (
    <header className={`${styles.header} ${wide ? styles.wide : ""}`}>
      <a
        href="https://cryptography-museum.ru/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex shrink-0"
      >
        <img
          className={styles.logoMuseum}
          src="/logos/main-logo_cryptography-museum.svg"
          alt="Музей криптографии"
        />
      </a>
      
      <img className={styles.logoBastion} src="/logos/logo-bastion.svg" alt="Бастион" />
      {rightSlot ? <div className={styles.right}>{rightSlot}</div> : null}
    </header>
  );
}
