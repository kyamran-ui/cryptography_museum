import { useEffect, useState } from "react";
import type { CategoryStat } from "@/content/types";
import { CategoryBars } from "@/ui/kit";
import styles from "./Statistics.module.css";

const DESKTOP = "(min-width: 1024px)";

function useDesktopOpen(): boolean {
  const [wide, setWide] = useState(() => window.matchMedia(DESKTOP).matches);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP);
    const sync = () => setWide(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return wide;
}

export function Statistics({
  items,
  className = "",
}: {
  items: CategoryStat[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const wide = useDesktopOpen();

  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={styles.heading}>Статистика</h2>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={open ? `${styles.arrow} ${styles.arrowOpen}` : styles.arrow} aria-hidden="true" />
        Статистика
      </button>
      <div className={open ? `${styles.panel} ${styles.panelOpen}` : styles.panel}>
        <div className={styles.panelInner}>
          <CategoryBars items={items} variant="profile" play={wide || open} />
        </div>
      </div>
    </section>
  );
}
