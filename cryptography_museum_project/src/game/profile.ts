import type { ProfileId } from "@/content/types";

export const PROFILE_COPY: Record<
  ProfileId,
  { title: string; body: string }
> = {
  easy_target: {
    title: "Лёгкая добыча",
    body: "Вы часто соглашаетесь на удобный вариант. Мошеннику достаточно одного звонка, письма или «обновления». Пройдите памятку и начните с кодов из СМС и ссылок.",
  },
  trusting_passerby: {
    title: "Доверчивый прохожий",
    body: "Часть угроз вы чувствуете, но дожимаете диалог или отдаёте «чуть-чуть» данных. Держите правило: секреты и разрешения — только по официальному каналу.",
  },
  careful_analyst: {
    title: "Осторожный аналитик",
    body: "Вы уже останавливаетесь на проверке адреса, разрешений и 2FA. Зоны роста — привычки, где экономите секунду.",
  },
  digital_ninja: {
    title: "Цифровой ниндзя",
    body: "Вы закрываете типичные атаки дня. Держите планку: уникальные пароли, официальные магазины, недоверие к входящим «банкам».",
  },
};

export function profileFromIndex(index: number): ProfileId {
  if (index <= 39) return "easy_target";
  if (index <= 59) return "trusting_passerby";
  if (index <= 84) return "careful_analyst";
  return "digital_ninja";
}
