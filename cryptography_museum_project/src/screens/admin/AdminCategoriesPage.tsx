import { AdminStatus, CategoryBars } from "./blocks";

export function AdminCategoriesPage() {
  return <AdminStatus>{(snapshot) => <CategoryBars snapshot={snapshot} />}</AdminStatus>;
}
