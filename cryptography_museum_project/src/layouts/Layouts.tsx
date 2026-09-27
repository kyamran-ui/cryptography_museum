import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { HeaderMuseumBastion } from "@/ui/HeaderMuseumBastion";
import { isStorageBlocked, readSession } from "@/session/storage";
import { Banner } from "@/ui/kit";
import styles from "./Layouts.module.css";

export function VisitorLayout({ children }: { children: ReactNode }) {
  readSession();
  const path = useLocation().pathname;
  const desktopFrame = path === "/" || path === "/results" || path.startsWith("/play/");
  return (
    <div
      className={`${styles.shell} ${desktopFrame ? styles.shellDesktop : ""}`}
    >
      <HeaderMuseumBastion wide={desktopFrame} />
      {isStorageBlocked() ? (
        <Banner>Сессия только в этой вкладке: хранилище браузера недоступно.</Banner>
      ) : null}
      <main className={`${styles.main} ${desktopFrame ? styles.mainDesktop : ""}`}>
        {children}
      </main>
    </div>
  );
}

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh max-w-[960px] mx-auto px-4 py-6">{children}</div>
  );
}
