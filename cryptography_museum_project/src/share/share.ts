const MUSEUM = "https://cryptography-museum.ru/";

export function sharePageUrl(): string {
  return MUSEUM;
}

export function shareText(index: number, profileTitle: string | null): string {
  const who = profileTitle ?? "цифровой профиль";
  return [
    `Мой индекс цифровой безопасности: ${index} из 100 — ${who}.`,
    "Маршрут цифрового дня, выставка «Ключ к доверию», Музей криптографии.",
    MUSEUM,
  ].join("\n");
}

export function maxShareHref(text: string): string {
  return `https://max.ru/:share?text=${encodeURIComponent(text)}`;
}

export function telegramShareHref(text: string, url: string): string {
  return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
}

export function vkShareHref(index: number, profileTitle: string | null, url: string): string {
  const who = profileTitle ?? "цифровой профиль";
  const title = `Мой индекс цифровой безопасности: ${index} из 100`;
  const comment = `${who}. Маршрут цифрового дня, выставка «Ключ к доверию», Музей криптографии.`;
  const params = new URLSearchParams({ url, title, comment });
  return `https://vk.com/share.php?${params.toString()}`;
}

export async function copyShareLink(url: string): Promise<void> {
  try {
    await Promise.race([
      navigator.clipboard.writeText(url),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error("timeout")), 700);
      }),
    ]);
    return;
  } catch {
    const area = document.createElement("textarea");
    area.value = url;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    if (!ok) throw new Error("copy");
  }
}
