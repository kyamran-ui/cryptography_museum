import { AdminStatus, ProfileDonut } from "./blocks";
import styles from "./AdminShell.module.css";

export function AdminProfilesPage() {
  return (
    <AdminStatus>
      {(snapshot) => (
        <>
          <p className={styles.note}>Четыре профиля игры. Имена посетителей не собираем.</p>
          <ProfileDonut snapshot={snapshot} />
          <div className={styles.tableWrap} style={{ marginTop: 16 }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Профиль</th>
                  <th>Прохождения</th>
                  <th>Доля</th>
                </tr>
              </thead>
              <tbody>
                {snapshot.profiles.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.count}</td>
                    <td>{Math.round(item.share * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </AdminStatus>
  );
}
