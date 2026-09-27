import btn from "./Button.module.css";
import styles from "./ExhibitionPromo.module.css";

const EXHIBITION_URL =
  "https://cryptography-museum.ru/events/vystavka-kljuch-doverija-bezopasnost-v-epohu-vysokih-tehnologij";

export function ExhibitionPromo({ className = "" }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className}`}>
      <p className={styles.kicker}>
        <span className={styles.dot} aria-hidden="true" />
        Рекомендуем
      </p>
      <picture className={styles.posterFrame}>
        <source media="(min-width: 1024px)" srcSet="/exhibition/key-to-trust@2x.png" />
        <img
          className={styles.poster}
          src="/exhibition/key-to-trust.png"
          alt="Постер выставки «На грани доверия. Безопасность в эпоху высоких технологий»"
        />
      </picture>
      <h2 className={styles.title}>
        Ключ к доверию. Безопасность в эпоху высоких технологий
      </h2>
      <p className={styles.body}>
        Узнайте, как технологии изменили нашу жизнь и почему цифровая безопасность сегодня
        касается каждого. Интерактивная выставка в Музее криптографии при экспертной поддержке
        компании «Бастион».
      </p>
      <a
        className={`${btn.btn} ${btn.fill} ${styles.link}`}
        href={EXHIBITION_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Перейти на сайт музея
        <svg
          className={styles.museumArrow}
          width="18"
          height="16"
          viewBox="4.9 4.9 14.2 14.2"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5.6361 18.3639L18.364 5.63596M18.364 16.9497C16.5963 12.3535 18.364 5.63596 18.364 5.63596C18.364 5.63596 11.293 7.05018 7.05032 5.63596"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="square"
          />
        </svg>
      </a>
    </section>
  );
}
