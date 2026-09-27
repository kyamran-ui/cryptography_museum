import { percentLabel } from "@/admin/aggregate";
import { AdminStatus } from "./blocks";
import styles from "./AdminShell.module.css";

export function AdminScenariosPage() {
  return (
    <AdminStatus>
      {(snapshot) => (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Сценарий</th>
                <th>Правильно</th>
                <th>С ошибкой</th>
                <th>Средний балл</th>
              </tr>
            </thead>
            <tbody>
              {snapshot.scenarios.map((row) => (
                <tr key={row.id}>
                  <td>
                    {row.order}. {row.chip} · {row.title}
                  </td>
                  <td>{percentLabel(row.correctShare)}</td>
                  <td>{percentLabel(row.missShare)}</td>
                  <td>{row.averageScore}/10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminStatus>
  );
}
