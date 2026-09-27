import type { ReactNode } from "react";
import styles from "./HeaderMuseumBastion.module.css";

type Props = {
  rightSlot?: ReactNode;
  wide?: boolean;
};

export function HeaderMuseumBastion({ rightSlot, wide }: Props) {
  return (
    <header className={`${styles.header} ${wide ? styles.wide : ""}`}>
      {/* 🛠 ОБЕРНУЛИ ЛОГОТИП В ССЫЛКУ: теперь при клике на логотип будет открываться сайт музея */}
      <a 
        href="https://cryptomuseum.ru" 
        target="_blank" 
        rel="noreferrer" 
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
