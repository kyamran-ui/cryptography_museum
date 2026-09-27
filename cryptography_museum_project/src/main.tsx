import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loadScenariosFile } from "@/content/load";
import { routes } from "@/app/router";
import { PrimaryButton } from "@/ui/Buttons";
import { ToastProvider } from "@/ui/Toast";
import "@/styles/global.css";

const router = createBrowserRouter(routes);

function Root() {
  try {
    loadScenariosFile();
  } catch {
    return (
      <div className="min-h-dvh grid place-items-center p-6 text-center">
        <div className="grid gap-4 max-w-sm">
          <p>Не удалось загрузить игру</p>
          <PrimaryButton onClick={() => window.location.reload()}>
            Обновить страницу
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
