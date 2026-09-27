import styles from "./HomeRouteMap.module.css";

type Node = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  filled?: boolean;
};

const NODES: Node[] = [
  { id: "s01", label: "Дом", icon: "mobile_text_2-icon.svg", x: 8, y: 7, filled: true },
  { id: "s02", label: "Такси", icon: "local_taxi-icon.svg", x: 44, y: 18, filled: true },
  { id: "s03", label: "Кафе", icon: "local_cafe-icon.svg", x: 84, y: 13 },
  { id: "s06", label: "Работа", icon: "laptop_mac-icon.svg", x: 50, y: 43 },
  { id: "s07", label: "Банк", icon: "bank-icon.svg", x: 64, y: 60, filled: true },
  { id: "s08", label: "Почта", icon: "post-icon.svg", x: 12, y: 71 },
  { id: "s04", label: "Работа", icon: "business_bag-icon.svg", x: 50, y: 84 },
  { id: "s09", label: "Дом", icon: "sofa-icon.svg", x: 90, y: 78 },
];

export function HomeRouteMap() {
  return (
    <div className={styles.map} aria-hidden="true">
      <svg className={styles.field} viewBox="0 0 232 199" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="home-route-dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.7" fill="#1E53E6" fillOpacity="0.45" />
          </pattern>
        </defs>
        <rect width="232" height="199" fill="url(#home-route-dots)" />
      </svg>
      <svg className={styles.lines} viewBox="0 0 1000 820" preserveAspectRatio="none">
        <g fill="none" stroke="#1E53E6" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
          <polyline points="80,57 220,125 440,148 680,195 840,107 950,68" />
          <polyline points="680,195 500,353" />
          <polyline points="20,360 200,330 500,352" />
          <polyline points="500,352 640,492" />
          <polyline points="120,582 210,470 640,492" />
          <polyline points="120,582 40,730" />
          <polyline points="120,582 500,689" />
          <polyline points="210,470 500,689" />
          <polyline points="640,492 640,610 500,689" />
          <polyline points="640,492 790,560 900,639" />
          <polyline points="900,639 830,760" />
        </g>
        <g fill="#1E53E6">
          <circle cx="220" cy="125" r="8" />
          <circle cx="680" cy="195" r="14" />
          <circle cx="950" cy="68" r="8" />
          <circle cx="20" cy="360" r="14" />
          <circle cx="200" cy="330" r="2" />
          <circle cx="210" cy="470" r="8" />
          <circle cx="310" cy="636" r="2" />
          <circle cx="40" cy="730" r="8" />
          <circle cx="640" cy="610" r="14" />
          <circle cx="790" cy="560" r="8" />
          <circle cx="830" cy="760" r="14" />
        </g>
      </svg>
      {NODES.map((node) => (
        <div
          key={node.id}
          className={node.filled ? `${styles.node} ${styles.filled}` : styles.node}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <span
            className={styles.icon}
            style={{
              maskImage: `url(/icons/${node.icon})`,
              WebkitMaskImage: `url(/icons/${node.icon})`,
            }}
          />
          <span className={styles.label}>{node.label}</span>
        </div>
      ))}
    </div>
  );
}
