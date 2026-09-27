import {
  copyShareLink,
  maxShareHref,
  sharePageUrl,
  shareText,
  telegramShareHref,
  vkShareHref,
} from "@/share/share";
import styles from "./ShareResult.module.css";

type Props = {
  index: number;
  profileTitle: string | null;
  onReplay: () => void;
  onCopied: () => void;
  onCopyFail: () => void;
};

const NETWORKS = [
  { id: "max", label: "Поделиться в MAX", icon: "/icons/max-icon.svg" },
  { id: "telegram", label: "Поделиться в Telegram", icon: "/icons/tg-icon.svg" },
  { id: "vk", label: "Поделиться во ВКонтакте", icon: "/icons/vk-icon.svg" },
] as const;

export function ShareResult({
  index,
  profileTitle,
  onReplay,
  onCopied,
  onCopyFail,
  className = "",
}: Props & { className?: string }) {
  const pageUrl = sharePageUrl();
  const text = shareText(index, profileTitle);
  const message = text.replace(`\n${pageUrl}`, "");
  const href = {
    max: maxShareHref(text),
    telegram: telegramShareHref(message, pageUrl),
    vk: vkShareHref(index, profileTitle, pageUrl),
  };

  return (
    <section className={`${styles.section} ${className}`} aria-label="Поделиться результатом">
      <p className={styles.title}>Поделитесь своим результатом</p>
      <div className={styles.row}>
        {NETWORKS.map((network) => (
          <a
            key={network.id}
            className={styles.network}
            href={href[network.id]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.label}
          >
            <img className={styles.glyph} src={network.icon} alt="" />
          </a>
        ))}
        <button
          type="button"
          className={styles.network}
          aria-label="Скопировать ссылку на страницу"
          onClick={() => {
            void copyShareLink(pageUrl).then(onCopied, onCopyFail);
          }}
        >
          <img className={styles.glyph} src="/icons/link-icon.svg" alt="" />
        </button>
      </div>
      <button type="button" className={styles.replay} onClick={onReplay}>
        Пройти игру ещё раз
        <span
          className={styles.arrow}
          style={{
            maskImage: "url(/icons/arrow_right.svg)",
            WebkitMaskImage: "url(/icons/arrow_right.svg)",
          }}
        />
      </button>
    </section>
  );
}
