import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CHIP_ICON_BY_SCENARIO, iconUrl } from "@/content/chips";
import type { Scenario } from "@/content/types";
import styles from "./RouteChips.module.css";

type Props = {
  scenarios: Scenario[];
  currentId: Scenario["id"];
  overflow?: boolean;
};

export function RouteChips({ scenarios, currentId, overflow = true }: Props) {
  const nav = useNavigate();
  const currentRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    currentRef.current?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [currentId]);

  return (
    <div className={styles.wrap}>
      {overflow ? <div className={styles.fadeLeft} /> : null}
      <div className={styles.scroller}>
        {scenarios.map((scenario) => {
          const current = scenario.id === currentId;
          return (
            <button
              key={scenario.id}
              ref={current ? currentRef : undefined}
              type="button"
              className={`${styles.chip} ${current ? styles.current : ""}`}
              onClick={() => nav(`/play/${scenario.id}`)}
            >
              <img
                className={styles.icon}
                src={iconUrl(CHIP_ICON_BY_SCENARIO[scenario.id])}
                alt=""
              />
              <span className="whitespace-nowrap">{scenario.chipLabel}</span>
            </button>
          );
        })}
      </div>
      {overflow ? <div className={styles.fadeRight} /> : null}
    </div>
  );
}
