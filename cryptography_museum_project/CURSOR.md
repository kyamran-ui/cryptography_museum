# Маршрут цифрового дня

## Обзор
SPA выставки «Ключ к доверию» (Музей криптографии): анонимный квест 10 тестов за 5–7 минут. Регистрации и ПДн нет. Поставка Бастиону: один Docker-образ (игра + `/admin`).

Ключевые функции:
- QR → `/`, 10 чипов, ответ 0/3/5/10, разбор хакер+эксперт
- Индекс 0–100 и профиль только после 10/10; PDF и шаринг
- Админ статистики `/admin` по анонимным runId (мок или API Бастиона)

Источник истины: `SPEC.md` v1.20. Расхождения с Figma решаются там.

## Стек технологий
- Frontend: Vite SPA, React 19, TypeScript, React Router v7
- Стили: CSS variables + CSS modules; Tailwind только grid/flex/gap/max-w; **без shadcn**
- Контент: `src/content/scenarios.json` + Zod; сессия `localStorage` `mdd.session.v1`
- API: `src/api/*` (пустой `VITE_API_BASE_URL` = мок)
- Деплой: Docker `node` → `nginx:alpine` :8080
- Не наш стек: Next, Supabase, Auth посетителя, Prisma, Vercel, Telegram, ЮKassa

## Архитектура
```
SPEC.md / CURSOR.md / README.md
src/
├── app/router.tsx          # /, /play/:id, /results, /admin*
├── screens/                # Home, Play, Results, admin/*
├── ui/                     # kit + CSS modules
├── content/                # JSON, Zod, chips map
├── session/                # localStorage
├── api/                    # env, mock, runs, admin, stats
├── game/                   # scoring, profile
├── pdf/  share/  admin/
media/                      # store: fonts, icons, logos, illustrations, chips, debrief-refs
public/                     # бандл тех же ассетов
Dockerfile  nginx.conf  docker-compose.yml
```
Маршрута `/menu` нет. Неизвестный path → `/`. `/play/s99` → `/` + тост.

## Работа с данными
- Нашего Postgres / RLS / Supabase **нет** (SPEC §2.0 N/A)
- Контент — бандл JSON; run посетителя — LS; мок run — `sessionStorage` `mdd.mocks.runs`
- Админ-гейт: `sessionStorage` `mdd.admin=1` после `POST /admin/session`
- Пароль стенда только в env; не светить в UI; не считать клиентский пароль боевой защитой

## Правила кодирования
- TypeScript, импорты `@/`; UI kit не shadcn; Lucide только share/copy/check
- Тексты сцен только из JSON; иконки чипов — имена файлов как в store (не переименовывать)
- Вёрстка `/play`: кадры pack + SPEC §4.6–4.7 (чипы outline/fill, герой 188px cover)
- Нет A–D hotkeys, нет `vibrate`, нет cookie-баннера, тост не модалка
- Не коммитить `.env` с секретами

## MCP
- Context7: перед кодом по React Router / Vite / Zod / jsPDF
- Figma: только если открыт файл; иначе побеждает SPEC.md
- Секреты не писать в этот файл

## Субагенты
- Вёрстка UI (экран/kit) — пиксели и CSS modules по SPEC §4 и `media/`
- Контент/JSON — копировать объекты §2.5, не домысливать copy
- QA приёмки — US-01…US-10 и таблица §6; без Postgres-проверок
- Не поднимать database-architect / Supabase-агентов на этот репозиторий

## Команды
- `npm run dev` — Vite `127.0.0.1:4174`
- `npm run build` / `npm run lint`
- `docker compose up --build` — статика :8080
- Админ: `/admin/login` (пароль из env / fallback в коде, не дублировать здесь)
