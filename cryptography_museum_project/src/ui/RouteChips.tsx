import { Fragment, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CHIP_ICON_BY_SCENARIO, iconUrl } from "@/content/chips";
import type { Scenario } from "@/content/types";
import styles from "./RouteChips.module.css";

type Props = {
  scenarios: Scenario[];
  currentId: Scenario["id"];
};

export function RouteChips({ scenarios, currentId }: Props) {
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
      <div className={styles.scroller}>
        {scenarios.map((scenario, index) => {
          const current = scenario.id === currentId;
          return (
            <Fragment key={scenario.id}>
              <button
                ref={current ? currentRef : undefined}
                type="button"
                className={`${styles.chip} ${current ? styles.current : ""}`}
                onClick={() => nav(`/play/${scenario.id}`)}
              >
                <span className={styles.mark}>
                  <span
                    className={styles.icon}
                    style={{
                      maskImage: `url(${iconUrl(CHIP_ICON_BY_SCENARIO[scenario.id])})`,
                      WebkitMaskImage: `url(${iconUrl(CHIP_ICON_BY_SCENARIO[scenario.id])})`,
                    }}
                  />
                </span>
                <span className={styles.label}>{scenario.chipLabel}</span>
              </button>
              {index < scenarios.length - 1 ? <span className={styles.joint} aria-hidden="true" /> : null}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
