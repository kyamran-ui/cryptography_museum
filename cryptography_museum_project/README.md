# Маршрут цифрового дня

Клиентское SPA выставки «Ключ к доверию» (Музей криптографии): 10 тестов, разбор, индекс, админка обезличенной статистики `/admin`.

Источник истины по поведению: [`SPEC.md`](./SPEC.md) **v1.20**. Бриф для агента: [`CURSOR.md`](./CURSOR.md). Этот README — как запустить проект и где в спецификации лежат пункты поставки.

Репозиторий: https://github.com/kyamran-ui/cryptography_museum  
Команды ниже выполняются из папки `cryptography_museum_project`.

## Где что лежит

| Пункт поставки | Куда смотреть |
|---|---|
| Архитектура | [`SPEC.md`](./SPEC.md) §0 и схема перед §3 |
| Стек | этот файл, раздел «Стек»; подробно [`SPEC.md`](./SPEC.md) §0.3 |
| Локальный запуск | этот файл, раздел «Локально» |
| Запуск через Docker | этот файл, раздел «Docker»; сборка образа — [`SPEC.md`](./SPEC.md) приложение B и §3.5 |
| Развёртывание на сервере | этот файл, раздел «Развёртывание на сервере»; роль принимающей стороны — [`SPEC.md`](./SPEC.md) §0.2 |
| Требования к серверу | этот файл, раздел «Требования к серверу»; nginx — [`SPEC.md`](./SPEC.md) §3.5 |
| База данных | этот файл, раздел «База данных»; хранение на клиенте — [`SPEC.md`](./SPEC.md) §0.3 и §2 |
| Описание API | [`SPEC.md`](./SPEC.md) §3 |
| Swagger / OpenAPI | [`openapi.yaml`](./openapi.yaml) |
| Статистика | этот файл, раздел «Статистика»; экраны — [`SPEC.md`](./SPEC.md) §0.4 и §4.10–4.12 |
| Правка сценариев | этот файл, раздел «Сценарии»; модель данных — [`SPEC.md`](./SPEC.md) §2 |
| Обновление приложения | этот файл, раздел «Обновление» |

## Стек

React 19, TypeScript, Vite, React Router v7. Стили: CSS-переменные и CSS modules. Tailwind только для сетки (`flex`, `grid`, `gap`, `max-w`). Своего сервера и своей базы в репозитории нет. Боевой API и базу подключает Бастион. Подробности и запрещённые технологии: [`SPEC.md`](./SPEC.md) §0.3.

Цепочка кода: `src/screens` и `src/ui` → `src/game` → `src/content/scenarios.json` → хранение в браузере → `src/screens/admin` и `src/api`.

## Локально

```bash
cp .env.example .env
npm install
npm run dev
```

Сайт: http://127.0.0.1:4174/

Пустой `VITE_API_BASE_URL` включает мок API в браузере. Админка: http://127.0.0.1:4174/admin/login. Пароль по умолчанию `mdd-admin-stand`, если `VITE_ADMIN_PASSWORD` пустой.

## Docker

Нужен запущенный Docker Desktop. Файлы сборки: `Dockerfile`, `nginx.conf`, `docker-compose.yml`.

```bash
docker compose up --build
```

Сайт: http://127.0.0.1:8080/  
Админка: http://127.0.0.1:8080/admin/login  
Пароль демо: `mdd-admin-stand`, если `VITE_ADMIN_PASSWORD` пустой.

Адрес API и пароль задаются в `.env` рядом с `docker-compose.yml` и вшиваются при сборке. После смены `.env` нужен повторный `docker compose up --build`. Пароль демо не является боевой защитой: серверную сессию админа ставит принимающая сторона. Образ отдаёт только статику на порту 8080 и не проксирует API.

## Развёртывание на сервере

1. Установить Docker.
2. Получить эту папку `cryptography_museum_project`.
3. Рядом с `docker-compose.yml` создать `.env` по образцу `.env.example`.
4. Для стенда музея записать в `.env` боевой `VITE_API_BASE_URL` и `VITE_ADMIN_PASSWORD`. Пустой адрес API оставляет учебную статистику в браузере.
5. Выполнить `docker compose up --build`.
6. Открыть наружу порт 8080. Сайт будет на `http://<хост>:8080/`.

