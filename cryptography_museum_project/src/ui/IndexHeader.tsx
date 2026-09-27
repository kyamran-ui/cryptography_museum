import { useEffect, useState } from "react";
import styles from "./IndexHeader.module.css";

const DRAW_MS = 1100;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function IndexHeader({
  value,
  max = 100,
  profileTitle,
  profileBody,
  className = "",
}: {
  value: number;
  max?: number;
  profileTitle: string;
  profileBody: string | null;
  className?: string;
}) {
  const size = 120;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const ratio = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  const dash = circumference * ratio;
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) {
      setProgress(1);
      return;
    }
    setProgress(0);
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DRAW_MS);
      setProgress(1 - (1 - t) ** 3);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <header className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>Ваш индекс цифровой безопасности</h1>
      <div className={styles.cluster}>
      <div className={styles.row}>
        <div
          className={styles.disk}
          role="img"
          aria-label={`Индекс ${value} из ${max}`}
        >
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
            <circle
              className={styles.track}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={stroke}
            />
            {ratio > 0 ? (
              <circle
                className={styles.arc}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                strokeWidth={stroke}
                strokeDasharray={`${dash * progress} ${circumference}`}
                strokeLinecap={progress > 0 && ratio < 1 ? "round" : "butt"}
              />
            ) : null}
          </svg>
          <div className={styles.figure} aria-hidden="true">
            <span className={styles.value}>{Math.round(value * progress)}</span>
            <span className={styles.of}>из {max}</span>
          </div>
        </div>
        <div className={styles.profile}>
          <p className={styles.kicker}>Ваш профиль</p>
          <p className={styles.name}>{profileTitle}</p>
        </div>
      </div>
      {profileBody ? <p className={styles.body}>{profileBody}</p> : null}
      </div>
    </header>
  );
}
