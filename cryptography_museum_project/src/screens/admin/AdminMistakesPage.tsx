import { AdminStatus, MistakeTable } from "./blocks";
import styles from "./AdminShell.module.css";

export function AdminMistakesPage() {
  return (
    <AdminStatus>
      {(snapshot) => (
        <>
          <p className={styles.note}>
            Ошибка — балл ниже 10. Правильно — 10 из 10.
          </p>
          <MistakeTable rows={snapshot.mistakes} />
        </>
      )}
    </AdminStatus>
  );
}
