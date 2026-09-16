# Маршрут цифрового дня

Клиентское SPA выставки «Ключ к доверию» (Музей криптографии): 10 тестов, разбор хакер/эксперт, индекс, админка анонимной статистики `/admin`.

Источник истины по поведению: [`SPEC.md`](./SPEC.md) **v1.20**. Бриф для агента: [`CURSOR.md`](./CURSOR.md). Этот README — только команды.

## Стек

React 19 + TypeScript + Vite + React Router v7. Стили: CSS-переменные и CSS modules (UI kit). Tailwind — только сетка (`flex` / `grid` / `gap` / `max-w`). Без Next.js и shadcn.

## Локально

```bash
cp .env.example .env
npm install
npm run dev
```

Dev-сервер: `http://127.0.0.1:4174`

Пустой `VITE_API_BASE_URL` = мок API. Админ: `/admin/login`, пароль по умолчанию `mdd-admin-stand` (если `VITE_ADMIN_PASSWORD` пустой).

## Docker

```bash
docker compose up --build
```

Образ слушает **8080**, SPA fallback на `index.html`.

## Ассеты

| Store | Бандл |
|-------|--------|
| `media/logos/` | `public/logos/` |
| `media/icons/` | `public/icons/` |
| `media/hacker-expert/` | `public/hacker-expert/` |
| `media/fonts/` Halvar woff2 | `public/fonts/` — web-файлы из type.today |
| `media/illustrations/` | `public/illustrations/s01.webp`…`s10.webp` |
| `media/designer/` | кадры pack s01–s10 (вопрос / выбор / разбор) |
| `media/chips/` | референс чипов (`ref.png`) |
| `media/debrief-refs/` | шпаргалки type scale, кнопки, ScoreCard |

Иллюстрации вопросов и шрифты Halvar положите в store, затем скопируйте в `public/`.

## Маршруты

`/`, `/play/:scenarioId`, `/results`, `/admin/login`, `/admin`, `/admin/runs/:runId`. Маршрута `/menu` нет.
