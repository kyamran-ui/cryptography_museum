import styles from "./ChecklistSection.module.css";

export function ChecklistSection({
  onDownload,
  className = "",
}: {
  onDownload: () => void;
  className?: string;
}) {
  return (
    <section className={`${styles.wrap} ${className}`}>
      <h2 className={styles.title}>Чек-лист безопасности</h2>
      <p className={styles.text}>
        Проверьте свои настройки и защитите данные с нашим чек-листом безопасности
      </p>
      <button type="button" className={styles.download} onClick={onDownload}>
        Скачать чек-лист
        <span
          className={styles.icon}
          style={{
            maskImage: "url(/icons/arrow_downright.svg)",
            WebkitMaskImage: "url(/icons/arrow_downright.svg)",
          }}
          aria-hidden="true"
        />
      </button>
    </section>
  );
}
