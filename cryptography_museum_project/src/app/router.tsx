import { Navigate, Outlet, useLocation } from "react-router-dom";
import { hasAdminSession } from "@/admin/gate";
import { VisitorLayout } from "@/layouts/Layouts";
import { HomePage } from "@/screens/HomePage";
import { PlayPage } from "@/screens/PlayPage";
import { ResultsPage } from "@/screens/ResultsPage";
import { AdminCategoriesPage } from "@/screens/admin/AdminCategoriesPage";
import { AdminLoginPage } from "@/screens/admin/AdminLoginPage";
import { AdminMistakesPage } from "@/screens/admin/AdminMistakesPage";
import { AdminOverviewPage } from "@/screens/admin/AdminOverviewPage";
import { AdminProfilesPage } from "@/screens/admin/AdminProfilesPage";
import { AdminRunPage } from "@/screens/admin/AdminRunPage";
import { AdminRunsPage } from "@/screens/admin/AdminRunsPage";
import { AdminScenariosPage } from "@/screens/admin/AdminScenariosPage";
import { AdminShell } from "@/screens/admin/AdminShell";

function VisitorShell() {
  return (
    <VisitorLayout>
      <Outlet />
    </VisitorLayout>
  );
}

function AdminGate() {
  const location = useLocation();
  if (!hasAdminSession()) {
    const next = encodeURIComponent(location.pathname);
    return <Navigate to={`/admin/login?next=${next}`} replace />;
  }
  return (
    <AdminShell>
      <Outlet />
    </AdminShell>
  );
}

export const routes = [
  {
    element: <VisitorShell />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/play/:scenarioId", element: <PlayPage /> },
      { path: "/results", element: <ResultsPage /> },
    ],
  },
  { path: "/admin/login", element: <AdminLoginPage /> },
  {
    element: <AdminGate />,
    children: [
      { path: "/admin", element: <AdminOverviewPage /> },
      { path: "/admin/runs", element: <AdminRunsPage /> },
      { path: "/admin/runs/:runId", element: <AdminRunPage /> },
      { path: "/admin/scenarios", element: <AdminScenariosPage /> },
      { path: "/admin/categories", element: <AdminCategoriesPage /> },
      { path: "/admin/mistakes", element: <AdminMistakesPage /> },
      { path: "/admin/profiles", element: <AdminProfilesPage /> },
      { path: "/admin/export", element: <Navigate to="/admin/runs" replace /> },
      { path: "/admin/*", element: <Navigate to="/admin" replace /> },
    ],
  },
  { path: "/menu", element: <Navigate to="/" replace /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
