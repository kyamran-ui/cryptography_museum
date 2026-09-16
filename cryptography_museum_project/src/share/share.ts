const MUSEUM = "https://cryptography-museum.ru/";

export function shareText(index: number, profileTitle: string | null): string {
  const who = profileTitle ?? "цифровой профиль";
  return `Мой индекс на выставке «Ключ к доверию»: ${index}/100 · ${who}. Маршрут цифрового дня: ${MUSEUM}`;
}

export async function shareIndex(index: number, profileTitle: string | null): Promise<"shared" | "copied"> {
  const text = shareText(index, profileTitle);
  if (navigator.share) {
    await navigator.share({ text, url: MUSEUM });
    return "shared";
  }
  try {
    await navigator.clipboard.writeText(text);
    return "copied";
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
    return "copied";
  }
}
