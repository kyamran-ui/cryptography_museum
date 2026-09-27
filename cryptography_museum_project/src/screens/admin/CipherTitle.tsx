import { useEffect, useState } from "react";

const GLYPHS = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ0123456789#%*+";
const DRAW_MS = 900;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scramble(text: string, revealCount: number): string {
  return [...text]
    .map((char, index) => {
      if (char === " ") return " ";
      if (index < revealCount) return char;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join("");
}

export function CipherTitle({ text, className }: { text: string; className?: string }) {
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShown(text);
      return;
    }
    setShown(scramble(text, 0));
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DRAW_MS);
      const revealCount = Math.floor(t * (text.length + 1));
      setShown(revealCount >= text.length ? text : scramble(text, revealCount));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return (
    <h1 className={className} aria-label={text}>
      {shown}
    </h1>
  );
}
