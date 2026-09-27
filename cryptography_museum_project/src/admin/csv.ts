import type { RunDetail } from "@/content/types";
import { CATEGORY_ORDER } from "@/game/scoring";
import { PROFILE_COPY } from "@/game/profile";
import { durationMin } from "./aggregate";

function cell(value: string | number): string {
  const text = String(value);
  if (/[;"\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

function shortDate(iso: string): string {
  const date = new Date(iso);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()}`;
}

export function runsToCsv(runs: RunDetail[]): string {
  const headers = [
    "Код прохождения",
    "Дата начала",
    "Дата окончания",
    "Время прохождения",
    "Индекс",
    "Цифровой профиль",
    ...CATEGORY_ORDER.map((category) => category.label),
    ...Array.from({ length: 10 }, (_, index) => `Сценарий ${index + 1}`),
  ];
  const rows = runs.map((run) => {
    const scores = Array.from({ length: 10 }, (_, index) => {
      const id = `s${String(index + 1).padStart(2, "0")}`;
      return run.answers.find((answer) => answer.scenarioId === id)?.score ?? "";
    });
    return [
      run.runId,
      shortDate(run.startedAt),
      shortDate(run.completedAt),
      `${Math.round(durationMin(run))} мин`,
      run.index,
      PROFILE_COPY[run.profileId].title,
      ...CATEGORY_ORDER.map(
        (category) => run.categories.find((item) => item.id === category.id)?.percent ?? 0,
      ),
      ...scores,
    ].map(cell).join(";");
  });
  return `\uFEFF${headers.join(";")}\n${rows.join("\n")}\n`;
}

export function downloadCsv(filename: string, csv: string): void {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
