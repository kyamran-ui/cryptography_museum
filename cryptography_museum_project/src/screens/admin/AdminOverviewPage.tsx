import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/ui/Buttons";
import { AdminStatus, CategoryBars, MistakeTable, ProfileDonut } from "./blocks";
import styles from "./AdminShell.module.css";

export function AdminOverviewPage() {
  const nav = useNavigate();
  return (
    <AdminStatus>
      {(snapshot) =>
        snapshot.completed === 0 ? (
          <>
            <div className={styles.empty}>
              <p>За этот период нет завершённых прохождений.</p>
            </div>
            <PrimaryButton
              className={styles.exportBtn}
              iconSrc="/icons/arrow_upright.svg"
              onClick={() => nav("/")}
            >
              Перейти к игре
            </PrimaryButton>
          </>
        ) : (
          <>
            <p className={styles.note}>
              Прохождения анонимны. ФИО, email и телефон не храним и не показываем.
            </p>
            <div className={styles.kpis}>
              <article className={styles.card}>
                <p className={styles.kicker}>Завершили</p>
                <p className={styles.value}>{snapshot.completed}</p>
                <p className={styles.hint}>Принятые прохождения за период</p>
              </article>
              <article className={styles.card}>
                <p className={styles.kicker}>Прошли до конца</p>
                <p className={styles.value}>{snapshot.finished}</p>
                <p className={styles.hint}>Ответили на все 10 сценариев</p>
              </article>
              <article className={styles.card}>
                <p className={styles.kicker}>Средний индекс</p>
                <p className={styles.value}>{snapshot.averageIndex}</p>
                <p className={styles.hint}>из 100</p>
              </article>
              <article className={styles.card}>
                <p className={styles.kicker}>Среднее время</p>
                <p className={styles.value}>{snapshot.averageDurationMin}</p>
                <p className={styles.hint}>минут на маршрут</p>
              </article>
            </div>
            <div className={styles.split}>
              <CategoryBars snapshot={snapshot} />
              <ProfileDonut snapshot={snapshot} />
            </div>
            <div className={styles.stack}>
              <section className={styles.panel}>
                <h2 className={styles.panelTitle}>Частые ошибки</h2>
                <MistakeTable rows={snapshot.mistakes.slice(0, 5)} />
              </section>
            </div>
          </>
        )
      }
    </AdminStatus>
  );
}
