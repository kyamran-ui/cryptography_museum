import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { downloadCsv, runsToCsv } from "@/admin/csv";
import { useAdminData } from "@/admin/data";
import type { RunListItem } from "@/content/types";
import { PrimaryButton } from "@/ui/Buttons";
import { AdminRunsTable } from "@/ui/kit";
import { AdminStatus } from "./blocks";
import styles from "./AdminShell.module.css";

const PAGE_SIZE = 20;

export function AdminRunsPage() {
  const nav = useNavigate();
  const { period } = useAdminData();
  const [page, setPage] = useState(1);
  return (
    <AdminStatus>
      {(snapshot) => {
        const total = snapshot.runs.length;
        const safePage = Math.min(page, Math.max(1, Math.ceil(total / PAGE_SIZE) || 1));
        const start = (safePage - 1) * PAGE_SIZE;
        const items: RunListItem[] = snapshot.runs.slice(start, start + PAGE_SIZE).map((run) => ({
          runId: run.runId,
          startedAt: run.startedAt,
          completedAt: run.completedAt,
          index: run.index,
          profileId: run.profileId,
          answeredCount: 10,
        }));
        return (
          <>
            {total === 0 ? (
              <div className={styles.empty}>
                <p>За этот период нет завершённых прохождений.</p>
              </div>
            ) : (
              <>
                <p className={styles.note}>
                  Код прохождения — анонимный номер. Имени и контактов в таблице нет.
                </p>
                <div className={`${styles.tableWrap} ${styles.runsOnly}`}>
                  <AdminRunsTable items={items} />
                </div>
                <div className={styles.phones}>
                  {items.map((item) => (
                    <button
                      key={item.runId}
                      type="button"
                      className={styles.card}
                      onClick={() => nav(`/admin/runs/${item.runId}`)}
                    >
                      <p>
                        {item.index} · {item.runId.slice(0, 8)}…
                      </p>
                      <p className={styles.hint}>{new Date(item.completedAt).toLocaleDateString("ru-RU")}</p>
                    </button>
                  ))}
                </div>
                <div className={styles.pager}>
                  <button type="button" disabled={safePage <= 1} onClick={() => setPage(safePage - 1)}>
                    Назад
                  </button>
                  <span>
                    стр. {safePage} · {total}
                  </span>
                  <button
                    type="button"
                    disabled={safePage * PAGE_SIZE >= total}
                    onClick={() => setPage(safePage + 1)}
                  >
                    Далее
                  </button>
                </div>
              </>
            )}
            <PrimaryButton
              className={styles.exportBtn}
              iconSrc="/icons/arrow_upright.svg"
              disabled={total === 0}
              onClick={() => downloadCsv(`mdd-runs-${period}.csv`, runsToCsv(snapshot.runs))}
            >
              Выгрузить статистику
            </PrimaryButton>
          </>
        );
      }}
    </AdminStatus>
  );
}
