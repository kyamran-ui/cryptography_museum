import { Navigate, Outlet, useLocation } from "react-router-dom";
import { hasAdminSession } from "@/admin/gate";
import { AdminLayout, VisitorLayout } from "@/layouts/Layouts";
import { HomePage } from "@/screens/HomePage";
import { PlayPage } from "@/screens/PlayPage";
import { ResultsPage } from "@/screens/ResultsPage";
import { AdminLoginPage } from "@/screens/admin/AdminLoginPage";
import { AdminRunPage } from "@/screens/admin/AdminRunPage";
import { AdminSummaryPage } from "@/screens/admin/AdminSummaryPage";

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
    <AdminLayout>
      <Outlet />
    </AdminLayout>
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
      { path: "/admin", element: <AdminSummaryPage /> },
      { path: "/admin/runs/:runId", element: <AdminRunPage /> },
    ],
  },
  { path: "/menu", element: <Navigate to="/" replace /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
