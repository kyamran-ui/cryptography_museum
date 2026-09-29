import { jsPDF } from "jspdf";
import type { CategoryStat, ResultsView, SessionState } from "@/content/types";
import { categoryNarrative } from "@/game/categoryNarrative";
import { checklistMemo, type MemoLine } from "@/game/memo";

const PAGE_W = 794;
const PAGE_H = 1123;
const MARGIN = 56;
const SCALE = 2;
const INK = "#00001a";
const BLUE = "#1e53e6";
const WEAK = "#e25503";

type Pen = CanvasRenderingContext2D;

function wrap(ctx: Pen, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.length > 0 ? lines : [""];
}

export async function downloadChecklistPdf(
  view: ResultsView,
  session: SessionState,
): Promise<void> {
  const build = async () => {
    await document.fonts.ready;
    const pages = drawPortrait(view, session);
    const doc = new jsPDF({ unit: "px", format: [PAGE_W, PAGE_H], hotfixes: ["px_scaling"] });
    pages.forEach((canvas, index) => {
      if (index > 0) doc.addPage([PAGE_W, PAGE_H]);
      doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, PAGE_W, PAGE_H);
    });
    doc.save("pamiatka-cifrovoj-den.pdf");
  };

  try {
    await build();
  } catch {
    await build();
  }
}

function drawPortrait(view: ResultsView, session: SessionState): HTMLCanvasElement[] {
  const pages: HTMLCanvasElement[] = [];
  let canvas = newPage();
  const sheet = { ctx: contextOf(canvas) };
  let y = MARGIN;
  const maxWidth = PAGE_W - MARGIN * 2;

  const ensure = (need: number) => {
    if (y + need <= PAGE_H - MARGIN) return;
    pages.push(canvas);
    canvas = newPage();
    sheet.ctx = contextOf(canvas);
    y = MARGIN;
  };

  const paragraph = (text: string, font: string, size: number, color: string, gapAfter: number) => {
    sheet.ctx.font = font;
    const lineHeight = Math.round(size * 1.4);
    for (const line of wrap(sheet.ctx, text, maxWidth)) {
      ensure(lineHeight);
      sheet.ctx.font = font;
      sheet.ctx.fillStyle = color;
      sheet.ctx.textBaseline = "top";
      sheet.ctx.fillText(line, MARGIN, y);
      y += lineHeight;
    }
    y += gapAfter;
  };

  paragraph("Ваш индекс цифровой безопасности", '400 28px "Halvar Breitschrift", "Arial Narrow", sans-serif', 28, INK, 8);
  paragraph(`${view.index} из ${view.indexMax}`, '700 44px "Halvar Breitschrift", "Arial Narrow", sans-serif', 44, INK, 20);
  paragraph("Ваш профиль", '400 12px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 12, "#8d9096", 6);
  if (view.profileTitle) {
    paragraph(view.profileTitle, '600 24px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 24, INK, 10);
  }
  if (view.profileBody) {
    paragraph(view.profileBody, '400 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 16, INK, 24);
  }

  const section = (title: string, items: CategoryStat[], markWeak: boolean) => {
    paragraph(title, '600 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 16, INK, 12);
    for (const item of items) {
      const weak = markWeak && item.percent < 50;
      paragraph(`[ ${item.label} ]`, '400 12px "Halvar Breitschrift", "Arial Narrow", sans-serif', 12, weak ? WEAK : BLUE, 4);
      const text = categoryNarrative(item.id, session.answers);
      if (text) {
        paragraph(text, '400 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 16, INK, 16);
      }
    }
    y += 8;
  };

  section("Сильные стороны", view.strengths, false);
  section("Зоны риска", view.risks, true);

  paragraph("Статистика", '600 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 16, INK, 12);
  for (const item of view.categories) {
    const weak = item.percent < 50;
    paragraph(
      `${item.label} — ${item.earned}/${item.max}`,
      '400 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif',
      16,
      weak ? WEAK : INK,
      8,
    );
  }

  const memo = checklistMemo(session.answers);
  const memoList = (title: string, lines: MemoLine[]) => {
    if (lines.length === 0) return;
    paragraph(title, '600 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 16, INK, 12);
    for (const line of lines) {
      paragraph(line.theme, '400 12px "Halvar Breitschrift", "Arial Narrow", sans-serif', 12, BLUE, 4);
      paragraph(line.text, '400 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 16, INK, 16);
    }
    y += 8;
  };
  if (memo.good.length > 0 || memo.improve.length > 0) {
    y += 8;
    paragraph("Памятка", '600 16px Bahnschrift, "Segoe UI", "Arial Narrow", sans-serif', 16, INK, 12);
    memoList("Что вы делаете хорошо", memo.good);
    memoList("Что нужно улучшить", memo.improve);
  }

  pages.push(canvas);
  return pages;
}

function contextOf(canvas: HTMLCanvasElement): Pen {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  return ctx;
}

function newPage(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = PAGE_W * SCALE;
  canvas.height = PAGE_H * SCALE;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.scale(SCALE, SCALE);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, PAGE_W, PAGE_H);
  return canvas;
}