Образ не поднимает базу и не принимает `/api`. Боевые `POST /runs` и админские `GET` обслуживает API Бастиона по контракту [`SPEC.md`](./SPEC.md) §3. Контракт в формате OpenAPI: [`openapi.yaml`](./openapi.yaml).

## Требования к серверу

- Linux с Docker.
- Наружу достаточно порта 8080.
- Образ: сборка на `node:22-alpine`, отдача статики через `nginx:alpine`.
- Своя база, очередь и фоновые процессы не нужны.
- Место на диске — образ Node для сборки и статический `dist`. Отдельного диска под прохождения нет: их принимает API Бастиона.

## База данных

В этой поставке базы нет. Незавершённое прохождение посетителя лежит в браузере (`localStorage`, ключ `mdd.session.v1`). Учебные завершения мока лежат в `sessionStorage`. Форма записи, которую боевой сервер принимает и хранит у себя, описана как тело `POST /runs` в [`openapi.yaml`](./openapi.yaml) и в [`SPEC.md`](./SPEC.md) §3.2.1. Персональных данных в этой записи нет.

## API

Пять методов: `POST /runs`, `POST /admin/session`, `GET /runs`, `GET /runs/{id}`, `GET /stats/summary`.

- Описание, примеры JSON и коды ошибок: [`SPEC.md`](./SPEC.md) §3.
- Тот же контракт файлом OpenAPI: [`openapi.yaml`](./openapi.yaml).
- Вызовы из кода: `src/api`.

## Статистика

Админка обезличенная: в ней нет имени, почты и телефона. Вход: `/admin/login`. Демо-пароль `mdd-admin-stand`, если `VITE_ADMIN_PASSWORD` пустой.

Экраны: `/admin` сводка, `/admin/runs` список прохождений, `/admin/runs/:runId` одно прохождение, `/admin/scenarios`, `/admin/categories`, `/admin/mistakes`, `/admin/profiles`. Состав экранов: [`SPEC.md`](./SPEC.md) §0.4 и §4.10–4.12.

При пустом `VITE_API_BASE_URL` цифры учебные и видны только в этом браузере. При боевом адресе API админка читает сервер Бастиона.

## Сценарии

Тексты десяти ситуаций: `src/content/scenarios.json`. Допустимые поля проверяет `src/content/schema.ts`. Модель сценария: [`SPEC.md`](./SPEC.md) §2.

Чтобы поменять формулировку, правьте JSON и снова соберите приложение (`npm run dev` локально или `docker compose up --build` для образа). Идентификаторы `s01`–`s10`, баллы `0/3/5/10` и четыре ответа A–D менять нельзя: на них завязаны схема и контракт API.

## Обновление

Получить новую версию из Git и пересобрать образ:

```bash
docker compose up --build
```

Локально после обновления кода достаточно перезапустить `npm run dev`, если зависимости не менялись. Если менялся `package-lock.json`, сначала `npm install`. Смена `VITE_API_BASE_URL` или `VITE_ADMIN_PASSWORD` требует новой сборки образа: эти значения вшиваются при `npm run build`.

## Ассеты

| Store | Бандл |
|---|---|
| `media/logos/` | `public/logos/` |
| `media/icons/` | `public/icons/` |
| `media/hacker-expert/` | `public/hacker-expert/` |
| `media/fonts/` Halvar woff2 | `public/fonts/` |
| `media/illustrations/` | `public/illustrations/s01.webp`…`s10.webp` |
| `media/designer/` | кадры pack s01–s10 |
| `media/chips/` | референс чипов (`ref.png`) |
| `media/debrief-refs/` | шпаргалки type scale, кнопки, ScoreCard |

## Маршруты

Игра: `/`, `/play/:scenarioId`, `/results`. Админка: `/admin/login`, `/admin`, `/admin/runs`, `/admin/runs/:runId`, `/admin/scenarios`, `/admin/categories`, `/admin/mistakes`, `/admin/profiles`. Маршрута `/menu` нет.
