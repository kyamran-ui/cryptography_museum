import type { ReactNode } from "react";
import { HeaderMuseumBastion } from "@/ui/HeaderMuseumBastion";
import { isStorageBlocked, readSession } from "@/session/storage";
import { Banner } from "@/ui/kit";

export function VisitorLayout({ children }: { children: ReactNode }) {
  const session = readSession();
  return (
    <div className="min-h-dvh mx-auto w-full" style={{ maxWidth: 480 }}>
      <HeaderMuseumBastion showResults={session.answers.length > 0} />
      {isStorageBlocked() ? (
        <Banner>Сессия только в этой вкладке: хранилище браузера недоступно.</Banner>
      ) : null}
      <main className="px-4 pb-[calc(24px+env(safe-area-inset-bottom))]">{children}</main>
    </div>
  );
}

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh max-w-[960px] mx-auto px-4 py-6">{children}</div>
  );
}
