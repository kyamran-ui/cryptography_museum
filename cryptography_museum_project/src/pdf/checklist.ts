import { jsPDF } from "jspdf";
import { orderedScenarios } from "@/content/load";
import type { ResultsView, SessionState } from "@/content/types";

export async function downloadChecklistPdf(
  view: ResultsView,
  session: SessionState,
): Promise<void> {
  const build = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Памятка цифрового дня", 14, 20);
    doc.setFontSize(11);
    doc.text(`Индекс: ${view.index} / 100`, 14, 32);
    if (view.profileTitle) doc.text(view.profileTitle, 14, 40);
    let y = 52;
    doc.text("Как правильно:", 14, y);
    y += 8;
    for (const scenario of orderedScenarios()) {
      const safe = scenario.answers.find((a) => a.score === 10);
      const line = `${scenario.order}. ${scenario.title}: ${safe?.expert ?? ""}`;
      const split = doc.splitTextToSize(line, 180);
      doc.text(split, 14, y);
      y += split.length * 6 + 4;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    }
    void session.runId;
    doc.save("pamiatka-cifrovoj-den.pdf");
  };

  try {
    build();
  } catch {
    build();
  }
}
