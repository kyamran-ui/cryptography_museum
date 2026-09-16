# Маршрут цифрового дня — Техническая спецификация

| Поле | Значение |
|------|----------|
| Версия | 1.20 |
| Статус | Production-ready |
| Дата | 2026-09-15 |
| Аудитория | автономные агенты Cursor (frontend-поставка музею) |
| Язык продукта | русский |
| Источник истины | этот файл. Расхождения с Figma, брифом и макетами решаются здесь. |

**Changelog:** 1.20 (2026-09-16) — s10 канон `media/designer/s10/scenario_10.zip`: чип Дом (диван), `10/10 [ УСТРОЙСТВА/ВРЕДОНОСНОЕ ПО ]`, H1 «Подарок с форума». `10_main` / `answer-10_main` / first +10 / second +3 / third +5 / fourth +0. ScoreCard C: «Вы после установки удалили APK и проверили устройство антивирусом» (не «Вы удалили файл после скачивания» с кадра — кнопка C про удаление после установки). Герой 188px cover bleed. 1.19 (2026-09-16) — s04–s09 канон packs `scenario_4.zip`…`scenario_9.zip`: `{n}_main` вопрос, `answer-{n}_main` выбор, `answer-{n}_first|second|third|fourth` разбор в порядке кнопок A–D (не порядок «лучшего» ответа). Баллы с кадров разбора: s04 0/10/5/3, s05 0/3/5/10, s06 0/3/10/5, s07 0/3/10/5, s08 0/3/5/10, s09 0/3/5/10. Чипы: s04–s06 Работа, s07 Банк, s08 Почта, s09 Дом (диван). Герой pack 188px cover bleed. s05 how-bar на second/third/fourth — вставка из s04: в продукте how из `answer-5_first`. s10 оболочка. 1.18 (2026-09-16) — s03 канон `media/designer/s03/scenario_3.zip`: чип Кафе, `3/10 [ WI-FI / СЕТЕВЫЕ АТАКИ ]`, H1 «Ловушка автоподключения». `3_main` / `answer-3_main` / first +0 / second +5 / third +10 / fourth +3. ScoreCard D: «Вы отключили автоматическое подключение и переподключились вручную» (не taxi-paste). s04–s10 оболочки. 1.17 (2026-09-16) — s02 канон `media/designer/s02/scenario_2.zip`: `2_main` вопрос «Попутчик в телефоне» / чип Такси / бейдж РАЗРЕШЕНИЯ; `answer-2_main` выбор; `answer-2_first` +0; `answer-2_second` +3; `answer-2_third` +10; `answer-2_fourth` +5. Ответы «Разрешу… / Запрещу…». s03–s10 оболочки. 1.16 (2026-09-15) — s01 канон **только** `media/designer/s01/scenario_1.zip` + `flow-overview-v2.png`. Игнорировать `answer_first_scenario.zip`. Карта: `main` вопрос; `answer_main` выбор (заливка `--blue-primary`, активный ghost «Ответить»); `answer_first` +0 (хакер: «получила / списала»); `answer_second` +3; `answer__third` +5; `answer__fourth` +10. Имена файлов zip как есть (двойное подчёркивание у 3/4). 1.15 (2026-09-15) — s01 H1 по кадру `main.png`: `Утренний «возврат»` (ёлочки, не немецкие „ “). Кавычки хакера — инлайн `kovichki-icon.svg` (`fill` current/--text-secondary); CSS-mask внешнего SVG с `currentColor` не рисовал глиф. 1.14 (2026-09-15) — s01 **copy-source = pack** `media/designer/s01/` (кадры `main.png`, choice, answer 1–4, +0 из `flow-overview`), не старый документ «Звонок из банка» и не infinitive-ответы. H1 `Утренний „возврат“`; сюжет — утренний «возврат» / коллбэк «службы безопасности» / код из СМС; ответы «Назову…»; разбор из тех же PNG. Вёрстка `/play/s01` без смены. 1.13 (2026-09-15) — Kyamran pack `media/designer/s01/`: s01 вопрос/разбор — тексты и вёрстка из кадров (`main.png`, choice, answer 1–4). Заголовок «Утренний «возврат»»; ответы «Назову…»; ScoreCard summary «Вы назвали…»; эксперт общий абзац + «Как правильно» с синей полосой; чипы — круг current fill / rest outline. Сюжет по-прежнему звонок банка / СМС. s02–s10 без этого пакета. 1.12 (2026-09-15) — Kyamran: типографика Figma type scale (реф `media/debrief-refs/type-scale-frame.png`) — таблица ролей в §4.2 (H1…badge). Кавычки разбора — **SVG** `media/icons/kovichki-icon.svg` (`currentColor`), не BBH Bogle 64 и не правило «64 иначе 28 Halvar». `--font-quote` / BBH в CSS-стеке **не для кавычек разбора**. Bahnschrift Light / SemiLight / SemiBold по-прежнему без файлов. §4.2, §4.7. 1.11 (2026-09-15) — десять героев вопроса: канон store `media/illustrations/s01-home.png` … `s10-home.png` (стилизованные синие кадры дизайнера 2026-09-15, в тон глифам чипов); в бандле по-прежнему `/illustrations/s0N.webp` (конверт из этих png). JSON `illustration` не менялся. **s06** — один файл, не слайдер. Фотореалистичные имена героев из SPEC убраны (архив, не канон). §4.6. 1.10 (2026-09-15) — Kyamran: ScoreCard — баллы **текст** Halvar Bold `+0` / `+3` / `+5` / `+10` (`--font-display`), не иконка; цифра и подпись «БАЛЛОВ» — цвет уровня (error / blue-primary / success), даже если поздний кадр Figma даёт чёрные цифры. Label-иконки слева: +0 `emergency-icon.svg`, +3 и +5 `security-icon.svg`, +10 **только** `security_green-icon.svg`; `+10-icon.svg` не использовать. Стрелки кнопок — `media/icons/arrow_*.svg` с `currentColor`. CTA разбора — синий текст+стрелка, не чёрный бар 328×52. Главная «Пройти квест» — заливка `#00001A` + `arrow_upright.svg`. Рефы `media/debrief-refs/`. §4.1, §4.3, §4.4, §4.7, §2.4. 1.9 (2026-09-15) — чип s01: `chipLabel` **Дом** (как у дизайнеров / Kyamran), не «Смартфон»; сюжет s01 по-прежнему звонок из банка / SMS; иконка s01 — `media/icons/mobile_text_2-icon.svg`. Три «Работа» — три SVG. Карта иконок §2.4 → файлы store. 1.8 (2026-09-14) — 13 platform UX (Kyamran): только Light theme; чипы — два визуала + overflow/fade; слот иллюстрации `contain`; iPhone safe-area; неизвестный path → `/`; киоск 2 мин на `/results` → `/`; тост не модалка; Tab+Enter без A–D; reduced-motion; без `vibrate`; без LS-дисклеймера; главная «Продолжить маршрут». 1.7 (2026-09-14) — §4.1 Light theme: `--text-secondary` `#ADAFB3`, `--border-primary` `#6E89D3`, `--blue-primary-50`, error/success `#E25504`/`#00B893`, primary fill+stroke.

Документ описывает **клиентское SPA**, которое команда отдаёт **Бастиону** (один Docker-образ + статика). В поставке: игра посетителя **и** админ-UI обезличенной статистики (`/admin`). Backend, Postgres и деплой сервера музея **не реализуются** в этом репозитории: админка читает через тот же API-адаптер (мок или `GET` Бастиона).

---

## 0. Overview (Блок 0)

### 0.1 Продукт

Интерактивная игра выставки «Ключ к доверию» (Музей криптографии). Посетитель за **5–7 минут** проходит **десять независимых тестов** цифровой безопасности. Каждый тест — **одна ситуация, четыре ответа, один балл** `0 | 3 | 5 | 10`. Сразу после ответа — разбор: карточка хакера и карточка эксперта. После всех десяти — индекс **0–100**, именованный профиль, сильные стороны, зоны риска, шесть категорий, PDF-памятка.

**Регистрации нет. ПДн не собираются. Полей ФИО / email / телефон / аккаунт нет ни на одном экране.**

### 0.2 Роли

| Роль | В нашем приложении |
|------|-------------------|
| Посетитель (аноним) | Играет со смартфона по QR или с планшета стенда. Регистрации нет. Не видит `/admin`. |
| Оператор стенда | Не имеет отдельного UI. Перезапускает игру кнопкой «Пройти игру ещё раз» между посетителями. |
| Админ статистики | Сотрудник музея / Бастиона. Открывает `/admin`: сводка и таблица **анонимных прохождений**. Никогда не видит ФИО, email, телефон. Строка = `runId` + timestamps + баллы + корректность ответов + % категорий. |
| Бастион (handoff frontend) | Принимает тот же Docker-образ, подставляет `VITE_API_BASE_URL` и `VITE_ADMIN_PASSWORD` на сборке, проксирует HTTP-контракт §3. Боевую сессию админа (cookie/сервер) подменяют они; в демо — мок. |

### 0.3 Зафиксированный стек (нарушать запрещено)

| Слой | Решение |
|------|---------|
| UI | **React 19** + **TypeScript** |
| Сборка | **Vite** (SPA, `index.html` + `src/`). Не App Router, не `app/`, не `next.config`. |
| Роутинг | **React Router** v7 (createBrowserRouter / BrowserRouter) |
| Стили | CSS custom properties из Figma + **CSS modules** на компоненты UI kit. **Tailwind только** на layout-сетку (`grid`/`flex`/`gap`/`max-w`). **shadcn/ui запрещён.** |
| Иконки | Ассеты Figma / музея (места, стрелки, header). **Lucide** — только если нужной иконки нет в kit (шаринг copy / check). |
| Контент | JSON в бандле: `src/content/scenarios.json` |
| Сессия посетителя | `localStorage` `mdd.session.v1`, анонимный id |
| Сессия админа (демо) | `sessionStorage` флаг `mdd.admin=1` после успешного `POST /admin/session`. Cookie в MVP мока **не** требуются. |
| Доставка | Multi-stage Docker: `node` собирает Vite → **nginx:alpine** отдаёт `dist`, SPA fallback на `index.html`. **Один** SPA: игра + `/admin`. |
| API | Адаптер `src/api/*`. Если `VITE_API_BASE_URL` пустой — мок (fixtures + `sessionStorage`). Если задан — реальный `fetch` на те же path. |
| Шрифты | Halvar webfonts из store `media/fonts/`. Bahnschrift и BBH Bogle — CSS-имена + системные фолбэки (файлов заказчик не отдал). |

**Запрещено в этой поставке:** Next.js, Supabase, Auth посетителя, платежи, Telegram, Anthropic/OpenAI, Vercel, YooKassa, Prisma, **наш** Postgres, сторонние веб-аналитики, i18n-фреймворк, нативные приложения, **shadcn/ui как UI kit**. Сравнение пароля админа на клиенте / запечённый `VITE_ADMIN_PASSWORD` **не** считается боевой защитой — Бастион обязан заменить на серверную сессию.

Стек из курса «AI-Архитектор» (Next.js 16, Tailwind v4, shadcn/ui, Supabase Auth/RLS, Vercel, Telegram, ЮKassa) **не является** стеком этого продукта. Пункты шаблона SPEC про SQL/RLS/Supabase Auth закрыты явным **N/A** в §2.0 и §5.13, а не выдуманной музейной БД.

### 0.4 Маршруты SPA

| Путь | Экран |
|------|--------|
| `/` | Главная «Маршрут цифрового дня» |
| `/play/:scenarioId` | Вопрос или разбор (состояние из сессии). Десять чипов — навигация |
| `/results` | Результаты (частичные или полные) |
| `/admin/login` | Вход админа статистики (пароль, без учётки посетителя) |
| `/admin` | Сводка + таблица анонимных прохождений |
| `/admin/runs/:runId` | Карточка одного прохождения: ответы correct/wrong + баллы, % категорий |

Маршрута `/menu` нет: в роутере не регистрировать; ручной URL `/menu` → `/`. Макет picker не ждать. Любой **неизвестный** visitor-path вне таблицы выше (`/foo`, `/bar/baz` и т.п., **не** `/play/:id` и **не** `/admin*`) — тот же редирект **`/`**, без экрана 404. Неизвестный `/play/s99` — **не** этот catch-all: редирект `/` **и** тост «Такого теста нет» (§4.6, §6).

Прямой заход на `/play/s01` без сессии создаёт сессию и открывает вопрос, если сценарий не пройден. CTA главной: пустая сессия — «Пройти квест» → `/play/s01`; частичный run — «Продолжить маршрут» → первый непройденный (§4.4); complete — replay + результаты. **Не** на несуществующий picker.

Ге́йт `/admin` и `/admin/runs/:runId`: если нет `sessionStorage['mdd.admin'] === '1'` → редирект `/admin/login?next=<path>`. После логина — на `next` или `/admin`. Посетительские экраны админ-флаг не читают и ссылок на `/admin` в шапке игры **нет**.

### 0.5 Критерии приёмки MVP

- Старт без регистрации, 10 сцен, обязательный ответ, хакер+эксперт после каждого выбора.
- Индекс и **имя профиля** только после всех 10. До этого — скрытый профиль, баллы только на экране результатов, если посетитель сам его открыл.
- Повтор «Пройти игру ещё раз» → новый `runId`, тот же `anonymousId`, пустые `answers` → `/play/s01`. Экрана `/menu` нет.
- `docker compose up` поднимает статику. Пустой `VITE_API_BASE_URL` = мок `POST /runs`, `POST /admin/session`, `GET /runs`, `GET /runs/:id`, `GET /stats/summary`.
- `/admin`: сводка (посещения/завершения, средний индекс, доля завершённых) + таблица run-ов + drill-down ответов. Без ФИО/email/телефона.
- Юрисдикция РФ, только русский, QR и стенд, мобильный 360 + широкая desktop-сетка. Админ-таблица читаема с планшета (≥768) и с телефона (карточки вместо колонок).

### 0.6 Внешние ссылки (канон)

- Figma файл `uBGQGyWe3uSTMMy52r2poX`: готовые экраны `2541:1961`, UI kit `2541:3484`, Spectral `2541:3931`, результаты `2541:4499`, статистика посетителя `2541:4667` (аккордеон `/results`, **не** `/admin`). Админ-кадров нет — §4.10–4.12.
- Сайт музея (CTA «На сайт музея»): `https://cryptography-museum.ru/` — в документе сценариев URL не было; зафиксирован официальный сайт музея.
- Документ сценариев — канон сюжетов и баллов **кроме s01–s10**: packs `scenario_1.zip`…`scenario_10.zip`.

Где макет противоречит этому файлу, побеждает этот файл: нет picker `/menu`, кликабельные чипы на `/play/:id`, подписи чипов §2.4 (s01 **Дом** + глиф телефона, как у дизайнеров — **не** подменять на «Смартфон»), шкала `0/3/5/10`, тексты разбора от ответа, шесть категорий, четыре профиля.

---

## 1. User Stories (Блок 1)

Роли в историях: **посетитель выставки**, **оператор стенда**, **админ статистики**, **инженер Бастиона (handoff)**. Не «пользователь». Десять историй = MVP. Каждая история — одна задача; критерии приёмки проверяемы на стенде.

### US-01: Старт по QR без учётки

**Как** посетитель выставки 14–45 лет со смартфоном,  
**я хочу** открыть ссылку по QR и сразу увидеть главную с CTA «пройти квест»,  
**чтобы** за 5–7 минут сыграть, не оставляя телефон и имя.

**Сценарий:**
1. QR выставки открывает `/` (не `/admin`, не `/results`).
2. Шапка: знак музея слева, Бастион справа; бейдж «Выставка “ключ к доверию”»; H1 «Маршрут цифрового дня»; мета «~7 мин» и «цифровой профиль в конце». **H1 и маркетинговый (в т.ч. синий) подзаголовок всегда те же** — не менять copy «для вернувшихся». Баннера cookie / дисклеймера localStorage на `/` **нет**.
3. Полей ФИО / email / телефон нет.
4. CTA **«Пройти квест»** при нуле ответов ведёт на `/play/s01` (чип **«Дом»**, сюжет pack — утренний «возврат» / коллбэк «службы безопасности» / код из СМС), **не** на `/menu` (маршрута нет).
5. Если в сессии уже есть ответы и десятка не закрыта — primary **«Продолжить маршрут»** (не «Пройти квест») ведёт на **первый непройденный** в порядке чипов (чтобы не открыть разбор `s01`). Если run complete — на главной кнопки replay и результатов, не этот CTA.
6. В `localStorage` ключе `mdd.session.v1` появляется сессия: `anonymousId` UUIDv4, новый `runId`, `answers: []`.

**Критерий приёмки:**
- [ ] Нет ни одного input кроме навигации; регистрация отсутствует.
- [ ] На `/` нет баннера cookie/localStorage; H1 и subtitle не зависят от сессии.
- [ ] CTA главной при пустой сессии: подпись «Пройти квест», открывает `/play/s01`, не `/menu`.
- [ ] CTA главной при частичных ответах: подпись «Продолжить маршрут», открывает первый непройденный, не разбор уже сыгранного `s01`.
- [ ] После первого захода `SessionStateSchema.safeParse` сессии успешен.
- [ ] JSON контента не распарсился → «Не удалось загрузить игру» + «Обновить страницу» (`location.reload`), без белого экрана.

### US-02: Прыжок по чипам маршрута

**Как** посетитель у стенда,  
**я хочу** на экране вопроса тапнуть любой из десяти чипов и перейти к той сцене,  
**чтобы** успеть интересующие ситуации, если очередь сзади — без отдельного picker.

**Сценарий:**
1. На `/play/:id` десять чипов в каноническом порядке §2.4 **кликабельны** (навигация). Между чипами — соединительная линия как в Figma.
2. **Два визуальных состояния** (pack `media/designer/s01/`): текущий сценарий — заливка `--blue-primary`; **все остальные** — белый круг с синей обводкой (уже отвеченные и ещё не открытые — один вид). Третьего цвета «next» и точки «completed» **нет**. Подписи — продукт §2.4 (s01 **Дом**, глиф телефона `mobile_text_2-icon.svg`; **не** «Смартфон»).
3. Полоса чипов: горизонтальный скролл, **скроллбар скрыт** (mobile/tablet), края **fade** при overflow; после смены сцены и на load — **доскролл текущего чипа** в видимую зону (центр или ближайший край), не карусель.
4. Тап по непройденному чипу → `/play/s0N` в режиме вопроса. Уход с вопроса без «Ответить» **ничего не записывает**.
5. Тап по пройденному чипу → тот же URL в режиме **только разбор** (ответ не меняется).
6. CTA разбора — синий текст+`arrow_right.svg` (§4.3 / §4.7), не чёрный бар: «Следующий вопрос» к следующему непройденному в порядке чипов либо «Смотреть результат», если десятка закрыта. В меню **никогда** не идём (маршрута `/menu` нет).
7. Чтобы закрыть игру, всё равно нужны все 10 ответов.

**Критерий приёмки:**
- [ ] Ровно 10 чипов в каноническом порядке §2.4; чип s01 подписан «Дом» (не «Смартфон»), иконка `mobile_text_2-icon.svg`; все кликабельны.
- [ ] Визуал: только current (синяя заливка) vs rest (обводка); нет отдельного «next».
- [ ] Overflow: invisible scrollbar, fade, auto-scroll к текущему.
- [ ] Пройденный сценарий не даёт выбрать другой ответ.
- [ ] `/play/s99` → редирект `/` + тост «Такого теста нет» (не `/menu`). `/foo` → `/` без этого тоста.

### US-03: Ответ и разбор хакер + эксперт

**Как** посетитель на экране вопроса,  
**я хочу** выбрать один из четырёх ответов, нажать «Ответить» и увидеть очки плюс две карточки,  
**чтобы** понять ошибку за ~20 секунд, а не после всего теста.

**Сценарий:**
1. Четыре `answer_button` A→D; «Ответить» disabled, пока нет выбора. Клавиатура: **Tab + Enter**; **нет** горячих A–D и стрелок по ответам.
2. Выбор подсвечивает кнопку fill `--blue-primary`, текст `--white`; «Ответить» становится primary.
3. Тап «Ответить»: запись в `answers` (score из JSON), **POST на этом шаге нет**.
4. Разбор: карточка баллов 0/3/5/10 + hacker `01` + expert `02` с текстами **этого** варианта.
5. +0 «опасное решение»; +3 и +5 одно «небезопасное решение»; +10 «безопасное». Отдельного «сомнительное» нет.
6. CTA разбора — **синий текст + `arrow_right.svg`** (стиль kit «СЛЕДУЮЩИЙ ВОПРОС →» / «Купить билет», не чёрный бар 328×52) **«Следующий вопрос»** → `/play/:id` следующего непройденного (§5.5). Если непройденных нет — **«Смотреть результат»** тем же стилем → `/results`. Никогда не открывать `/menu`.

**Критерий приёмки:**
- [ ] Без выбора «Ответить» остаётся disabled (ghost `--text-secondary`, не opacity 50%).
- [ ] Двойной тап «Ответить» не перезаписывает балл.
- [ ] Нет горячих A–D и стрелок; Tab + Enter; тап без `:focus-visible`.
- [ ] На разборе всегда обе карточки; иллюстрация скрыта.
- [ ] ScoreCard: `+0`/`+3`/`+5`/`+10` текстом Halvar Bold; «БАЛЛОВ» того же цвета уровня; label-иконки §4.7; **нет** `+10-icon.svg`.
- [ ] CTA разбора не «Далее» и не primary fill; синий текст+стрелка §4.3 / §4.7.

### US-04: Частичные результаты без имени профиля

**Как** посетитель после 3–4 тестов,  
**я хочу** открыть результаты и увидеть сумму уже сыгранного,  
**чтобы** понять прогресс, не получая «звание», пока день не закончен.

**Сценарий:**
1. Ссылка «Результаты» в шапке видна, если `answers.length > 0`.
2. `/results`: кольцо = текущая сумма (например 18 при трёх ответах).
3. Блок профиля, сильные/риски, PDF и шаринг **скрыты**.
4. Шесть полосок: `earned` только по отвеченным сценам категории, `max` полный.
5. CTA «Продолжить маршрут» → `/play/:id` первого непройденного в порядке чипов (не «Вернуться к меню»).

**Критерий приёмки:**
- [ ] `profileId` на UI отсутствует до `answers.length === 10`.
- [ ] 0 ответов: empty «Сначала пройдите хотя бы один тест» + CTA «На главную» → `/` (текст empty согласован с §4.8).
- [ ] Имя профиля, PDF и шаринг индекса не показываются.

### US-05: Полная десятка, памятка и шаринг

**Как** посетитель после 10/10,  
**я хочу** увидеть индекс, один из четырёх профилей, сильные стороны, риски, чек-лист и поделиться текстом,  
**чтобы** унести практический вывод с выставки.

**Сценарий:**
1. После 10-го ответа: `completedAt=now()`, расчёт профиля, один `POST /runs` если `!synced`.
2. `/results`: кольцо 0–100, профиль, **две** сильные и **две** зоны риска (§5.4, без порога 80/50), аккордеон «Статистика» из **шести** категорий.
3. «Скачайте чек-лист безопасности» → клиентский PDF `pamiatka-cifrovoj-den.pdf`.
4. Шаринг: Web Share API или копирование канонического текста §4.8.
5. «Пройти игру ещё раз» → новый `runId`, пустые `answers`, тот же `anonymousId` → `/play/s01`.

**Критерий приёмки:**
- [ ] Профиль только из таблицы §2.4; строка Figma «Осознанный пользователь» не используется.
- [ ] PDF без ФИО; генерация: try/catch, **одна** повторная попытка, blob-download; повторный сбой → короткий тост «Не удалось сформировать файл, попробуйте ещё раз», сессия и экран `/results` живы (не полноэкранная ошибка). Тост — не модалка (§4.3, §5.9).
- [ ] Сбой `POST /runs` → `synced=false`, retry при следующем `/results` или событии `online`.

### US-06: Replay для следующего посетителя стенда

**Как** оператор стенда на планшете музея,  
**я хочу** одной кнопкой «Пройти игру ещё раз» очистить ответы,  
**чтобы** следующий посетитель не видел чужой индекс 85 и профиль «Цифровой ниндзя».

**Сценарий:**
1. Кнопка на `/results` и, если `isComplete`, primary на `/` (§6 №27).
2. Сброс: `answers`, `completedAt`, `synced`; новый `runId`; `startedAt=now()`.
3. `anonymousId` устройства **сохраняется**.
4. Навигация с кнопки → `/play/s01`, не `/menu`.
5. **Киоск:** только на `/results`, **2 минуты** без pointer/key (тап, скролл, клавиша) → тот же reset, затем навигация **`/`** (не `/play/s01`). Любое взаимодействие на результатах **перезапускает** таймер. На `/play` idle-reset **нет**.

**Критерий приёмки:**
- [ ] После replay с кнопки `/play/s01` — вопрос, все чипы непройденные.
- [ ] Idle 2 мин на `/results` → новый `runId`, тот же `anonymousId`, пустые answers, экран `/`.
- [ ] Idle на `/play` игру не сбрасывает.
- [ ] Старый индекс и профиль на экране не остаются.
- [ ] `QuotaExceededError` → in-memory + баннер «Прогресс может не сохраниться при обновлении. Обновите вкладку или сообщите оператору».

### US-07: Handoff мока на API Бастиона

**Как** инженер Бастиона на handoff frontend,  
**я хочу** собрать образ с `VITE_API_BASE_URL=https://api.museum.example/v1` без правок экранов игры и админки,  
**чтобы** `POST /runs` писал в их хранилище, а `/admin` читал `GET /runs`, `GET /runs/:id`, `GET /stats/summary`.

**Сценарий:**
1. Пустой `VITE_API_BASE_URL` (после trim) → `src/api/mock.ts`.
2. Непустой → `fetch(`${apiBaseUrl}${path}`)` с теми же path §3.2.
3. Экраны не знают, мок это или сеть.
4. Клиент посетителя вызывает только `postRun` / `retryUnsyncedRun`.

**Критерий приёмки:**
- [ ] Смена base URL не меняет маршруты и тексты UI.
- [ ] 4xx/5xx с `{ "error": { "code", "message" } }`: DEV console, посетителю не сырой JSON, `synced=false`.
- [ ] Админ: баннер «Не удалось загрузить статистику» + «Повторить». CORS в моке **N/A**.

### US-08: Вход админа паролем стенда

**Как** сотрудник музея с паролем стенда,  
**я хочу** открыть `/admin/login`, ввести пароль и попасть в сводку,  
**чтобы** смотреть обезличенные прохождения, не создавая аккаунты и не видя ПДн.

**Сценарий:**
1. `/admin` без `sessionStorage['mdd.admin']==='1'` → `/admin/login?next=/admin`.
2. Поле «Пароль» `type=password`, autocomplete=current-password; пустое → «Войти» disabled.
3. `POST /admin/session` `{ "password": "…" }`.
4. Мок 200 `{ "ok": true }`, если пароль = `VITE_ADMIN_PASSWORD` или, если env пустой, `mdd-admin-stand`.
5. Клиент: `sessionStorage.setItem("mdd.admin","1")`, переход на `next` (path с префиксом `/admin`) или `/admin`. Cookie мок **не** ставит.
6. «Выйти» снимает ключ и ведёт на `/admin/login`.

**Критерий приёмки:**
- [ ] Неверный пароль: 401 `INVALID_CREDENTIALS`, инлайн «Неверный пароль», флаг не ставится, поле не чистится.
- [ ] Дефолтный пароль на экране не показывается.
- [ ] Это демо-гейт: прод — серверная сессия Бастиона (httpOnly cookie); бандл-пароль не считать защитой.

### US-09: Сводка и таблица run-ов

**Как** админ статистики,  
**я хочу** на `/admin` видеть число завершённых прохождений, средний индекс, долю завершений и таблицу run-ов,  
**чтобы** понять, как отработал стенд, не открывая ФИО.

**Сценарий:**
1. Параллельно `GET /stats/summary` и `GET /runs?page=1&per_page=20`.
2. Карточки: `startedCount`, `completedCount`, `attendance` (= завершения), `averageIndex`, `completionRate`.
3. Таблица: сокращённый `runId` + copy UUID, `completedAt` `ru-RU` из ISO UTC, индекс, title профиля.
4. Клик по строке → `/admin/runs/:runId`.

**Критерий приёмки:**
- [ ] Нет колонок ФИО, email, телефон, `anonymousId`.
- [ ] 401 → `clearAdminSession()`, `/admin/login`.
- [ ] `total===0`: empty «Пока нет завершённых прохождений…» + CTA «Открыть игру» → `/`.
- [ ] Сеть: баннер + «Повторить».

### US-10: Drill-down одного прохождения

**Как** админ статистики,  
**я хочу** открыть run и увидеть по каждому сценарию правильность и баллы плюс % категорий,  
**чтобы** понять, где ошибаются, не зная кто это был.

**Сценарий:**
1. `GET /runs/:runId`.
2. Десять строк: chipLabel + title из бандла, `answerId`, `score`/10, бейдж «верно» если `correct===true` (`score===10`), иначе «ошибка».
3. Шесть полосок категорий с API.
4. Назад «← К сводке» → `/admin`.

**Критерий приёмки:**
- [ ] UI не рендерит `anonymousId`, даже если поле ошибочно пришло.
- [ ] 404 или не-UUID в URL: «Прохождение не найдено» + «К сводке», без вызова API для не-UUID.

---

## 2. Data Model (Блок 2)

Хранилище клиента: **JSON в бандле + localStorage (игра) + sessionStorage (мок API и флаг админа)**. Postgres в нашем коде нет. Админ не читает `mdd.session.v1` как «базу посетителей» — только HTTP-адаптер (`GET /runs`…).

### 2.0 Пункты шаблона курса: SQL, RLS, Supabase Auth — намеренно N/A

Шаблон SPEC (блоки Data Model / Security) требует копируемый SQL для Supabase SQL Editor, `auth.users`, RLS на каждую таблицу, триггеры `updated_at`. **В этой поставке эти пункты намеренно N/A.** Выдумывать музейный Postgres / RLS «для галочки» запрещено: backend и БД принадлежат Бастиону, наш репозиторий их не поднимает.

| Пункт шаблона | Статус | Чем закрыт в продукте (не опущено) |
|---------------|--------|-------------------------------------|
| Полный SQL `CREATE TABLE` (UUID, `created_at`, `updated_at`) | **N/A** | TypeScript-типы §2.2 + Zod §2.3 + JSON `scenarios.json` §2.5 + `SessionState` в localStorage §2.6 |
| Foreign keys `ON DELETE CASCADE / SET NULL` | **N/A** | Связи только в клиентской модели §2.0.1; серверные FK — зона Бастиона (ориентир в Приложении A, не наша схема) |
| Индексы поиска | **N/A** (наш код) | Клиент: 10 сцен в бандле, lookup по `id`. Бастион: индекс по `completed_at` / `profile_id` — их решение |
| `ENABLE ROW LEVEL SECURITY` + POLICY на каждую таблицу | **N/A** | Нет нашего Postgres. Доступ: посетитель только `POST /runs`; админ — `POST /admin/session` + GET §3.2; мок проверяет `mdd.admin==='1'` |
| Триггеры `updated_at` | **N/A** | Сессия перезаписывается целиком; `answeredAt` / `completedAt` пишет клиент |
| `user_id REFERENCES auth.users` | **N/A** | Auth посетителя нет. Идентификаторы: `anonymousId` + `runId` (UUIDv4), не учётка |
| Supabase Auth (email/password, OAuth) | **N/A** | §5.1 и §5.12: анонимный LS + демо-гейт админа |
| Supabase Storage | **N/A** | Иллюстрации в `public/illustrations/` бандла |
| Наш Prisma / миграции | **N/A** | Запрещены §0.3 |

Замена «схемы БД» для агентов: **Zod + JSON + контракт Бастиона**. Парсеры: `ScenariosFileSchema`, `SessionStateSchema`, HTTP-схемы §3.3. Невалидные данные не молча «починяются» кроме явных правил §2.6 и §6 (пересчёт score из бандла).

#### 2.0.1 Связи (вместо ERD SQL)

```
ScenariosFile (1 JSON, immutable)
  1 ── 10 Scenario
         1 ── 4 Answer (A,B,C,D; баллы {0,3,5,10} по одному разу)

SessionState (localStorage mdd.session.v1)
  1 ── 0..10 StoredAnswer  (unique scenarioId)
  N SessionState на одном устройстве во времени: 1 текущий runId

PostRunRequest (когда answers.length===10)
  1 ── 1 run у Бастиона / мока  (PK runId)
  1 ── 10 PostRunAnswer
  1 ── 6  category rollup

AdminSessionFlag (sessionStorage mdd.admin="1")
  ── гейт ── GET /runs, GET /runs/:id, GET /stats/summary

Mock store (sessionStorage mdd.mocks.runs)
  0..50 Run  (FIFO)
```

Нет junction-таблиц, нет `N──M` через SQL. Категория сцены — массив `categoryIds` в JSON.

---

### 2.1 Идентификаторы

| Сущность | Формат | Пример |
|----------|--------|--------|
| scenarioId | `s` + две цифры | `s01` … `s10` |
| answerId | `A` \| `B` \| `C` \| `D` | `D` |
| placeId | kebab | `smartphone` |
| categoryId | kebab | `phishing` |
| anonymousId, runId | UUID v4 | `3d1c0a7e-6b21-4f0c-9a11-2c8f0e4d7b91` |
| score | `0 \| 3 \| 5 \| 10` | `10` |
| profileId | enum | `easy_target` |

### 2.2 TypeScript-типы

```ts
export type Score = 0 | 3 | 5 | 10;

export type AnswerId = "A" | "B" | "C" | "D";

export type PlaceId =
  | "smartphone"
  | "taxi"
  | "cafe"
  | "work"
  | "bank"
  | "mail"
  | "home";

export type CategoryId =
  | "phishing"
  | "privacy"
  | "wifi"
  | "accounts"
  | "devices"
  | "finance";

export type ProfileId =
  | "easy_target"
  | "trusting_passerby"
  | "careful_analyst"
  | "digital_ninja";

export type ChipLabel =
  | "Такси"
  | "Кафе"
  | "Работа"
  | "Банк"
  | "Почта"
  | "Дом";

export interface Answer {
  id: AnswerId;
  text: string;
  score: Score;
  hacker: string;
  expert: string;
}

export interface Scenario {
  id: `s0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | "s10";
  order: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  placeId: PlaceId;
  chipLabel: ChipLabel;
  categoryIds: CategoryId[];
  overlayTag?: "social_engineering";
  theme: string;
  badge: string;
  title: string;
  situation: string;
  illustration: string;
  answers: [Answer, Answer, Answer, Answer];
}

export interface ScenariosFile {
  version: 1;
  exhibition: "Ключ к доверию";
  productTitle: "Маршрут цифрового дня";
  museumSiteUrl: "https://cryptography-museum.ru/";
  scenarios: Scenario[];
}

export interface StoredAnswer {
  scenarioId: Scenario["id"];
  answerId: AnswerId;
  score: Score;
  answeredAt: string; // ISO-8601
}

export interface SessionState {
  version: 1;
  anonymousId: string;
  runId: string;
  startedAt: string;
  completedAt: string | null;
  synced: boolean;
  answers: StoredAnswer[];
}

export interface CategoryStat {
  id: CategoryId;
  label: string;
  earned: number;
  max: number;
  percent: number; // 0–100, round half up
}

export interface ResultsView {
  answeredCount: number;
  index: number;
  indexMax: 100;
  isComplete: boolean;
  profileId: ProfileId | null;
  profileTitle: string | null;
  profileBody: string | null;
  strengths: CategoryStat[];
  risks: CategoryStat[];
  categories: CategoryStat[];
}

export interface AdminSessionFlag {
  /** sessionStorage key `mdd.admin`, value must be exactly `"1"` */
  storageValue: "1";
}

export interface RunListItem {
  runId: string;
  startedAt: string;
  completedAt: string;
  index: number;
  profileId: ProfileId;
  answeredCount: 10;
}

export interface RunAnswerDetail {
  scenarioId: Scenario["id"];
  answerId: AnswerId;
  score: Score;
  /** true только если score === 10 (единственный «безопасный» ответ сцены) */
  correct: boolean;
  maxScore: 10;
}

export interface RunDetail {
  runId: string;
  startedAt: string;
  completedAt: string;
  index: number;
  profileId: ProfileId;
  answers: RunAnswerDetail[];
  categories: CategoryStat[];
}

export interface PageMeta {
  total: number;
  page: number;
  per_page: number;
}

export interface Paginated<T> {
  data: T[];
  meta: PageMeta;
}

export interface StatsSummary {
  /** Пока Бастион не шлёт старты — равно completedCount. */
  startedCount: number;
  /** Число принятых завершённых POST /runs. Посещаемость стенда = это поле. */
  completedCount: number;
  attendance: number;
  averageIndex: number;
  /** 0–100. completedCount / startedCount * 100, round half up. Если startedCount=0 → 0. */
  completionRate: number;
  profileCounts: Record<ProfileId, number>;
}
```

### 2.3 Zod-схемы (копировать в `src/content/schema.ts` и `src/session/schema.ts`)

```ts
import { z } from "zod";

export const ScoreSchema = z.union([
  z.literal(0),
  z.literal(3),
  z.literal(5),
  z.literal(10),
]);

export const AnswerIdSchema = z.enum(["A", "B", "C", "D"]);

export const PlaceIdSchema = z.enum([
  "smartphone",
  "taxi",
  "cafe",
  "work",
  "bank",
  "mail",
  "home",
]);

export const CategoryIdSchema = z.enum([
  "phishing",
  "privacy",
  "wifi",
  "accounts",
  "devices",
  "finance",
]);

export const AnswerSchema = z.object({
  id: AnswerIdSchema,
  text: z.string().min(8).max(240),
  score: ScoreSchema,
  hacker: z.string().min(12).max(600),
  expert: z.string().min(24).max(900),
});

export const ScenarioSchema = z.object({
  id: z.string().regex(/^s(0[1-9]|10)$/),
  order: z.number().int().min(1).max(10),
  placeId: PlaceIdSchema,
  chipLabel: z.enum([
    "Такси",
    "Кафе",
    "Работа",
    "Банк",
    "Почта",
    "Дом",
  ]),
  categoryIds: z.array(CategoryIdSchema).min(1).max(3),
  overlayTag: z.literal("social_engineering").optional(),
  theme: z.string(),
  badge: z.string().max(32),
  title: z.string().min(4).max(80),
  situation: z.string().min(40),
  illustration: z.string().regex(/^\/illustrations\/s\d{2}\.(webp|png|svg)$/),
  answers: z.tuple([AnswerSchema, AnswerSchema, AnswerSchema, AnswerSchema]),
});

export const ScenariosFileSchema = z.object({
  version: z.literal(1),
  exhibition: z.literal("Ключ к доверию"),
  productTitle: z.literal("Маршрут цифрового дня"),
  museumSiteUrl: z.string().url(),
  scenarios: z.array(ScenarioSchema).length(10),
});

export const StoredAnswerSchema = z.object({
  scenarioId: z.string().regex(/^s(0[1-9]|10)$/),
  answerId: AnswerIdSchema,
  score: ScoreSchema,
  answeredAt: z.string().datetime(),
});

export const SessionStateSchema = z.object({
  version: z.literal(1),
  anonymousId: z.string().uuid(),
  runId: z.string().uuid(),
  startedAt: z.string().datetime(),
  completedAt: z.string().datetime().nullable(),
  synced: z.boolean(),
  answers: z.array(StoredAnswerSchema).max(10),
});

export const RunListItemSchema = z.object({
  runId: z.string().uuid(),
  startedAt: z.string().datetime(),
  completedAt: z.string().datetime(),
  index: z.number().int().min(0).max(100),
  profileId: z.enum([
    "easy_target",
    "trusting_passerby",
    "careful_analyst",
    "digital_ninja",
  ]),
  answeredCount: z.literal(10),
});

export const PageMetaSchema = z.object({
  total: z.number().int().min(0),
  page: z.number().int().min(1),
  per_page: z.number().int().min(1).max(100),
});

export const RunListResponseSchema = z.object({
  data: z.array(RunListItemSchema),
  meta: PageMetaSchema,
});

export const RunAnswerDetailSchema = z.object({
  scenarioId: z.string().regex(/^s(0[1-9]|10)$/),
  answerId: AnswerIdSchema,
  score: ScoreSchema,
  correct: z.boolean(),
  maxScore: z.literal(10),
});

export const RunDetailSchema = z.object({
  runId: z.string().uuid(),
  startedAt: z.string().datetime(),
  completedAt: z.string().datetime(),
  index: z.number().int().min(0).max(100),
  profileId: z.enum([
    "easy_target",
    "trusting_passerby",
    "careful_analyst",
    "digital_ninja",
  ]),
  answers: z.array(RunAnswerDetailSchema).length(10),
  categories: z.array(
    z.object({
      id: CategoryIdSchema,
      label: z.string(),
      earned: z.number().int().min(0),
      max: z.number().int().positive(),
      percent: z.number().int().min(0).max(100),
    }),
  ).length(6),
});

export const StatsSummarySchema = z.object({
  startedCount: z.number().int().min(0),
  completedCount: z.number().int().min(0),
  attendance: z.number().int().min(0),
  averageIndex: z.number().min(0).max(100),
  completionRate: z.number().int().min(0).max(100),
  profileCounts: z.object({
    easy_target: z.number().int().min(0),
    trusting_passerby: z.number().int().min(0),
    careful_analyst: z.number().int().min(0),
    digital_ninja: z.number().int().min(0),
  }),
});
```

Инвариант Zod refine (подключить в парсере): у каждого сценария множество `{A,B,C,D}` полно; множество баллов равно `{0,3,5,10}` ровно по одному разу.

### 2.4 Словарь мест, чипов, категорий

Чипы на экране вопроса **и** разбора (`/play/:id`, §4.6–4.7). Подписи продукта = таблица (Kyamran + документ дизайнеров). **s01 `chipLabel` = «Дом»**, не «Смартфон»: в Figma чип 1 — глиф телефона и подпись «Дом»; продукт совпадает. Id сценария остаётся `s01`. Сюжет s01 — pack: «Утренний «возврат»», не документ «Звонок из банка». Три чипа «Работа» (s04–s06) — **три разных** SVG, не один портфель. s09 и s10 оба «Дом» и оба `sofa-icon.svg`. `chipLabel` не уникален (три «Дом», три «Работа») — различают `id` и иконка. Если в кадре чип s08 подписан «Банк» — **не копировать** (продукт: «Почта»).

| order | id | chipLabel | SVG в store `media/icons/` |
|------:|----|-----------|------------------------------|
| 1 | s01 | Дом | `mobile_text_2-icon.svg` |
| 2 | s02 | Такси | `local_taxi-icon.svg` |
| 3 | s03 | Кафе | `local_cafe-icon.svg` |
| 4 | s04 | Работа | `business_bag-icon.svg` |
| 5 | s05 | Работа | `person_pin-icon.svg` |
| 6 | s06 | Работа | `laptop_mac-icon.svg` |
| 7 | s07 | Банк | `bank-icon.svg` |
| 8 | s08 | Почта | `post-icon.svg` |
| 9 | s09 | Дом | `sofa-icon.svg` |
| 10 | s10 | Дом | `sofa-icon.svg` |

**Не чипы — ScoreCard и кнопки** (`media/icons/`):

| Роль | Файл |
|------|------|
| label +0 («опасное») | `emergency-icon.svg` |
| label +3 и +5 («небезопасное», один файл) | `security-icon.svg` |
| label +10 («безопасное») | **только** `security_green-icon.svg` |
| глиф баллов на карточке | **нет SVG** — текст `+0` / `+3` / `+5` / `+10` (§4.7) |
| стрелка вправо (ghost/text, «Ответить» если нужна) | `arrow_right.svg` |
| стрелка вверх-вправо (главная «Пройти квест») | `arrow_upright.svg` |
| прочие стрелки kit | `arrow_left.svg`, `arrow_up.svg`, `arrow_down.svg`, `arrow_downright.svg` |

Файл `+10-icon.svg` в store **не использовать**: ни как цифры очков, ни как label +10. Стрелки: `fill`/`stroke` = `currentColor` (§4.3); не оставлять экспортный hex.

Категории полосок (не восемь баров Figma):

| categoryId | label | scenarioIds | max баллов |
|------------|-------|-------------|------------:|
| phishing | Фишинг | s01, s07, s08 | 30 |
| privacy | Приватность | s02, s09 | 20 |
| wifi | Wi-Fi / Сети | s03 | 10 |
| accounts | Пароли / Аккаунты | s04, s05 | 20 |
| devices | Устройства | s06, s10 | 20 |
| finance | Финансы | s01, s07 | 20 |

Тег `social_engineering` («Социальная инженерия») — только бейдж/данные контента у s01 и s09, **не седьмая полоска**.

Профили (показывать только если `answers.length === 10`):

| Сумма | profileId | title |
|------:|-----------|-------|
| 0–39 | easy_target | Лёгкая цель |
| 40–59 | trusting_passerby | Доверчивый прохожий |
| 60–91 | careful_analyst | Осторожный аналитик |
| 92–100 | digital_ninja | Цифровой ниндзя |

Строка Figma «Осознанный пользователь» в продукт не входит.

### 2.5 Форма JSON-файла и полный пример s01

Файл `src/content/scenarios.json`. **s01–s10** — packs `scenario_N.zip` (`{n}_main`, `answer-{n}_main`, `answer-{n}_first`…`fourth` в порядке кнопок).

#### Полный объект s01 (все 4 ответа, 0/3/5/10, хакер + эксперт)

```json
{
  "id": "s01",
  "order": 1,
  "placeId": "smartphone",
  "chipLabel": "Дом",
  "categoryIds": ["phishing", "finance"],
  "overlayTag": "social_engineering",
  "theme": "Звонки мошенников",
  "badge": "ФИШИНГ",
  "title": "Утренний «возврат»",
  "situation": "Утро, кофе, мысли о возврате за отменённый вчера заказ. Внезапно звонок: «Служба безопасности банка. По вашей карте проходит возврат на 24 900 ₽. Для возврата назовите код из СМС». Телефон тут же вибрирует. Код пришёл.",
  "illustration": "/illustrations/s01.webp",
  "answers": [
    {
      "id": "A",
      "text": "Назову код — раз СМС пришло, значит звонок настоящий",
      "choiceSummary": "Вы назвали код из СМС",
      "score": 0,
      "hacker": "Хочу сказать тебе ОГРОМНОЕ СПАСИБО! Код получила, деньги с карты списала. Куплю себе новый телефон.",
      "expert": "Фишинг — это вид интернет-мошенничества, цель которого — выманить конфиденциальные данные. Настоящий банк никогда не просит назвать код из СМС.",
      "expertHow": "Положите трубку и перезвоните в банк по официальному номеру. Никогда не называйте коды из СМС посторонним."
    },
    {
      "id": "B",
      "text": "Назову только первые 3 цифры кода",
      "choiceSummary": "Вы назвали три цифры кода из СМС",
      "score": 3,
      "hacker": "Первые три? Отлично, значит, ты уже \"клюнул\". Теперь осталось дожать тебя и выудить остальные.",
      "expert": "Фишинг — это вид интернет-мошенничества, цель которого — выманить конфиденциальные данные. Настоящий банк никогда не просит назвать код из СМС.",
      "expertHow": "Положите трубку и перезвоните в банк по официальному номеру. Никогда не называйте коды из СМС посторонним."
    },
    {
      "id": "C",
      "text": "Продолжу разговор, но код называть не буду",
      "choiceSummary": "Вы продолжили разговор, но код не называли",
      "score": 5,
      "hacker": "Оставайся на линии, сейчас я тебя дожму. У меня тут три страницы сценария!",
      "expert": "Фишинг — это вид интернет-мошенничества, цель которого — выманить конфиденциальные данные. Настоящий банк никогда не просит назвать код из СМС.",
      "expertHow": "Положите трубку и перезвоните в банк по официальному номеру. Никогда не называйте коды из СМС посторонним."
    },
    {
      "id": "D",
      "text": "Положу трубку и перезвоню в банк по официальному номеру",
      "choiceSummary": "Вы положили трубку и перезвонили в банк",
      "score": 10,
      "hacker": "Так, стоп. Ты реально положил трубку и перезвонил в банк? Пойду искать другую жертву.",
      "expert": "Фишинг — это вид интернет-мошенничества, цель которого — выманить конфиденциальные данные. Настоящий банк никогда не просит назвать код из СМС.",
      "expertHow": "Положите трубку и перезвоните в банк по официальному номеру. Никогда не называйте коды из СМС посторонним."
    }
  ]
}
```

#### Полный объект s02 (pack `scenario_2.zip`)

```json
{
  "id": "s02",
  "order": 2,
  "placeId": "taxi",
  "chipLabel": "Такси",
  "categoryIds": ["privacy"],
  "theme": "Разрешения приложений",
  "badge": "РАЗРЕШЕНИЯ",
  "title": "Попутчик в телефоне",
  "situation": "Вы вызвали такси, чтобы доехать до работы. Приложение просит обновиться. После обновления запрашивает доступ: геолокация, микрофон, фотографии, камера. Без разрешений приложение не запускается.",
  "illustration": "/illustrations/s02.webp",
  "answers": [
    {
      "id": "A",
      "text": "Разрешу всё — иначе не уеду",
      "choiceSummary": "Вы дали все разрешения",
      "score": 0,
      "hacker": "О, этот пользователь — легенда! Сам отдал доступ ко всему и сразу. Даже уговаривать не пришлось!",
      "expert": "Предоставляя доступ к фото, через неделю вы можете обнаружить утечку ваших данных. Приложению такси не нужен доступ к фото, микрофону и камере. Чем меньше разрешений, тем меньше данных может утечь.",
      "expertHow": "Разрешайте только то, что нужно приложению для работы: геолокацию — во время использования. Остальные доступы отключайте.",
      "expertHowEmphasis": "геолокацию — во время использования."
    },
    {
      "id": "B",
      "text": "Разрешу всё, потом отзову лишние",
      "choiceSummary": "Вы дали все разрешения, надеясь потом их отозвать",
      "score": 3,
      "hacker": "Отзывать потом? Наивный. Пока ты доедешь до работы, я уже сохраню все твои фото.",
      "expert": "Вы дали доступ, но не знаете, успело ли приложение скачать данные. Приложению такси не нужен доступ к фото, микрофону и камере. Чем меньше разрешений, тем меньше данных может утечь.",
      "expertHow": "Разрешайте только то, что нужно приложению для работы: геолокацию — во время использования. Остальные доступы отключайте.",
      "expertHowEmphasis": "геолокацию — во время использования."
    },
    {
      "id": "C",
      "text": "Разрешу только геолокацию во время использования",
      "choiceSummary": "Вы разрешили геолокацию во время использования",
      "score": 10,
      "hacker": "Ты проверил разрешения перед обновлением? Я уже настроил микрофон, а ты всё испортил. Ладно, довезу с ветерком.",
      "expert": "Вы все правильно сделали. Приложению такси не нужен доступ к фото, микрофону и камере. Чем меньше разрешений, тем меньше данных может утечь.",
      "expertHow": "Разрешайте только то, что нужно приложению для работы: геолокацию — во время использования. Остальные доступы отключайте.",
      "expertHowEmphasis": "геолокацию — во время использования."
    },
    {
      "id": "D",
      "text": "Запрещу всё и удалю приложение",
      "choiceSummary": "Вы запретили все и удалили приложение",
      "score": 5,
      "hacker": "Скукотища! Ну и иди пешком. Слишком сложный клиент!",
      "expert": "Но вы запретили все, а значит остались без такси, но в безопасности. Пришлось идти пешком. Приложению такси не нужен доступ к фото, микрофону и камере. Чем меньше разрешений, тем меньше данных может утечь.",
      "expertHow": "Разрешайте только то, что нужно приложению для работы: геолокацию — во время использования. Остальные доступы отключайте.",
      "expertHowEmphasis": "геолокацию — во время использования."
    }
  ]
}
```

#### Полный объект s03 (pack `scenario_3.zip`)

Kyamran: ScoreCard D **не** «Вы запретили все и удалили приложение». Канон: «Вы отключили автоматическое подключение и переподключились вручную».

```json
{
  "id": "s03",
  "order": 3,
  "placeId": "cafe",
  "chipLabel": "Кафе",
  "categoryIds": ["wifi"],
  "theme": "Публичный Wi-Fi",
  "badge": "WI-FI / СЕТЕВЫЕ АТАКИ",
  "title": "Ловушка автоподключения",
  "situation": "Перед работой вы зашли в кафе за кофе. Вспоминаете, нужно срочно скинуть файл коллеге до планёрки. Вы хватаете телефон, чтобы включить хот-спот, и вдруг замираете. В строке состояния предательски светится значок Wi-Fi. Имя сети: «Home_WiFi». Точь-в-точь как ваша домашняя. Только вот вы не вводили пароль. Телефон подключился к ней сам.",
  "illustration": "/illustrations/s03.webp",
  "answers": [
    {
      "id": "A",
      "text": "Отправлю файл через этот Wi-Fi — сеть же знакомая",
      "choiceSummary": "Вы отправили файл через подключенный Wi-Fi",
      "score": 0,
      "hacker": "О, боже, спасибо! Я уже расстроился, что сегодня ни одной \"рыбки\". А тут — подарок судьбы.",
      "expert": "Ваш трафик перехватывается. Злоумышленник получает доступ к файлу и паролям. Атака Evil Twin — создание поддельной точки Wi-Fi для доступа к вашим данным. Название сети скопировано специально.",
      "expertHow": "Отключите Wi-Fi, удалите подозрительную сеть из памяти и используйте мобильный интернет. Отключите автоподключение к незнакомым сетям в настройках.",
      "expertHowEmphasis": "удалите подозрительную сеть из памяти и используйте мобильный интернет."
    },
    {
      "id": "B",
      "text": "Отключу Wi-Fi и раздам интернет с личного телефона",
      "choiceSummary": "Вы отключили Wi-Fi и раздали интернет с личного телефона",
      "score": 5,
      "hacker": "Умный, да? Но сеть-то в памяти осталась. В следующий раз я тебя снова поймаю.",
      "expert": "Вы в безопасности, но при следующем посещении кафе телефон снова подключится автоматически. Атака Evil Twin — создание поддельной точки Wi-Fi для доступа к вашим данным. Название сети скопировано специально.",
      "expertHow": "Отключите Wi-Fi, удалите подозрительную сеть из памяти и используйте мобильный интернет. Отключите автоподключение к незнакомым сетям в настройках.",
      "expertHowEmphasis": "удалите подозрительную сеть из памяти и используйте мобильный интернет."
    },
    {
      "id": "C",
      "text": "Отключу Wi-Fi, удалю эту сеть, включу мобильный интернет",
      "choiceSummary": "Вы отключили Wi-Fi и удалили сеть",
      "score": 10,
      "hacker": "Ты удалил мою сеть из памяти? Я её специально назвала как твою домашнюю. Всё, ты меня разорил.",
      "expert": "Вы полностью оборвали соединение и удалили сеть из памяти, чтобы автоподключение не повторилось. Атака Evil Twin — создание поддельной точки Wi-Fi для доступа к вашим данным. Название сети скопировано специально.",
      "expertHow": "Отключите Wi-Fi, удалите подозрительную сеть из памяти и используйте мобильный интернет. Отключите автоподключение к незнакомым сетям в настройках.",
      "expertHowEmphasis": "удалите подозрительную сеть из памяти и используйте мобильный интернет."
    },
    {
      "id": "D",
      "text": "Отключу автоматическое подключение, но затем вручную переподключусь к этой же сети",
      "choiceSummary": "Вы отключили автоматическое подключение и переподключились вручную",
      "score": 3,
      "hacker": "Вручную переподключился? Ну ты сам ко мне пришёл. Я даже ничего не делал!",
      "expert": "Вы отдаёте трафик злоумышленнику. Риск сохраняется. Атака Evil Twin — создание поддельной точки Wi-Fi для доступа к вашим данным. Название сети скопировано специально.",
      "expertHow": "Отключите Wi-Fi, удалите подозрительную сеть из памяти и используйте мобильный интернет. Отключите автоподключение к незнакомым сетям в настройках.",
      "expertHowEmphasis": "удалите подозрительную сеть из памяти и используйте мобильный интернет."
    }
  ]
}
```

#### Полные объекты s04–s10 (packs)

s04–s10 — тексты и баллы из designer packs.

```json
{
  "id": "s04",
  "order": 4,
  "placeId": "work",
  "chipLabel": "Работа",
  "categoryIds": [
    "accounts"
  ],
  "theme": "Пароли и аккаунты",
  "badge": "ПАРОЛИ / АККАУНТЫ",
  "title": "Иллюзия надёжности",
  "situation": "Вы добрались до офиса. На работе просят зарегистрироваться в новом корпоративном сервисе. Нужно придумать пароль. У вас уже есть один универсальный пароль, который вы используете везде — он надёжный, с цифрами и спецсимволами: P@ssw0rd!2024. Ввести его?",
  "illustration": "/illustrations/s04.webp",
  "answers": [
    {
      "id": "A",
      "text": "Введу тот же пароль — он надёжный, а запоминать новый лень",
      "choiceSummary": "Вы ввели тот же пароль",
      "score": 0,
      "hacker": "Один пароль везде? Взломав один сайт, я получаю ключи от всей твоей жизни. Подарок!",
      "expert": "Через месяц этот сервис взламывают. Ваш пароль пробуют на почте, банке, соцсетях. Даже надёжный пароль, использованный на двух сайтах, — это уязвимость. Если один сайт взломают, мошенники попробуют этот пароль на других.",
      "expertHow": "Используйте менеджер паролей: он создаёт уникальные пароли для каждого сервиса. Главное — придумайте надёжный мастер-пароль: не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами.",
      "expertHowEmphasis": "не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами."
    },
    {
      "id": "B",
      "text": "Создам новый уникальный пароль и сохраню его в менеджер паролей",
      "choiceSummary": "Вы создали уникальный новый пароль",
      "score": 10,
      "hacker": "Менеджер паролей? Ты хочешь, чтобы я ушла на пенсию? Ладно, пойду искать \"123456\"",
      "expert": "Даже при взломе сервиса пострадает только этот аккаунт.",
      "expertHow": "Используйте менеджер паролей: он создаёт уникальные пароли для каждого сервиса. Главное — придумайте надёжный мастер-пароль: не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами.",
      "expertHowEmphasis": "не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами."
    },
    {
      "id": "C",
      "text": "Введу новый пароль, но запишу его в заметки на телефоне",
      "choiceSummary": "Вы создали новый пароль и записали в заметки",
      "score": 5,
      "hacker": "Пароль в заметках? Надеюсь, телефон ты не теряешь. Хотя погоди, я уже вижу твои заметки.",
      "expert": "Телефон теряется или крадётся. Все пароли в открытом доступе. Даже надёжный пароль, использованный на двух сайтах, — это уязвимость. Если один сайт взломают, мошенники попробуют этот пароль на других.",
      "expertHow": "Используйте менеджер паролей: он создаёт уникальные пароли для каждого сервиса. Главное — придумайте надёжный мастер-пароль: не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами.",
      "expertHowEmphasis": "не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами."
    },
    {
      "id": "D",
      "text": "Введу тот же пароль, но добавлю в конец название сервиса",
      "choiceSummary": "Вы ввели тот же пароль и добавили название сервиса",
      "score": 3,
      "hacker": "P@ssw0rd!2024Mail? Оригинально. Я такие паттерны взламываю за минуту.",
      "expert": "Паттерн предсказуем. Хакеры учитывают такие комбинации при переборе. Даже надёжный пароль, использованный на двух сайтах, — это уязвимость. Если один сайт взломают, мошенники попробуют этот пароль на других.",
      "expertHow": "Используйте менеджер паролей: он создаёт уникальные пароли для каждого сервиса. Главное — придумайте надёжный мастер-пароль: не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами.",
      "expertHowEmphasis": "не менее 8 символов, со строчными и заглавными буквами, цифрами и спецсимволами."
    }
  ]
}
```

```json
{
  "id": "s05",
  "order": 5,
  "placeId": "work",
  "chipLabel": "Работа",
  "categoryIds": [
    "accounts"
  ],
  "theme": "Двухфакторная аутентификация",
  "badge": "ПАРОЛИ / АККАУНТЫ",
  "title": "Ловушка доверия",
  "situation": "Рабочий день в разгаре. Вам приходит SMS: «Код подтверждения входа: 483920». Вы не пытались войти в аккаунт. Через минуту пишет коллега: «Привет! Я случайно ввёл твой номер при входе в систему. Скинь код, а то меня заблокирует».",
  "illustration": "/illustrations/s05.webp",
  "answers": [
    {
      "id": "A",
      "text": "Отправлю код — коллега же свой",
      "choiceSummary": "Вы отправили код",
      "score": 0,
      "hacker": "Спасибо за код! Теперь я войду в твой аккаунт и поменяю пароль. Дальше сама разберусь.",
      "expert": "Мошенник входит в ваш аккаунт, меняет пароль и получает доступ к рабочим данным. Код подтверждения — это вторая ступень защиты аккаунта. Его никогда нельзя передавать другим, даже коллегам. Если кто-то просит код — это признак взлома.",
      "expertHow": "Не передавайте код никому. Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома.",
      "expertHowEmphasis": "Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома."
    },
    {
      "id": "B",
      "text": "Спрошу в ответ, зачем он вводил мой номер",
      "choiceSummary": "Вы спросили коллегу, зачем ему ваш аккаунт",
      "score": 3,
      "hacker": "Вопросы задаёшь? Сейчас придумаю историю…",
      "expert": "Мошенник продолжает давить: «Это срочно! Меня заблокируют!» Вы колеблетесь. Код подтверждения — это вторая ступень защиты аккаунта. Его никогда нельзя передавать другим, даже коллегам. Если кто-то просит код — это признак взлома.",
      "expertHow": "Не передавайте код никому. Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома.",
      "expertHowEmphasis": "Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома."
    },
    {
      "id": "C",
      "text": "Не буду отправлять код, но предложу помочь лично",
      "choiceSummary": "Вы не сказали код, предложили помочь лично",
      "score": 5,
      "hacker": "Лично? Ну ладно. Но я всё равно попробую ещё раз. Может, в следующий раз повезёт…",
      "expert": "Вы не отдали код, но вступили в диалог. Мошенник продолжает давить и может убедить вас. Код подтверждения — это вторая ступень защиты аккаунта. Его никогда нельзя передавать другим, даже коллегам. Если кто-то просит код — это признак взлома.",
      "expertHow": "Не передавайте код никому. Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома.",
      "expertHowEmphasis": "Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома."
    },
    {
      "id": "D",
      "text": "Не буду отправлять код и сменю пароль от аккаунта",
      "choiceSummary": "Вы не отправили код и сменили пароль от аккаунта",
      "score": 10,
      "hacker": "Ты ещё и пароль сменил?! Всё, мой план провалился. Иду искать другую жертву!",
      "expert": "Код подтверждения — это вторая ступень защиты аккаунта. Его никогда нельзя передавать другим, даже коллегам. Если кто-то просит код — это признак взлома.",
      "expertHow": "Не передавайте код никому. Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома.",
      "expertHowEmphasis": "Смените пароль от аккаунта и сообщите в IT-отдел о попытке взлома."
    }
  ]
}
```

```json
{
  "id": "s06",
  "order": 6,
  "placeId": "work",
  "chipLabel": "Работа",
  "categoryIds": [
    "devices"
  ],
  "theme": "Обновления системы",
  "badge": "УСТРОЙСТВА/ОБНОВЛЕНИЯ",
  "title": "Ловушка «позже»",
  "situation": "Вы работаете за компьютером. Всплывает уведомление: «Доступно обновление системы. Установить позже?» Что вы будете делать?",
  "illustration": "/illustrations/s06.webp",
  "answers": [
    {
      "id": "A",
      "text": "Проигнорирую — обновления подождут",
      "choiceSummary": "Вы не стали устанавливать обновления",
      "score": 0,
      "hacker": "Не обновляешься? Отлично! Я уже нашла уязвимость в твоей старой версии.",
      "expert": "В старой версии может быть уязвимость. Злоумышленник получит доступ к вашим файлам, паролям и перепискам. Обновления закрывают уязвимости, через которые злоумышленники проникают в систему. Откладывать их — значит оставлять дверь открытой.",
      "expertHow": "Настройте автоматическое обновление системы. Так уязвимости будут закрываться вовремя, без вашего участия.",
      "expertHowEmphasis": "автоматическое обновление системы."
    },
    {
      "id": "B",
      "text": "Установлю обновление, когда будет время",
      "choiceSummary": "Вы решили отложить установку обновлений",
      "score": 3,
      "hacker": "Позже? Ну-ну. Пока ты ждёшь, я уже внутри твоей системы.",
      "expert": "Пока вы откладываете, уязвимость в старой системе открыта. Мошенник успевает проникнуть в систему и украсть данные. Обновления закрывают уязвимости, через которые злоумышленники проникают в систему. Откладывать их — значит оставлять дверь открытой.",
      "expertHow": "Настройте автоматическое обновление системы. Так уязвимости будут закрываться вовремя, без вашего участия.",
      "expertHowEmphasis": "автоматическое обновление системы."
    },
    {
      "id": "C",
      "text": "Настрою автоматическое обновление",
      "choiceSummary": "Вы настроили автообновление",
      "score": 10,
      "hacker": "Автообновление? Всё, мои лазейки закрыты. Иду искать другую жертву!",
      "expert": "Обновления устанавливаются автоматически. Уязвимости закрываются вовремя, система под защитой.",
      "expertHow": "Настройте автоматическое обновление системы. Так уязвимости будут закрываться вовремя, без вашего участия.",
      "expertHowEmphasis": "автоматическое обновление системы."
    },
    {
      "id": "D",
      "text": "Спрошу у IT-отдела, обязательно ли обновляться",
      "choiceSummary": "Вы решили обратиться в IT отдел",
      "score": 5,
      "hacker": "Пока ты ждёшь ответ от IT, я уже нашёл уязвимость и пробрался в систему.",
      "expert": "Вы ждёте ответ, но время уходит. Мошенник уже внутри и может нанести ущерб. Обновления закрывают уязвимости, через которые злоумышленники проникают в систему. Откладывать их — значит оставлять дверь открытой.",
      "expertHow": "Настройте автоматическое обновление системы. Так уязвимости будут закрываться вовремя, без вашего участия.",
      "expertHowEmphasis": "автоматическое обновление системы."
    }
  ]
}
```

```json
{
  "id": "s07",
  "order": 7,
  "placeId": "bank",
  "chipLabel": "Банк",
  "categoryIds": [
    "phishing",
    "finance"
  ],
  "theme": "Поддельные сайты",
  "badge": "ФИШИНГ/ФИНАНСЫ",
  "title": "Банковский двойник",
  "situation": "После работы коллеги решили скинуться на подарок имениннику. Вы заходите на сайт банка, чтобы перевести деньги. В поиске находите сайт банка. Адрес: vashbank.com. Сайт выглядит один в один как настоящий.",
  "illustration": "/illustrations/s07.webp",
  "answers": [
    {
      "id": "A",
      "text": "Введу логин и пароль — сайт же выглядит как настоящий",
      "choiceSummary": "Вы ввели логин и пароль",
      "score": 0,
      "hacker": "Ты ввёл логин и пароль на моём сайте. Скоро я оформлю кредит на тебя :)",
      "expert": "Деньги уходят на счёт мошенников. Мошенники создают поддельные сайты с адресами, которые отличаются на одну букву. Это называется тайпсквоттинг.",
      "expertHow": "Всегда проверяйте адресную строку до ввода данных. Заходите в банк только через официальное приложение или сайт, сохранив его в закладках.",
      "expertHowEmphasis": "Заходите в банк только через официальное приложение или сайт,"
    },
    {
      "id": "B",
      "text": "Введу логин и пароль, а потом проверю адрес",
      "choiceSummary": "Вы ввели логин и пароль, а потом проверили адрес",
      "score": 3,
      "hacker": "Проверять после ввода? Гениально. Данные уже у меня, но хоть ошибку свою понял.",
      "expert": "Данные уже введены, проверка после ввода бесполезна. Мошенник получил логин и пароль. Мошенники создают поддельные сайты с адресами, которые отличаются на одну букву. Это называется тайпсквоттинг.",
      "expertHow": "Всегда проверяйте адресную строку до ввода данных. Заходите в банк только через официальное приложение или сайт, сохранив его в закладках.",
      "expertHowEmphasis": "Заходите в банк только через официальное приложение или сайт,"
    },
    {
      "id": "C",
      "text": "Проверю адресную строку, замечу подмену, закрою сайт и сообщу в банк",
      "choiceSummary": "Вы проверили адресную строку и нашли подмену",
      "score": 10,
      "hacker": "Ты заметил подмену и нажаловался в банк?! Я же купила домен с буквой \"c\" вместо \"s\"! Всё, меня вычислили.",
      "expert": "Вы в безопасности. Сообщаете в банк о фишинговом сайте, поддельный домен после блокируют. Мошенники создают поддельные сайты с адресами, которые отличаются на одну букву. Это называется тайпсквоттинг.",
      "expertHow": "Всегда проверяйте адресную строку до ввода данных. Заходите в банк только через официальное приложение или сайт, сохранив его в закладках.",
      "expertHowEmphasis": "Заходите в банк только через официальное приложение или сайт,"
    },
    {
      "id": "D",
      "text": "Введу только логин и посмотрю, что будет дальше",
      "choiceSummary": "Вы ввели логин без пароля",
      "score": 5,
      "hacker": "Логин без пароля? Теперь я знаю, что аккаунт существует. Подберу пароль позже.",
      "expert": "Мошенники узнали, что такой аккаунт существует. Начинают подбирать пароль. Мошенники создают поддельные сайты с адресами, которые отличаются на одну букву. Это называется тайпсквоттинг.",
      "expertHow": "Всегда проверяйте адресную строку до ввода данных. Заходите в банк только через официальное приложение или сайт, сохранив его в закладках.",
      "expertHowEmphasis": "Заходите в банк только через официальное приложение или сайт,"
    }
  ]
}
```

```json
{
  "id": "s08",
  "order": 8,
  "placeId": "mail",
  "chipLabel": "Почта",
  "categoryIds": [
    "phishing"
  ],
  "theme": "Фишинговые письма",
  "badge": "ФИШИНГ / МОШЕННИЧЕСТВО",
  "title": "Цена доставки",
  "situation": "По дороге домой вы проверяете почту. Приходит письмо: «Ваша посылка не может быть доставлена. Требуется доплата 150 ₽. Перейдите по ссылке для подтверждения». Вы действительно ждёте посылку с маркетплейса.",
  "illustration": "/illustrations/s08.webp",
  "answers": [
    {
      "id": "A",
      "text": "Перейду по ссылке и введу данные карты",
      "choiceSummary": "Вы перешли по ссылке и ввели данные карты",
      "score": 0,
      "hacker": "Спасибо за карту! 150 ₽ говоришь? Ну-ну. Посмотри на уведомление от банка.",
      "expert": "С карты списывают 15 000 ₽, а не 150 ₽. Мошенники используют информацию о реальных посылках, чтобы выманить данные карты.",
      "expertHow": "Не переходите по ссылкам из писем о посылках. Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там.",
      "expertHowEmphasis": "Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там."
    },
    {
      "id": "B",
      "text": "Перейду по ссылке, но проверю адрес сайта",
      "choiceSummary": "Вы перешли по ссылке, но проверили адрес",
      "score": 3,
      "hacker": "Зашёл на сайт? Отлично. Дальше будет интереснее.",
      "expert": "Вы на поддельном сайте. Данные вы не ввели, но сайт мог украсть cookies или попытаться установить вредоносное ПО. Риск заражения устройства сохраняется. Мошенники используют информацию о реальных посылках, чтобы выманить данные карты.",
      "expertHow": "Не переходите по ссылкам из писем о посылках. Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там.",
      "expertHowEmphasis": "Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там."
    },
    {
      "id": "C",
      "text": "Не буду переходить по ссылке, но отвечу на письмо",
      "choiceSummary": "Вы не перешли по ссылке, но ответили на письмо",
      "score": 5,
      "hacker": "О, ты ответил! Значит, адрес активен. Теперь буду присылать тебе \"письма счастья\" каждый день.",
      "expert": "Ответив, вы подтвердили, что адрес активен. Теперь спама будет больше. Мошенники используют информацию о реальных посылках, чтобы выманить данные карты.",
      "expertHow": "Не переходите по ссылкам из писем о посылках. Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там.",
      "expertHowEmphasis": "Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там."
    },
    {
      "id": "D",
      "text": "Зайду в приложение маркетплейса и проверю статус заказа",
      "choiceSummary": "Вы зашли в приложение маркетплейса для проверки",
      "score": 10,
      "hacker": "Ты проверил через приложение? Всё, я осталась без \"легких денег\". Ненавижу умных!",
      "expert": "В приложении видно, что посылка в пути, доплата не требуется. Мошенники используют информацию о реальных посылках, чтобы выманить данные карты.",
      "expertHow": "Не переходите по ссылкам из писем о посылках. Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там.",
      "expertHowEmphasis": "Заходите в приложение маркетплейса напрямую и проверяйте статус заказа там."
    }
  ]
}
```

```json
{
  "id": "s09",
  "order": 9,
  "placeId": "home",
  "chipLabel": "Дом",
  "categoryIds": [
    "privacy"
  ],
  "overlayTag": "social_engineering",
  "theme": "Фейковые аккаунты",
  "badge": "ПРИВАТНОСТЬ",
  "title": "Ловушка общих друзей",
  "situation": "Вы наконец дома. Листаете ленту в соцсетях. Приходит запрос в друзья от незнакомки. 12 общих друзей, на фото — дорогая машина, путешествия, однако ты её не знаешь. Пишет: «Привет! Ты меня не помнишь? Мы виделись у Кати на вечеринке».",
  "illustration": "/illustrations/s09.webp",
  "answers": [
    {
      "id": "A",
      "text": "Приму запрос и начну общение",
      "choiceSummary": "Вы приняли запрос и начали общение",
      "score": 0,
      "hacker": "Принял и пишешь? Отлично. Через неделю у меня будут твои фото, друзья и место работы.",
      "expert": "Через неделю у незнакомки ваши фото, список друзей, место работы. Она начинает писать вашим близким от вашего имени. Фейковые аккаунты собирают данные: фото, друзей, места работы. Потом эта информация используется для целевых атак.",
      "expertHow": "Проверяйте личность через общих друзей, прежде чем принимать запрос. Если никто не знает человека — блокируйте.",
      "expertHowEmphasis": "Если никто не знает человека — блокируйте."
    },
    {
      "id": "B",
      "text": "Приму запрос, но не буду отвечать на сообщения",
      "choiceSummary": "Вы приняли запрос, но не отвечаете на сообщения",
      "score": 3,
      "hacker": "Принял, но молчишь? Ничего, почитаю твои посты и найду, чем зацепить.",
      "expert": "Фейковый аккаунт получил доступ к вашим постам и личной информации. Теперь мошенник знает, где вы работаете, где бываете и с кем общаетесь. Фейковые аккаунты собирают данные: фото, друзей, места работы. Потом эта информация используется для целевых атак.",
      "expertHow": "Проверяйте личность через общих друзей, прежде чем принимать запрос. Если никто не знает человека — блокируйте.",
      "expertHowEmphasis": "Если никто не знает человека — блокируйте."
    },
    {
      "id": "C",
      "text": "Отклоню запрос и не буду вступать в диалог",
      "choiceSummary": "Вы отклонили запрос и не вступили в переписку",
      "score": 5,
      "hacker": "Отклонил? Эх, а я так старалась. Ладно, поищу кого-нибудь подоверчивее.",
      "expert": "Вы не дали фейку доступ к своим данным. Мошенник уходит, но может попробовать снова под другим именем. Фейковые аккаунты собирают данные: фото, друзей, места работы. Потом эта информация используется для целевых атак.",
      "expertHow": "Проверяйте личность через общих друзей, прежде чем принимать запрос. Если никто не знает человека — блокируйте.",
      "expertHowEmphasis": "Если никто не знает человека — блокируйте."
    },
    {
      "id": "D",
      "text": "Напишу общим друзьям, спрошу, знают ли они её",
      "choiceSummary": "Вы написали общим друзьям",
      "score": 10,
      "hacker": "Ты написал общим друзьям?! Мой фейк раскрыт. Придётся создавать нового. Ненавижу умных!",
      "expert": "Друзья отвечают, что не знают такую. Вы блокируете фейк и предупреждаете других. Фейковые аккаунты собирают данные: фото, друзей, места работы. Потом эта информация используется для целевых атак.",
      "expertHow": "Проверяйте личность через общих друзей, прежде чем принимать запрос. Если никто не знает человека — блокируйте.",
      "expertHowEmphasis": "Если никто не знает человека — блокируйте."
    }
  ]
}
```

```json
{
  "id": "s10",
  "order": 10,
  "placeId": "home",
  "chipLabel": "Дом",
  "categoryIds": [
    "devices"
  ],
  "theme": "Вредоносное ПО",
  "badge": "УСТРОЙСТВА/ВРЕДОНОСНОЕ ПО",
  "title": "Подарок с форума",
  "situation": "Вечером вы решили смонтировать видео с прошедшего дня. Нужно платное приложение для монтажа. В официальном магазине — 5000 ₽. На форуме нашли «бесплатную полную версию» и APK-файл для скачивания. Что будете делать?",
  "illustration": "/illustrations/s10.webp",
  "answers": [
    {
      "id": "A",
      "text": "Не буду скачивать файл и куплю лицензию",
      "choiceSummary": "Вы купили лицензию",
      "score": 10,
      "hacker": "Я так старалась! Иконку прикрутила, описание написала — а он не будет скачивать?!",
      "expert": "Вы заплатите 5000 ₽ за лицензионное ПО, но нервы и данные в безопасности. Вирус попадает в устройство после запуска непроверенного приложения. Проверка антивирусом не даёт гарантии.",
      "expertHow": "Скачивайте приложения только из официальных магазинов. Если приложение платное — купите лицензию, это безопаснее.",
      "expertHowEmphasis": "только из официальных магазинов."
    },
    {
      "id": "B",
      "text": "Установлю после проверки антивирусом",
      "choiceSummary": "Вы установили файл после проверки антивирусом",
      "score": 3,
      "hacker": "Проверил антивирусом? Наивный. Мой вирус обходит любые антивирусы.",
      "expert": "Антивирус не находит угрозу, но вирус обходит защиту. Вирус попадает в устройство после запуска непроверенного приложения. Проверка антивирусом не даёт гарантии.",
      "expertHow": "Скачивайте приложения только из официальных магазинов. Если приложение платное — купите лицензию, это безопаснее.",
      "expertHowEmphasis": "только из официальных магазинов."
    },
    {
      "id": "C",
      "text": "После установки удалю APK файл и проверю устройство антивирусом",
      "choiceSummary": "Вы после установки удалили APK и проверили устройство антивирусом",
      "score": 5,
      "hacker": "Удалил и проверил? Ну-ну. Файл уже был на телефоне. Может, я что-то оставила.",
      "expert": "Вы удалили файл, но не уверены, что он не успел навредить. Вирус попадает в устройство после запуска непроверенного приложения. Проверка антивирусом не даёт гарантии.",
      "expertHow": "Скачивайте приложения только из официальных магазинов. Если приложение платное — купите лицензию, это безопаснее.",
      "expertHowEmphasis": "только из официальных магазинов."
    },
    {
      "id": "D",
      "text": "Все равно установлю",
      "choiceSummary": "Вы скачали и установили файл",
      "score": 0,
      "hacker": "О, да ты мой любимчик! Даже не читал, что за файл. Лучший пользователь дня!",
      "expert": "Вместе с приложением устанавливается вирус. Вирус попадает в устройство после запуска непроверенного приложения. Проверка антивирусом не даёт гарантии.",
      "expertHow": "Скачивайте приложения только из официальных магазинов. Если приложение платное — купите лицензию, это безопаснее.",
      "expertHowEmphasis": "только из официальных магазинов."
    }
  ]
}
```

Корневой объект `src/content/scenarios.json`:

- `version`: `1`
- `exhibition`: `"Ключ к доверию"`
- `productTitle`: `"Маршрут цифрового дня"`
- `museumSiteUrl`: `"https://cryptography-museum.ru/"`
- `scenarios`: массив из **ровно десяти** объектов s01…s10 в этом порядке (полные JSON выше). Комментариев внутри файла нет.

После сборки JSON прогнать `ScenariosFileSchema.parse`. Сборка падает, если не 10 сцен, дубли `id`/`order`, или множество баллов сцены ≠ `{0,3,5,10}` по одному разу.

### 2.6 localStorage

Ключ: `mdd.session.v1` (Маршрут цифрового дня). Других ключей с ПДн нет.

Ключи **не** для ПДн:

| Ключ | Storage | Значение |
|------|---------|----------|
| `mdd.session.v1` | localStorage | сессия посетителя |
| `mdd.session.v1.bak` | localStorage | backup битой сессии |
| `mdd.admin` | sessionStorage | `"1"` после логина админа; иначе ключа нет |
| `mdd.mocks.runs` | sessionStorage | массив завершённых run для мока API (общий для POST посетителя и GET админа) |

```json
{
  "version": 1,
  "anonymousId": "3d1c0a7e-6b21-4f0c-9a11-2c8f0e4d7b91",
  "runId": "7aa21f02-9c44-4d18-b0e1-55c8d2a91f30",
  "startedAt": "2026-09-13T12:04:11.204Z",
  "completedAt": null,
  "synced": false,
  "answers": [
    {
      "scenarioId": "s01",
      "answerId": "D",
      "score": 10,
      "answeredAt": "2026-09-13T12:05:02.118Z"
    }
  ]
}
```

Парсинг: `SessionStateSchema.safeParse`. Невалидный JSON — backup в `mdd.session.v1.bak` и новая пустая сессия с **новым** `anonymousId`.

### 2.7 ASCII: клиентское состояние

```
                    ┌─────────────────────────────────┐
                    │  Vite SPA (nginx static)        │
                    │  scenarios.json  (immutable)    │
                    └───────────────┬─────────────────┘
                                    │
                         load + Zod parse
                                    │
                    ┌───────────────▼─────────────────┐
                    │  SessionStore                   │
                    │  localStorage[mdd.session.v1]   │
                    │  anonymousId, runId, answers[]  │
                    │  completedAt, synced            │
                    └───────┬─────────────┬───────────┘
                            │             │
              derive n/10   │             │ POST /runs
              scores/profile│             │ iff 10/10 && !synced
                            │             │
              ┌─────────────▼──┐    ┌─────▼──────────┐
              │ React Router   │    │ api/*          │
              │ /              │    │ mock | fetch   │
              │ /play/:id      │    │ POST /runs     │
              │ /results       │    │ POST /admin/session │
              │ /admin/login   │    │ GET /runs      │
              │ /admin         │    │ GET /runs/:id  │
              │ /admin/runs/:id│    │ GET /stats/summary │
              └────────────────┘    └────────────────┘
                    ▲
                    │ sessionStorage mdd.admin=1
                    │ (демо-гейт маршрута)
```

Состояние экрана `/play/:id`: если в `answers` нет этой сцены → Question; если есть → Debrief (read-only).

---

## 3. API (Блок 3)

Vite SPA. Сетевые вызовы **только** из `src/api/*`, не из компонентов экранов. Сценарии **не** грузятся с сервера в MVP.

Каждый endpoint ниже: метод, путь, авторизация, JSON запроса (если есть), JSON 2xx, JSON ошибки. Формулировок «стандартный CRUD» и «формат аналогичен» нет.

### 3.1 Модули клиента

| Модуль | Ответственность |
|--------|-----------------|
| `src/api/env.ts` | `apiBaseUrl` (trim `/`); `adminPassword = import.meta.env.VITE_ADMIN_PASSWORD \|\| "mdd-admin-stand"` |
| `src/api/types.ts` | типы запроса/ответа и `ApiError` |
| `src/api/schema.ts` | Zod контракта HTTP (runs + admin) |
| `src/api/client.ts` | `apiFetch(path, init)` — JSON, timeout 8s, разбор ошибок; для боевого URL `credentials: "include"` (cookie Бастиона, когда появится) |
| `src/api/mock.ts` | in-memory + `sessionStorage['mdd.mocks.runs']`; seed fixtures; задержка 120ms |
| `src/api/runs.ts` | `postRun`, `retryUnsyncedRun`, `listRuns`, `getRun` |
| `src/api/stats.ts` | `getStatsSummary` |
| `src/api/admin.ts` | `createAdminSession(password)`, `clearAdminSession()` |
| `src/content/load.ts` | import JSON + parse |
| `src/session/storage.ts` | read/write/reset run |
| `src/admin/gate.ts` | читать/писать `sessionStorage['mdd.admin']` |
| `src/game/scoring.ts` | сумма, категории, strengths/risks |
| `src/game/profile.ts` | профиль только при 10 ответах |
| `src/pdf/checklist.ts` | клиентский PDF |
| `src/share/share.ts` | Web Share + clipboard |

Сигнатуры:

```ts
export async function postRun(body: PostRunRequest): Promise<PostRunResponse>;
export async function listRuns(query: { page?: number; per_page?: number }): Promise<Paginated<RunListItem>>;
export async function getRun(runId: string): Promise<RunDetail>;
export async function getStatsSummary(): Promise<StatsSummary>;
export async function createAdminSession(password: string): Promise<{ ok: true }>;
export function clearAdminSession(): void;
```

Если `apiBaseUrl === ""` → соответствующие `mock*` функции. Иначе `${apiBaseUrl}` + path.

Экраны посетителя вызывают **только** `postRun` / `retryUnsyncedRun`. `GET /stats/summary` и `GET /runs*` — только с маршрутов `/admin*`.

### 3.2 HTTP-контракт, который реализует Бастион

Базовый URL без хвостового `/`. Все JSON. Ошибки — единая форма §3.2.7.

#### 3.2.1 `POST /runs`

**Описание:** принять одно завершённое обезличенное прохождение.  
**Авторизация:** публичный (аноним). Cookie не нужны.  
`Content-Type: application/json`  
Тело — обезличенное **завершённое** прохождение. ПДн нет. Клиент шлёт **только** если `answers.length === 10` и `completedAt !== null`. Частичные заходы на `/results` на сервер не уходят. Старты (незавершённые run) в контракте **сегодня нет** — посещаемость = число принятых тел.

```json
{
  "anonymousId": "3d1c0a7e-6b21-4f0c-9a11-2c8f0e4d7b91",
  "runId": "7aa21f02-9c44-4d18-b0e1-55c8d2a91f30",
  "startedAt": "2026-09-13T12:04:11.204Z",
  "completedAt": "2026-09-13T12:11:40.002Z",
  "index": 85,
  "profileId": "careful_analyst",
  "answers": [
    { "scenarioId": "s01", "answerId": "D", "score": 10 },
    { "scenarioId": "s02", "answerId": "C", "score": 10 },
    { "scenarioId": "s03", "answerId": "C", "score": 10 },
    { "scenarioId": "s04", "answerId": "B", "score": 10 },
    { "scenarioId": "s05", "answerId": "D", "score": 10 },
    { "scenarioId": "s06", "answerId": "C", "score": 10 },
    { "scenarioId": "s07", "answerId": "C", "score": 10 },
    { "scenarioId": "s08", "answerId": "D", "score": 10 },
    { "scenarioId": "s09", "answerId": "C", "score": 5 },
    { "scenarioId": "s10", "answerId": "A", "score": 10 }
  ],
  "categories": [
    { "id": "phishing", "earned": 30, "max": 30, "percent": 100 },
    { "id": "privacy", "earned": 15, "max": 20, "percent": 75 },
    { "id": "wifi", "earned": 10, "max": 10, "percent": 100 },
    { "id": "accounts", "earned": 20, "max": 20, "percent": 100 },
    { "id": "devices", "earned": 20, "max": 20, "percent": 100 },
    { "id": "finance", "earned": 20, "max": 20, "percent": 100 }
  ],
  "contentVersion": 1,
  "client": "mdd-web"
}
```

Клиент шлёт `POST` **только** если `answers.length === 10` и `completedAt !== null`. Частичные заходы на `/results` на сервер не уходят.

#### Success 201 (повтор того же `runId` — 200, идемпотентность)

```json
{
  "ok": true,
  "runId": "7aa21f02-9c44-4d18-b0e1-55c8d2a91f30",
  "stored": true
}
```

#### Error — всегда эта форма, любой 4xx/5xx

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "answers must contain 10 unique scenarioId"
  }
}
```

| HTTP | code | когда |
|-----:|------|--------|
| 400 | VALIDATION_ERROR | Zod/схема тела или query |
| 401 | INVALID_CREDENTIALS | `POST /admin/session` неверный пароль |
| 401 | UNAUTHORIZED | админский GET/POST без сессии |
| 404 | NOT_FOUND | нет run с таким `runId` |
| 409 | CONFLICT | тот же runId с другим телом |
| 429 | RATE_LIMITED | лимит Бастиона |
| 500 | INTERNAL | их сбой |

Клиент на 409 с тем же смыслом считает `synced=true` (уже принят). На 429 — backoff 2s/4s один раз, затем сдаётся до следующего визита `/results`. Админ на 401 UNAUTHORIZED: `clearAdminSession()`, редирект `/admin/login`.

#### 3.2.2 `POST /admin/session`

**Описание:** проверить пароль стенда и открыть демо-гейт админки.  
**Авторизация:** публичный (знание пароля). Учётки посетителя нет.  
`Content-Type: application/json`

Запрос:

```json
{
  "password": "mdd-admin-stand"
}
```

Успех **200**:

```json
{
  "ok": true
}
```

Неверный пароль **401**:

```json
{
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Неверный пароль"
  }
}
```

Мок: сравнить `password` с `VITE_ADMIN_PASSWORD`, если env пустой — с `mdd-admin-stand` (сменить при деплое). Cookie мок **не** ставит. Клиент после 200 пишет `sessionStorage['mdd.admin'] = '1'`.

Боевой Бастион: тот же JSON; плюс httpOnly cookie сессии. Клиент всё равно ставит флаг для ге́йта маршрута. Сравнение пароля только в бандле **запрещено как единственная защита** продакшена.

Logout: `sessionStorage.removeItem('mdd.admin')`. Отдельный `DELETE` в MVP мока нет. Когда Бастион добавит `DELETE /admin/session`, клиент вызовет его из `clearAdminSession`.

#### 3.2.3 `GET /runs`

**Описание:** страница завершённых прохождений для админки.  
**Авторизация:** админ-сессия (мок: `mdd.admin==='1'`; прод Бастиона: cookie сессии + 401 без неё).  
Query: `page` (int ≥ 1, default 1), `per_page` (int 1–100, default 20). Сортировка: `completedAt` DESC. Только завершённые run (все записи контракта). **Не** возвращать `anonymousId`, имена, email, телефон.

Пример `GET /runs?page=1&per_page=20` **200**:

```json
{
  "data": [
    {
      "runId": "7aa21f02-9c44-4d18-b0e1-55c8d2a91f30",
      "startedAt": "2026-09-13T12:04:11.204Z",
      "completedAt": "2026-09-13T12:11:40.002Z",
      "index": 85,
      "profileId": "careful_analyst",
      "answeredCount": 10
    },
    {
      "runId": "b2e91c44-0a18-4f77-9d03-81aa0c12e4f8",
      "startedAt": "2026-09-13T11:40:00.000Z",
      "completedAt": "2026-09-13T11:47:12.500Z",
      "index": 38,
      "profileId": "easy_target",
      "answeredCount": 10
    },
    {
      "runId": "c8f10d55-1b29-4088-ae14-92bb1d23f509",
      "startedAt": "2026-09-13T10:02:00.000Z",
      "completedAt": "2026-09-13T10:09:33.000Z",
      "index": 100,
      "profileId": "digital_ninja",
      "answeredCount": 10
    }
  ],
  "meta": {
    "total": 3,
    "page": 1,
    "per_page": 20
  }
}
```

Пустая страница (нет run-ов) **200**: `{ "data": [], "meta": { "total": 0, "page": 1, "per_page": 20 } }`. `page` больше последней: `data: []`, `meta.total` без изменений.

Без админ-сессии **401** UNAUTHORIZED:

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "admin session required"
  }
}
```

#### 3.2.4 `GET /runs/:id`

**Описание:** одно прохождение: ответы correct/wrong, баллы, категории.  
**Авторизация:** админ-сессия (как §3.2.3).  
`:id` = UUID v4. Успех **200** — полное прохождение без ПДн и без `anonymousId`. `correct === (score === 10)`.

```json
{
  "runId": "7aa21f02-9c44-4d18-b0e1-55c8d2a91f30",
  "startedAt": "2026-09-13T12:04:11.204Z",
  "completedAt": "2026-09-13T12:11:40.002Z",
  "index": 85,
  "profileId": "careful_analyst",
  "answers": [
    { "scenarioId": "s01", "answerId": "D", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s02", "answerId": "C", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s03", "answerId": "C", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s04", "answerId": "B", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s05", "answerId": "D", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s06", "answerId": "C", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s07", "answerId": "C", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s08", "answerId": "D", "score": 10, "correct": true, "maxScore": 10 },
    { "scenarioId": "s09", "answerId": "C", "score": 5, "correct": false, "maxScore": 10 },
    { "scenarioId": "s10", "answerId": "A", "score": 10, "correct": true, "maxScore": 10 }
  ],
  "categories": [
    { "id": "phishing", "label": "Фишинг", "earned": 30, "max": 30, "percent": 100 },
    { "id": "privacy", "label": "Приватность", "earned": 15, "max": 20, "percent": 75 },
    { "id": "wifi", "label": "Wi-Fi / Сети", "earned": 10, "max": 10, "percent": 100 },
    { "id": "accounts", "label": "Пароли / Аккаунты", "earned": 20, "max": 20, "percent": 100 },
    { "id": "devices", "label": "Устройства", "earned": 20, "max": 20, "percent": 100 },
    { "id": "finance", "label": "Финансы", "earned": 20, "max": 20, "percent": 100 }
  ]
}
```

Нет записи **404** NOT_FOUND:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "run not found"
  }
}
```

#### 3.2.5 `GET /stats/summary`

**Описание:** агрегаты стенда по завершённым `POST /runs`.  
**Авторизация:** админ-сессия (как §3.2.3).  
Агрегат по **завершённым** `POST /runs`. Посещаемость (`attendance`) = `completedCount`. `startedCount` сейчас **равен** `completedCount`: незавершённые старты сервер не принимает. Когда Бастион начнёт писать старты, он поднимет `startedCount`, `completionRate` станет `< 100`.

`averageIndex`: среднее арифметическое `index` по completed; если `completedCount === 0` → `0`. Округлить до 1 знака после запятой (71.4). `completionRate` = `round(completedCount / startedCount * 100)` при `startedCount > 0`, иначе `0`.

Пример **200** (три fixture-run: индексы 85, 38, 100):

```json
{
  "startedCount": 3,
  "completedCount": 3,
  "attendance": 3,
  "averageIndex": 74.3,
  "completionRate": 100,
  "profileCounts": {
    "easy_target": 1,
    "trusting_passerby": 0,
    "careful_analyst": 1,
    "digital_ninja": 1
  }
}
```

Нулевая база **200**:

```json
{
  "startedCount": 0,
  "completedCount": 0,
  "attendance": 0,
  "averageIndex": 0,
  "completionRate": 0,
  "profileCounts": {
    "easy_target": 0,
    "trusting_passerby": 0,
    "careful_analyst": 0,
    "digital_ninja": 0
  }
}
```

#### 3.2.6 CORS и методы (ожидание к Бастиону)

`GET`, `POST`, `OPTIONS`. Origins: origin статики и `https://cryptography-museum.ru` при игре на поддомене. Заголовки: `Content-Type`. Когда появится cookie-сессия: `Access-Control-Allow-Credentials: true` и конкретный Origin (не `*`). Лимит: не жёстче **60 POST /runs в минуту с одного IP**; GET админа — не жёстче 120/мин. Тело POST ≤ 16 KB. IP не публиковать как идентификатор человека.

`DELETE /admin/session` в MVP мока **нет** (N/A): logout = `sessionStorage.removeItem('mdd.admin')`. Когда Бастион добавит DELETE, `clearAdminSession` вызовет его; до этого отдельного HTTP logout нет.

#### 3.2.7 Каноническое тело ошибки (все 4xx/5xx)

Клиент парсит `ApiErrorSchema`. Если тела нет или не JSON — локально `code: "INTERNAL"`, `message: "non-json response"`.

**409 CONFLICT** (`POST /runs`, тот же `runId`, другое тело):

```json
{
  "error": {
    "code": "CONFLICT",
    "message": "runId already stored with a different body"
  }
}
```

**429 RATE_LIMITED** (боевой Бастион; мок N/A):

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "too many POST /runs from this IP"
  }
}
```

**500 INTERNAL**:

```json
{
  "error": {
    "code": "INTERNAL",
    "message": "upstream failure"
  }
}
```

Остальные коды: `VALIDATION_ERROR` (пример в §3.2.1), `INVALID_CREDENTIALS` (§3.2.2), `UNAUTHORIZED` (§3.2.3), `NOT_FOUND` (§3.2.4). Других code клиент не вводит.

Клиент на 409 с тем же смыслом считает `synced=true` (уже принят). На 429 — backoff 2s затем 4s (две попытки), затем сдаётся до следующего визита `/results`. Админ на 401 UNAUTHORIZED: `clearAdminSession()`, редирект `/admin/login`.

### 3.3 Zod HTTP

```ts
import { z } from "zod";
import { AnswerIdSchema, CategoryIdSchema, ScoreSchema } from "../content/schema";

export const PostRunAnswerSchema = z.object({
  scenarioId: z.string().regex(/^s(0[1-9]|10)$/),
  answerId: AnswerIdSchema,
  score: ScoreSchema,
});

export const PostRunCategorySchema = z.object({
  id: CategoryIdSchema,
  earned: z.number().int().min(0),
  max: z.number().int().positive(),
  percent: z.number().int().min(0).max(100),
});

export const PostRunRequestSchema = z.object({
  anonymousId: z.string().uuid(),
  runId: z.string().uuid(),
  startedAt: z.string().datetime(),
  completedAt: z.string().datetime(),
  index: z.number().int().min(0).max(100),
  profileId: z.enum([
    "easy_target",
    "trusting_passerby",
    "careful_analyst",
    "digital_ninja",
  ]),
  answers: z.array(PostRunAnswerSchema).length(10),
  categories: z.array(PostRunCategorySchema).length(6),
  contentVersion: z.literal(1),
  client: z.literal("mdd-web"),
});

export const PostRunResponseSchema = z.object({
  ok: z.literal(true),
  runId: z.string().uuid(),
  stored: z.boolean(),
});

export const AdminSessionRequestSchema = z.object({
  password: z.string().min(1).max(200),
});

export const AdminSessionResponseSchema = z.object({
  ok: z.literal(true),
});

export const RunListItemHttpSchema = z.object({
  runId: z.string().uuid(),
  startedAt: z.string().datetime(),
  completedAt: z.string().datetime(),
  index: z.number().int().min(0).max(100),
  profileId: z.enum([
    "easy_target",
    "trusting_passerby",
    "careful_analyst",
    "digital_ninja",
  ]),
  answeredCount: z.literal(10),
});

export const RunListResponseHttpSchema = z.object({
  data: z.array(RunListItemHttpSchema),
  meta: z.object({
    total: z.number().int().min(0),
    page: z.number().int().min(1),
    per_page: z.number().int().min(1).max(100),
  }),
});

export const RunAnswerDetailHttpSchema = z.object({
  scenarioId: z.string().regex(/^s(0[1-9]|10)$/),
  answerId: AnswerIdSchema,
  score: ScoreSchema,
  correct: z.boolean(),
  maxScore: z.literal(10),
});

export const RunDetailHttpSchema = z.object({
  runId: z.string().uuid(),
  startedAt: z.string().datetime(),
  completedAt: z.string().datetime(),
  index: z.number().int().min(0).max(100),
  profileId: z.enum([
    "easy_target",
    "trusting_passerby",
    "careful_analyst",
    "digital_ninja",
  ]),
  answers: z.array(RunAnswerDetailHttpSchema).length(10),
  categories: z
    .array(
      z.object({
        id: CategoryIdSchema,
        label: z.string().min(1),
        earned: z.number().int().min(0),
        max: z.number().int().positive(),
        percent: z.number().int().min(0).max(100),
      }),
    )
    .length(6),
});

export const StatsSummaryHttpSchema = z.object({
  startedCount: z.number().int().min(0),
  completedCount: z.number().int().min(0),
  attendance: z.number().int().min(0),
  averageIndex: z.number().min(0).max(100),
  completionRate: z.number().int().min(0).max(100),
  profileCounts: z.object({
    easy_target: z.number().int().min(0),
    trusting_passerby: z.number().int().min(0),
    careful_analyst: z.number().int().min(0),
    digital_ninja: z.number().int().min(0),
  }),
});

export const ApiErrorSchema = z.object({
  error: z.object({
    code: z.string().min(1),
    message: z.string().min(1),
  }),
});
```

Refine деталей run: для каждого answer `correct === (score === 10)`; `index` равен сумме `answers[].score`.

### 3.4 Мок

`src/api/mock.ts`:

- Хранилище run: `sessionStorage['mdd.mocks.runs']`, max 50, FIFO drop oldest.
- При пустом store засидить **три** fixture из примеров §3.2.3–3.2.4 (индексы 85 / 38 / 100). Тела fixture — валидный `PostRunRequest` без показа `anonymousId` в GET.
- `mockPostRun`: append, ответ `{ ok: true, runId, stored: true }`. Идемпотентность: тот же `runId` + то же тело → 200 stored true; другое тело → ошибка CONFLICT как 409.
- `mockCreateAdminSession`: пароль vs env/default; успех `{ ok: true }`; иначе throw ApiError INVALID_CREDENTIALS. Флаг `mdd.admin` ставит **клиент** после ok, не мок.
- `mockListRuns` / `mockGetRun` / `mockGetStatsSummary`: если `sessionStorage['mdd.admin'] !== '1'` → UNAUTHORIZED. Иначе читать store. Stats: `attendance = completedCount = startedCount = store.length`.
- CORS и 429 **N/A**. Сеть мок не бросает.

### 3.5 nginx (наш образ)

Только статика. Не проксировать `/api` в этом контейнере (решение: Бастион ставит свой ingress). `try_files $uri $uri/ /index.html` — покрывает `/admin` и `/admin/runs/:id`. Cache-Control для `/assets/` — immutable; для `index.html` — no-store.

---

## 4. UI/UX (Блок 4)

Mobile-first 360 **для игры**. Desktop игры: контент `max-width: 480px` по центру на фоне `#F9F9F9` **или** двухколоночная сетка Tailwind `lg:grid-cols-[1fr_360px]` для вопроса — Кямран подкрутит. **Админка** — отдельная сетка `max-w-[960px]` (§4.10); кадров Figma для `/admin` нет, собрать из тех же токенов (чёрный/синий). Декоративные анимации не обязательны и **не блокер** приёмки. Скелетоны — **статичные серые** блоки, не pulse/shimmer. `prefers-reduced-motion` — §5.9.

Компоненты UI kit (не shadcn): `HeaderMuseumBastion`, `PrimaryButton`, `GhostButton`, `AnswerButton`, `RouteChips`, `ScoreCard`, `CommentCard` (hacker/expert), `IndexRing`, `CategoryBars`, `StrengthRiskCards`, `AdminStatCard`, `AdminRunsTable`, `AdminRunAnswers`, `PasswordField`, `Toast`, `Banner`, `EmptyState`. Компонента `ScenarioMenuCard` **нет**. Иконки чипов, label ScoreCard и стрелок кнопок — SVG из store `media/icons/` (карты §2.4). Баллы на `ScoreCard` — **текст**, не SVG. Логотипы шапки — `media/logos/` (музей + Бастион). Растры карточек хакера/эксперта — `media/hacker-expert/`. Lucide только `Share2` / `Copy` / `Check` / fallback категорий.

Каждый экран ниже содержит путь, layout, компоненты, Loading / Empty / Error и действия.

### 4.1 Токены цвета (Figma Spectral Light — в `:root`)

Кадр Colors / Light theme (`2460:7559`) — **единственный** источник цвета. Не выдумывать дополнительные brand-цвета и **не** поднимать токены «под WCAG». Контраст ratio в SPEC не нормируем — держим кадр как есть (`--text-secondary` и `--border-primary` на `--bg-primary`). «ВАШ ВЫБОР» — `--text-secondary`. Подпись «БАЛЛОВ» на ScoreCard **не** `--text-secondary`: тот же цвет уровня, что у `+N` (§4.7), даже если кадр Figma рисует серый/чёрный.

| Токен CSS | Hex | Где |
|-----------|-----|-----|
| `--white` | `#FFFFFF` | текст на цветной кнопке; заливки карточек |
| `--bg-primary` | `#F9F9F9` | фон страницы |
| `--blue-primary` | `#1E53E6` | акцентный текст; answer pressed; ghost/text default+pressed текст, обводка и стрелка; заливка иконки локации; UI-акценты; выбранный ответ fill; **чип current** (единственный синий чип); ScoreCard +3 и +5: `+N`, «БАЛЛОВ», label |
| `--blue-primary-80` | `rgba(30, 83, 230, 0.8)` | текст и иконка локации при 80%; опционально +3 вместо полного `--blue-primary` |
| `--blue-primary-50` | `rgba(30, 83, 230, 0.5)` | текст и иконка локации при 50% |
| `--black-primary` | `#00001A` | основной текст; primary button **заливка и обводка** |
| `--text-secondary` | `#ADAFB3` | ghost disabled текст/иконка/стрелка; «ВАШ ВЫБОР»; не «БАЛЛОВ» на ScoreCard |
| `--border-primary` | `#6E89D3` | обводка answer button в default (**не** `--text-secondary`) |
| `--border` | `#D1D6E6` | разделители и графические элементы |
| `--bg-route-next` | `#E7EBF5` | токен кадра Light; **не** третье состояние чипа (Kyamran: все не-текущие — muted) |
| `--bg-route-muted` | `#EFF1F7` | фон не-текущего чипа (отвеченный **и** будущий — один серый вид) |
| `--error` | `#E25504` | ScoreCard +0: label-иконка, «опасное», `+0`, «БАЛЛОВ» |
| `--success` | `#00B893` | ScoreCard +10: label-иконка, «безопасное», `+10`, «БАЛЛОВ» |

Не красить как бренд: Gray primary `#E9E9EF`, Blue light `#C9E4EB`, Violet `#CFD7EB`. Статус-бар OS не рисуем.

### 4.2 Шрифты

Копировать **woff2** из store в `public/fonts/` при сборке:

| CSS `font-family` | Файл |
|-------------------|------|
| `Halvar Breitschrift` | `media/fonts/type.today-halvar-breitschrift-web/Halvar Breitschrift-Regular-Web.woff2` |
| `Halvar Breitschrift` (700) | `.../Halvar Breitschrift-Bold-Web.woff2` |
| `Halvar Engschrift` | `.../Halvar Engschrift -Regular Slanted-Web.woff2` (italic/slanted) |
| `Halvar Mittelschrift` | Regular / Medium / Regular Slanted woff2 из `type.today-halvar-mittelschrift-web/` |
| `Halvar Stencil Mittelschrift` | Regular MinGap woff2 |

Стек:

```css
--font-display: "Halvar Breitschrift", "Arial Narrow", sans-serif;
--font-ui: "Bahnschrift", "Segoe UI", "Arial Narrow", sans-serif;
--font-quote: "BBH Bogle", "Impact", "Arial Black", sans-serif; /* не для кавычек разбора */
```

Bahnschrift и BBH Bogle: `@font-face` **не** подключать (нет файлов и лицензий). Имена в `font-family` оставить как в Figma. SF Pro не класть. Light / SemiLight / SemiBold Bahnschrift **файлов нет**: если в ОС есть Bahnschrift — браузер возьмёт её; иначе Segoe UI / Arial. Начертания могут схлопнуться в Regular. `--font-quote` / BBH Bogle **не** ставить на марку кавычек разбора (токен можно оставить в стеке неиспользуемым).

Реф ролей: `media/debrief-refs/type-scale-frame.png`.

| Role | Family | Style | Size | Line-height | Notes |
|------|--------|-------|------|-------------|-------|
| H1 | Halvar Breitschrift (CY) | Regular | 42 | 100% | uppercase; title «Маршрут цифрового дня» |
| H2 | Halvar Breitschrift | Regular | 24 | 120% | scenario title |
| Subtitle | Halvar Breitschrift | Regular | 20 | 120% | blue marketing line |
| Body L 200 | Bahnschrift | Light | 18 | 140% | situation text |
| Body L 600 | Bahnschrift | SemiBold | 18 | 140% | chosen-answer title on ScoreCard |
| Body 200 | Bahnschrift | Light | 16 | 140% | expert paragraph |
| Body 400 | Bahnschrift | Regular | 16 | 140% | expert “never…” emphasis / body |
| button | Bahnschrift | Regular | 16 | 120% | uppercase, letter-spacing 2% |
| answer button | Bahnschrift | SemiLight | 16 | 140% | letter-spacing 2% |
| point number | Halvar Breitschrift | Bold | 44 | 120% | `+0`…`+10` TEXT not icon |
| Number L | Halvar Breitschrift | Bold | 28 | 120% | «01» «02» hacker/expert |
| Number S | Halvar Breitschrift | Bold | 14 | 120% | `1/10` |
| caption | Bahnschrift | Regular | 12 | 140% | uppercase, tracking 1%; «ХАКЕР» «ЭКСПЕРТ» |
| caption 2 | Bahnschrift | Light | 12 | 140% | chip label «Дом» |
| badge | Halvar Breitschrift | Regular | 12 | 120% | uppercase; exhibition badge |

**Quotes (Inverted commas в type scale):** на разборе **не** набирать BBH Bogle 64 и **не** подменять Halvar 28. Марка — SVG `media/icons/kovichki-icon.svg`, `fill`/`currentColor` (как стрелки §4.3). Старое правило «64 или иначе 28 Halvar» для этого знака **снято**.

### 4.3 Общая оболочка

`index.html`: viewport с `viewport-fit=cover` (iPhone notch / home indicator). **Не** рисовать OS status bar (нет поддельной полоски времени из Figma). На каждом экране **игры**: `header` kit — знак музея слева, слово/знак **Бастион** справа. Без бургер-меню. Padding шапки включает `env(safe-area-inset-top)`: шапка **никогда** не уезжает под notch. Sticky CTA низ экрана («Ответить» / «Следующий вопрос» / действия `/results`) — padding `env(safe-area-inset-bottom)` и при необходимости left/right `safe-area-inset-*`: CTA **не** под home indicator. Стиль кнопки при этом разный: вопрос «Ответить» — primary-бар; разбор — синий текст+стрелка (§4.7), не тот же бар.

С главной, вопроса/разбора и результатов — текстовая ссылка «Результаты» видна, если `answers.length > 0`. Ссылок «Админ» в шапке посетителя **нет**. Баннера cookie / дисклеймера localStorage на `/` **нет**.

**Кнопки и стрелки** (реф `media/debrief-refs/button-arrow-states.png`). Стрелки — файлы `media/icons/arrow_right.svg`, `arrow_upright.svg` и соседние `arrow_*.svg`. В SVG `stroke`/`fill` = **`currentColor`** (если экспорт с hex `#00001A` / `#1E53E6` — поправить). Цвет иконки = цвет подписи, от состояния кнопки:

| Состояние | Заливка / обводка | Текст + стрелка |
|-----------|-------------------|-----------------|
| Primary fill (328×52) | `--black-primary` `#00001A` | `--white` |
| Primary/ghost outline dark | тёмная обводка | иконка наследует цвет обводки/`currentColor` |
| Ghost/text blue (kit «Купить билет», «СЛЕДУЮЩИЙ ВОПРОС →») | без чёрной заливки | `--blue-primary` |
| Disabled | — | `--text-secondary` `#ADAFB3` (не opacity 50%) |

Главная «Пройти квест» (и «Продолжить маршрут» на `/`) — **чёрный заполненный бар** + `arrow_upright.svg`. CTA разбора — **только** ghost/text blue + `arrow_right.svg`, **не** бар 328×52 (даже если в Figma на разборе когда-то стоял чёрный бар). `answer_button`: unselected бордер `--border-primary`; pressed и selected fill `--blue-primary`, текст `--white`. Клавиатура и `:focus-visible` — §5.9. `navigator.vibrate` **не** вызывать.

`Toast`: немодальная плашка поверх экрана. **Нет** focus trap, **нет** Escape-как-у-модалки. `aria-live="polite"` допустим. При `prefers-reduced-motion: reduce` появляется на месте, без slide (§5.9).

### 4.4 Главная `/` (Figma `2541:1962`)

**Путь:** `/`  
**Layout:** Full-width колонка, контент max 480px по центру.

**Компоненты:** `HeaderMuseumBastion`, бейдж выставки, H1, body, `PrimaryButton` CTA (fill `#00001A` + `arrow_upright.svg`), мета hourglass, при complete — `PrimaryButton` replay + `GhostButton` к результатам.

- Бейдж `[ Выставка “ключ к доверию” ]`
- H1 «Маршрут цифрового дня» — **всегда**, независимо от сессии
- Подзаголовок из макета (цифровой день, бытовые ситуации) + тело: десять коротких решений, разбор сразу, в конце индекс. **Синий маркетинговый subtitle не менять** для «вернувшихся» и complete.
- CTA **primary-бар**: если `answers.length === 0` — **«Пройти квест»** → `/play/s01`; если есть ответы и run не complete — **«Продолжить маршрут»** → `/play/:id` **первого непройденного** в порядке чипов; если complete — этот CTA не primary (ниже replay + результаты). Вид: 328×52 заливка `--black-primary`, подпись `--white`, стрелка **`arrow_upright.svg`** (`currentColor` = `--white`). Это **не** стиль CTA разбора.
- Мета: иконка hourglass «~7 мин»; «цифровой профиль в конце».
- Дисклеймера cookie/localStorage **нет**.

**Действия:**
1. Тап «Пройти квест» / «Продолжить маршрут» (сессия не complete) → создать/продолжить сессию, затем `/play/s01` или первый непройденный как выше. Не открывать `/menu`.
2. Тап «Пройти игру ещё раз» (complete) → reset run §5.1 шаг 4, `/play/s01`.
3. Тап «К результатам» → `/results`.
4. Тап «Обновить страницу» в Error → `location.reload`.

| Состояние | UI |
|-----------|-----|
| Loading | скелетон шапки + **статичные** серые блоки 16px (не pulse), CTA disabled «Загрузка…» пока JSON не прошёл Zod |
| Empty | недостижимо при валидном бандле; если `scenarios.length === 0` после parse failsafe — «Игра не настроена» |
| Error | «Не удалось загрузить игру.» кнопка «Обновить страницу» (`location.reload`) |

### 4.5 Экрана `/menu` нет

Маршрута `/menu`, компонента `ScenarioMenuCard` и layout picker **нет**. Дизайнер меню не отдаёт. Навигация по десяти тестам — **кликабельные чипы** на `/play/:id` (§4.6–4.7, §5.5). Старт с главной — CTA «Пройти квест» / «Продолжить маршрут» (§4.4). Закладка `/menu` (если кто-то ввёл вручную) → редирект `/`. То же для неизвестного SPA-path `/foo` (§0.4): редирект `/`, **без** тоста «Такого теста нет» (тост только у битого `/play/:id`).

### 4.6 Вопрос `/play/:id` idle + selected (Figma `2541:1998`, `2541:2022`)

**Путь:** `/play/:scenarioId`  
**Layout:** Full-width 360 / optional `lg:grid-cols-[1fr_360px]`.  
**Компоненты:** `HeaderMuseumBastion`, `RouteChips`, badge, illustration, title, situation, `AnswerButton` ×4, sticky **`GhostButton`** «Ответить» (`arrow_right.svg`). На `/play` ссылки «Результаты» в шапке **нет** (кадры pack).

Чипы маршрута **только здесь и на разборе** (10 штук, подписи из §2.4: s01 **Дом** + `mobile_text_2-icon.svg`, не «Смартфон»). Чипы **всегда кликабельны**. Между ними — соединительная линия маршрута как в Figma.

**Визуал — ровно два состояния.** Старый скрин `media/figma-chips-two-states.png` (серый `--bg-route-muted` на rest) **не** канон для pack Kyamran `media/designer/s01/`:

| Состояние | Кто | Вид |
|-----------|-----|-----|
| current | открытый `/play/:id` | заливка `--blue-primary`, глиф `--white`, подпись `--black-primary` |
| rest | все остальные: уже отвеченные **и** ещё не открытые | белый круг, обводка `--blue-primary`, глиф и подпись `--blue-primary` / `--blue-primary-50` |

Третьего цвета «next», отдельного «completed-dot» и акцента только на следующем непройденном **нет**. Непройденный чип → вопрос; пройденный → read-only разбор. Уход с вопроса без «Ответить» ничего не пишет в `answers`.

**Overflow:** горизонтальный скролл; на mobile и tablet **скроллбар невидимый** (`scrollbar-width: none` / `::-webkit-scrollbar { display: none }`). Чипы визуально уезжают за край. Слева и справа **fade**, когда контент не влезает. После смены сценария и на load — `scrollIntoView` текущего чипа (центр или ближайшая видимая позиция), коротко или мгновенно — **не** карусель. При `prefers-reduced-motion: reduce` — прыжок без slide (§5.9).

Счётчик `n/10`: `n = answers.length + 1` на новом вопросе; на разборе `n = answers.length`. Это порядок игры, не «10 вопросов внутри пункта».

Бейдж категории `badge` в квадратных скобках, uppercase, `--blue-primary`.

Иллюстрация `illustration` на экране вопроса: стилизованный синий кадр дизайнера. JSON/бандл `/illustrations/s0N.webp`. Слот высоты kit. **s01–s10 (pack):** 188px, `object-fit: cover`, full-bleed. **s06** — один файл, не слайдер.

**s01:** кадры `media/designer/s01/scenario_1.zip` → вопрос `main.png`, выбор `answer_main.png`, разборы `answer_first.png` / `answer_second.png` / `answer__third.png` / `answer__fourth.png`. Герой → `/illustrations/s01.webp`. Не использовать `answer_first_scenario.zip`.

**s02:** кадры `media/designer/s02/scenario_2.zip` (`2_main.png` → `/illustrations/s02.webp`). Copy и баллы из pack, не из старого «Разрешения при обновлении».

**s03:** кадры `media/designer/s03/scenario_3.zip` (`3_main.png` → `/illustrations/s03.webp`). Copy и баллы из pack. ScoreCard D — «Вы отключили автоматическое подключение и переподключились вручную», не вставка из s02.

**s04:** кадры `media/designer/s04/scenario_4.zip` (`4_main.png` → `/illustrations/s04.webp`). H1 «Иллюзия надёжности», бейдж `ПАРОЛИ / АККАУНТЫ`, чип Работа (портфель). Баллы first +0 / second +10 / third +5 / fourth +3.

**s05:** кадры `media/designer/s05/scenario_5.zip` (`5_main.png` → `/illustrations/s05.webp`). H1 «Ловушка доверия». how-bar на second/third/fourth в zip — вставка из s04; продукт: how из `answer-5_first`. Кнопки, ScoreCard, хакер и эксперт — с кадров s05. Чип Работа (`person_pin-icon.svg`). Баллы 0/3/5/10.

**s06:** кадры `media/designer/s06/scenario_6.zip` (`6_main.png` → `/illustrations/s06.webp`). H1 «Ловушка «позже»», бейдж `УСТРОЙСТВА/ОБНОВЛЕНИЯ`. Один кадр, не слайдер. Баллы first +0 / second +3 / third +10 / fourth +5.

**s07:** кадры `media/designer/s07/scenario_7.zip` (`7_main.png` → `/illustrations/s07.webp`). H1 «Банковский двойник», адрес `vashbank.com`, бейдж `ФИШИНГ/ФИНАНСЫ`. Баллы 0/3/10/5.

**s08:** кадры `media/designer/s08/scenario_8.zip` (`8_main.png` → `/illustrations/s08.webp`). H1 «Цена доставки», чип Почта (не Банк), бейдж `ФИШИНГ / МОШЕННИЧЕСТВО`. Баллы 0/3/5/10.

**s09:** кадры `media/designer/s09/scenario_9.zip` (`9_main.png` → `/illustrations/s09.webp`). H1 «Ловушка общих друзей», чип Дом (`sofa-icon.svg`), бейдж `ПРИВАТНОСТЬ`. Баллы 0/3/5/10.

**s10:** кадры `media/designer/s10/scenario_10.zip` (`10_main.png` → `/illustrations/s10.webp`). H1 «Подарок с форума», бейдж `УСТРОЙСТВА/ВРЕДОНОСНОЕ ПО`, чип Дом (`sofa-icon.svg`). Баллы first +10 / second +3 / third +5 / fourth +0. ScoreCard C — «Вы после установки удалили APK и проверили устройство антивирусом», не «после скачивания» с кадра (кнопка C — после установки).

На экране вопроса — поле `illustration` из JSON (`/illustrations/s0N.webp`). s01–s10: слот 188px + `cover` + full-bleed. Не брать фотореалистичные имена из архива.

Заголовок `title`. Текст ситуации `situation`. Четыре `answer_button` в порядке A→D (не сортировать по баллам). Ghost «Ответить» disabled пока нет выбора (серый `--text-secondary`); sticky справа + safe-area §4.3. Горячих A–D / стрелок **нет** (§5.9).

| Состояние | UI |
|-----------|-----|
| Loading | чипы + **статичный** серый скелетон текста (не pulse) |
| Empty | неизвестный id → redirect `/` + тост «Такого теста нет» |
| Error | «Сценарий повреждён» + «На главную» → `/` (остаться на `/play` допустимо, если JSON сцены ещё читается; **не** «В меню») |

### 4.7 Разбор (Figma `2541:2046` / `2160` / `2181`, плюс +3)

**Путь:** тот же `/play/:scenarioId` (режим Debrief, не отдельный URL).  
**Layout:** Full-width.  
**Компоненты:** `HeaderMuseumBastion`, `RouteChips` (кликабельны, **те же два визуала** §4.6), `ScoreCard`, `CommentCard` ×2, sticky **`GhostButton` / text+arrow** (safe-area-inset-bottom §4.3) — не `PrimaryButton` 328×52.

Иллюстрация скрыта.

**ScoreCard** (кадры pack `media/designer/s01/answer_first.png` … `answer__fourth.png` + рефы). Слева: «ВАШ ВЫБОР» + `choiceSummary` + label. Справа: `+0` / `+3` / `+5` / `+10` Halvar Bold и «БАЛЛОВ» (`+3` — «БАЛЛА»).

| score | label (иконка слева от текста) | SVG | цвет `+N`, «БАЛЛОВ», label |
|------:|--------------------------------|-----|----------------------------|
| 0 | опасное решение | `emergency-icon.svg` | `--error` (`#E25504`) |
| 3 | небезопасное решение | `security-icon.svg` (тот же файл и тот же copy, что у +5) | `--blue-primary` (`--blue-primary-80` допустим) |
| 5 | небезопасное решение | `security-icon.svg` | `--blue-primary` |
| 10 | безопасное решение | **только** `security_green-icon.svg` | `--success` (`#00B893`) |

+0 = опасное; **+3 и +5 = одно и то же** «небезопасное решение» и одна иконка `security-icon.svg`; +10 = безопасное + **только** зелёный щит. Отдельного label «сомнительное решение» **нет**. `+10-icon.svg` **никогда** не ставить ни на цифры, ни на label.

Всегда обе карточки `comment_card`: хакер `01` + SVG-кавычки `kovichki-icon.svg` + текст `hacker`; эксперт `02` без кавычек + общий абзац `expert` + синяя полоса «Как правильно:» (`expertHow`). Тексты **этого** ответа. CTA разбора по центру: «СЛЕДУЮЩИЙ ВОПРОС →».

CTA разбора: **синий текст + `arrow_right.svg`** (`--blue-primary`, `currentColor`), визуал kit «СЛЕДУЮЩИЙ ВОПРОС →» / «Купить билет». **Не** чёрный бар 328×52. **Не** открывает `/menu` (маршрута нет). После разбора — только следующий непройденный или результаты. Прыжок между сценами — чипами.

| Остались непройденные | Подпись кнопки | Куда |
|-----------------------|----------------|------|
| да | **«Следующий вопрос»** | `/play/:id` следующего непройденного в каноническом порядке чипов (§5.5), пропуская уже отвеченные |
| нет (все 10 сыграны) | **«Смотреть результат»** | `/results`; поставить `completedAt`, если ещё не стоит |

Повторный заход в пройденный сценарий — **только** read-only разбор (ответ не меняется). Тот же синий text+arrow: если есть непройденные — «Следующий вопрос» к ближайшему непройденному в том же порядке; если все 10 сыграны — «Смотреть результат».

| Состояние | UI |
|-----------|-----|
| Loading | карточка очков — статичный серый skeleton |
| Empty | нет answer в сессии — показать вопрос, не разбор |
| Error | если answerId не из A–D — считать сессию битой, §2.6 reset |

### 4.8 Результаты `/results` (Figma `2541:4499`)

**Путь:** `/results`  
**Layout:** Full-width max 480px. Sticky CTA / нижние действия — `env(safe-area-inset-bottom)` (§4.3).  
**Компоненты:** промо-карточка, `IndexRing`, блок профиля, `StrengthRiskCards`, аккордеон `CategoryBars`, PDF CTA, share/copy, replay.

**Киоск (только этот экран):** 2 минуты без pointer/key (включая скролл) → reset как «Пройти игру ещё раз» (§5.1 шаг 4) и переход на **`/`**. Любой тап/скролл/клавиша на `/results` перезапускает таймер. На `/play` таймер **не** ставить.

Порядок блоков:

1. Промо-карточка выставки: заголовок «Посетите интерактивную Выставку “Ключ к доверию” в Музее криптографии». Текст: «Игра „Маршрут цифрового дня“ — часть маршрута выставки. Приходите в Музей криптографии.» (плейсхолдер Figma «Какой-то текст…» заменён). Primary «На сайт музея» → `https://cryptography-museum.ru/` `target=_blank` `rel=noopener`.
2. «Ваш индекс цифровой безопасности» + кольцо. Число = сумма баллов. Подпись «из 100» **не** рисуем, как в макете. До 10/10 кольцо всё равно показывает текущую сумму (0–90).
3. Профиль: **монтируется только при `isComplete`**. kicker «профиль», title из таблицы, body из §5.4.
4. Сильные стороны / зоны риска — только при `isComplete`. Всегда **две** карточки сильных (наибольший percent) и **две** зон риска (наименьший percent), без порога ≥80% / <50% — алгоритм §5.4. Карточки с иконкой категории (из kit: security / wifi / smartphone и т.д.; нет иконки — Lucide `Shield` / `Wifi` / `Lock` / `Smartphone` / `Banknote` / `EyeOff`).
5. «Статистика / раскрыть» — **шесть** полосок §2.4, не восемь из скрытого фрейма. Percent = доля баллов посетителя от max категории. До завершения: непройденные сцены категории дают 0 в `earned`, в знаменателе полный max (честная доля).
6. «Скачайте чек-лист безопасности» — генерация PDF на клиенте. На экране списка мемо нет: мемо только в PDF.
7. «Поделитесь своим результатом» — макета сетей нет: **не блокируем MVP**. Две кнопки-круга 40px: (1) системный share (иконка kit arrow или Lucide `Share2`); (2) копировать (Lucide `Copy` → `Check`). Полезная нагрузка: текст + URL + счёт (и имя профиля, если complete). Четыре пустых круга Figma не имитировать пустышками.
8. «Пройти игру ещё раз» — текстовая ссылка как в макете, роль кнопки, сброс run → `/play/s01`.

До 10/10: скрыть пункты 3, 4, 6 (PDF с профилем), 7 можно показать с текстом без профиля («Я уже набрал 18 из 100 в „Маршруте цифрового дня“…» — нет: шаринг **только после complete**, иначе посетитель расшарит незавершённый индекс как итоговый). Решение: share и PDF **только если isComplete**.

| Состояние | UI |
|-----------|-----|
| Loading | кольцо spinner, без фейкового «85» |
| Empty | 0 ответов: «Сначала пройдите хотя бы один тест» + CTA «На главную» → `/` |
| Error | PDF/share fail — короткий тост (§4.3, не модалка), экран результатов и сессия живы; не полноэкранная ошибка |

Текст шаринга (complete):

```
Мой индекс цифровой безопасности: 85 из 100 — Осторожный аналитик.
Маршрут цифрового дня, выставка «Ключ к доверию», Музей криптографии.
https://cryptography-museum.ru/
```

URL в шаринге = `window.location.origin + '/'` (корень игры, не `/results?score=` — счёт в query не ставить, это не ПДн, но провоцирует подделку). Если origin стенда внутренний — в текст всё равно подставлять `https://cryptography-museum.ru/`.

`navigator.share` если есть; иначе только copy. Clipboard: `navigator.clipboard.writeText`. Fallback `prompt` запрещён (выглядит как сбор данных). Fallback: выделить hidden textarea + `document.execCommand('copy')`.

### 4.9 PDF чек-листа

Клиентская генерация (jsPDF): `try/catch`, **одна** повторная попытка, затем blob-download. Повторный сбой — короткий тост, сессия и `/results` остаются. Состав: шапка музей + Бастион + название выставки; индекс; профиль; сильные; риски; памятка из 10 пунктов (по одному выводу эксперта на сцену, формулировка «как правильно» score=10). Без ФИО. Имя файла: `pamiatka-cifrovoj-den.pdf`.

Кадр Figma `2541:4667` «Статистика» — **аккордеон посетителя на `/results`**, не админка. Админ-экранов в файле нет.

### 4.10 Админ: логин `/admin/login`

**Путь:** `/admin/login`  
**Layout:** центрированная карточка.  
**Компоненты:** `HeaderMuseumBastion`, `PasswordField`, `PrimaryButton` «Войти», `GhostButton` «К игре».

Собрать из kit, не ждать Figma. Фон `--bg-primary`. Карточка 328px (desktop 400px) по центру: шапка музей + Бастион; H2 Halvar «Статистика стенда»; caption Bahnschrift 14 `--text-secondary` «Только сотрудники. Прохождения анонимны: без имён и контактов.» Поле пароля: `type=password`, `autocomplete=current-password`, `maxLength=200`. Валидация на клиенте до POST: пустая строка (в т.ч. одни пробелы) → «Войти» disabled, без POST. Длина 1–200 как `AdminSessionRequestSchema`. Нет подсказки сложности пароля и нет «показать пароль» (стенд, плечи сзади).

| Состояние | UI |
|-----------|-----|
| Loading | кнопка disabled «Вход…» на время POST |
| Empty | поле пустое, Войти disabled |
| Error | INVALID_CREDENTIALS — красный текст `--error` под полем, пароль не чистить. Сеть — «Не удалось войти, попробуйте ещё раз» |

Не показывать дефолтный пароль на экране. Не логировать пароль.

### 4.11 Админ: сводка `/admin`

**Путь:** `/admin`  
**Layout:** `max-w-[960px] mx-auto px-4 py-6`.  
**Компоненты:** шапка + «Выйти», `AdminStatCard` ×5, `AdminRunsTable` (desktop) / карточки (mobile), пагинация.

Ширина `max-w-[960px] mx-auto px-4 py-6`. Шапка: музей + Бастион; справа текстовая «Выйти». Title H2 «Сводка прохождений». Caption: «Строки — анонимные runId. ФИО, email, телефон не храним и не показываем.»

Ряд карточек (mobile: вертикальный стек; `md:grid-cols-2 lg:grid-cols-5` gap 12). Каждая: белый фон, бордер `--border`, radius 12, padding 16. Kicker 12 uppercase `--text-secondary`, число Halvar Bold 32 `--black-primary`, подпись Bahnschrift 14 `--text-secondary`.

| Карточка | Поле API | Подпись |
|----------|----------|---------|
| Посещения | `startedCount` | «Старты (пока = завершения)» |
| Завершения | `completedCount` | «Принятые POST /runs» |
| Посещаемость | `attendance` | «= завершения» |
| Средний индекс | `averageIndex` | «из 100» |
| Доля завершений | `completionRate` | «%» — на узком экране пятая карточка во второй ряд |

Таблица (desktop `min-width: 768px`): колонки Завершено / Индекс / Профиль / Run. Профиль — title из §2.4, не raw id. `runId` — первые 8 символов + «…», кнопка copy Lucide `Copy`. Клик по строке → `/admin/runs/:runId`. Пагинация: «Назад» / «Далее», подпись `стр. {page} · {total}`.

Mobile <768: те же поля карточками, не горизонтальный скролл на 5 колонок.

| Состояние | UI |
|-----------|-----|
| Loading | 4 серых карточки 88px + 5 серых строк таблицы |
| Empty | `total === 0`: «Пока нет завершённых прохождений. Сыграйте десятку в этой вкладке (мок) или дождитесь POST на стороне Бастиона.» CTA «Открыть игру» → `/` |
| Error | баннер `--error` «Не удалось загрузить статистику» + «Повторить». 401 — редирект логина |

### 4.12 Админ: карточка run `/admin/runs/:runId`

**Путь:** `/admin/runs/:runId`  
**Layout:** та же сетка 960px.  
**Компоненты:** назад-ссылка, H2, мета, индекс, `AdminRunAnswers` ×10, `CategoryBars`.

Назад-ссылка «← К сводке» → `/admin`. H2 «Прохождение» + моноширинный полный `runId`. Мета: started / completed (`ru-RU`, UTC ISO → локаль). Кольцо или крупное число индекса + title профиля.

Список 10 ответов: номер+chipLabel+title из бандла; `answerId`; баллы `score` / 10; бейдж `--success` «верно» или `--error` «ошибка». Шесть полосок категорий как на `/results`, данные с API.

Нет полей имени, email, телефона, `anonymousId`.

| Состояние | UI |
|-----------|-----|
| Loading | скелетон списка |
| Empty / 404 | «Прохождение не найдено» + «К сводке» |
| Error | баннер + повтор |

---

## 5. Business Logic (Блок 5)

### 5.1 Аутентификации посетителя нет

Ни OAuth, ни JWT, ни cookie для игрока. Шаги анонимной сессии:

1. Первый заход: `crypto.randomUUID()` → `anonymousId` и `runId`, `startedAt=now()`, `answers=[]`, `synced=false`, `completedAt=null`, запись в `mdd.session.v1`.
2. Каждый ответ: append в `answers`, unique по `scenarioId`. Повторная запись того же id игнорируется.
3. После 10-го ответа: `completedAt=now()`, расчёт профиля, `postRun`, при успехе `synced=true`.
4. «Пройти игру ещё раз»: сохранить `anonymousId`, новый `runId`, очистить answers/completed/synced, `startedAt=now()`.
5. Закрытие вкладки не логинит никого. Другой браузер = другой `anonymousId`.

### 5.2 Ответ и баллы

Нельзя пропустить. Один ответ на сценарий. Баллы строго `0/3/5/10` из JSON, клиент **не** пересчитывает смысл ответа. Индекс = сумма `score`. Полный максимум 100.

Частичные очки на главной **не** показывать. На вопросе после ответа — карточка этого шага. Сумма и категории — на `/results`.

### 5.3 Профиль

Функция `profileFromIndex(index: number): ProfileId` вызывается **только** если `answers.length === 10`. Иначе `profileId = null`.

```
0–39 easy_target
40–59 trusting_passerby
60–91 careful_analyst
92–100 digital_ninja
```

Границы включительно как в таблице. 39 → Лёгкая цель, 40 → Доверчивый прохожий, 91 → Осторожный аналитик, 92 → Цифровой ниндзя.

Тела профилей (Figma-дубль плейсхолдера не использовать):

| id | body |
|----|------|
| easy_target | Вы часто соглашаетесь на удобный вариант. Мошеннику достаточно одного звонка, письма или «обновления». Пройдите памятку и начните с кодов из СМС и ссылок. |
| trusting_passerby | Часть угроз вы чувствуете, но дожимаете диалог или отдаёте «чуть-чуть» данных. Держите правило: секреты и разрешения — только по официальному каналу. |
| careful_analyst | Вы уже останавливаетесь на проверке адреса, разрешений и 2FA. Зоны роста — привычки, где экономите секунду. |
| digital_ninja | Вы закрываете типичные атаки дня. Держите планку: уникальные пароли, официальные магазины, недоверие к входящим «банкам». |

### 5.4 Категории, сильные, риски

`earned` = сумма баллов сцен категории, которые **отвечены**. `max` — полный максимум категории (§2.4), даже если сценарий не играли. `percent = round(earned / max * 100)`. Полоски — все **шесть** категорий; процент считается по ответам посетителя к max этой категории.

Канонический порядок категорий (tie-break и «все равны»): **Фишинг, Приватность, Wi-Fi / Сети, Пароли / Аккаунты, Устройства, Финансы** (§2.4).

После **всех 10** карточки (порогов **≥80% / <50% нет** — абсолютный процент не решает, показывать карточку или нет):

1. В отбор входят категории, у которых есть хотя бы один отвеченный сценарий (после 10/10 — все шесть).
2. **Сильные стороны:** всегда **две** категории с наибольшим `percent`.
3. **Зоны риска:** всегда **две** с наименьшим `percent`.
4. Tie-break: выше percent побеждает для сильных (для рисков — ниже percent). При равном percent — кто **раньше** в каноническом списке.
5. Тема **не дублируется** на обоих списках. Если категория попала бы и в сильные, и в риски (одна–две категории с данными, все percent равны): **предпочтение силе, не риску**.
6. Если все шесть percent равны: две сильные — **первые две** канонического порядка (Фишинг, Приватность); две риски — **последние две** (Устройства, Финансы).
7. Если категорий с данными **1**: одна сильная, рисков нет. Если **2**: обе сильные, рисков нет. Если **3–5**: две сильные, затем две риски из **оставшихся** (наименьший percent, тот же tie-break).

Empty только если список после шагов выше пуст: сильные — «Пока нет устойчивых тем — это нормально, откройте памятку.»; риски — «Критических провалов по темам нет. Держите привычки.» После полного маршрута из десяти сцен empty недостижим для сильных и почти недостижим для рисков (риски пусты лишь при 1–2 категориях с данными).

До 10/10 блоки сильных/рисков не рендерятся (иначе профиль «по смыслу» утекает).

### 5.5 Чипы, n/10 и переход с разбора

`n/10` = число **завершённых** тестов в разборе; на активном новом вопросе отображается `completed+1`. Старт и прыжок: посетитель может открыть s10 раньше s02 **чипом** на `/play/:id`. Уход с вопроса без ответа ничего не записывает. Чтобы завершить игру, нужны все 10 ответов.

Канонический порядок чипов / `order` (не порядок фактических ответов в `answers[]`):

1 Дом (`s01`) → 2 Такси (`s02`) → 3 Кафе (`s03`) → 4–6 Работа (`s04`, `s05`, `s06`) → 7 Банк (`s07`) → 8 Почта (`s08`) → 9–10 Дом (`s09`, `s10`).

**Следующий непройденный** после разбора сцены `S`: первый сценарий с `order` строго больше `S.order`, которого нет в `answers`; если таких нет — первый непройденный с начала списка (кольцо). Если непройденных нет — CTA «Смотреть результат» → `/results`. Пример: прыжок чипом на `s07` → после разбора `s08` (если не отвечен), иначе дальше по списку, затем `s01`…`s06`, пропуская уже сыгранные.

CTA главной: 0 ответов — «Пройти квест» → `/play/s01`; частичный run — «Продолжить маршрут» → первый непройденный в этом порядке; complete → replay + результаты на `/`. H1/subtitle главной не менять. «Пройти игру ещё раз» (кнопка) → `/play/s01`, не `/menu`. Idle-киоск на `/results` → `/` (§4.8, US-06).

### 5.6 Повтор и идемпотентность API

Новый `runId` на повтор. Повторный `POST` с тем же `runId` после refresh — ок. Не слать два разных тела с одним `runId`.

### 5.7 Rate limit и CORS

Мок: **N/A** (нет сети).

Ожидания к Бастиону (мы не кодируем): CORS §3.2.6. Лимит: не жёстче **60 POST /runs в минуту с одного IP** (стенд + класс). Тело ≤ 16 KB. Для демо-админки cookie не обязательны. В проде Бастион ставит серверную сессию; не писать IP в публичные отчёты как идентификатор человека.

### 5.8 Контент отдельно от UI

Новая сцена = правка JSON + иллюстрация. Компоненты читают поля, не хардкодят тексты s01–s10 кроме fallback error strings.

### 5.9 Доступность и стенд

Язык `html lang=ru`. Тап-цели ≥ 44px. Не автоиграть звук. Одновременные посетители = разные устройства = разные LS.

**Клавиатура:** Tab и Enter (Space на native `<button>`). Кольцо `:focus-visible` на кнопках (primary, ghost, answer, chips, replay). Тап пальцем кольцо **не** показывает. **Нет** шорткатов A–D и стрелок по ответам/чипам.

**Тост:** немодальная плашка; без focus trap; Escape не закрывает как модалку. `aria-live="polite"` ок.

**Motion:** декоративная анимация не требуется и не блокер приёмки. Скелетоны — статичный серый, не pulse. `@media (prefers-reduced-motion: reduce)`: полоса чипов **прыгает** к текущему (без slide); тост появляется на месте (без slide).

**Хаптика:** `navigator.vibrate` **запрещён**.

**Safe-area:** `viewport-fit=cover` в `index.html`; header `env(safe-area-inset-top)`; sticky CTA `env(safe-area-inset-bottom)` (+ left/right при необходимости). Статус-бар ОС не рисуем. Шапка не под notch; CTA не под home indicator.

Планшет стенда: оператор — «Пройти игру ещё раз». Дополнительно idle **только** `/results`, 2 минуты без pointer/key → reset §5.1 шаг 4 → **`/`**. На `/play` idle-reset нет. Тап/скролл на результатах перезапускает таймер.

### 5.10 Аналитика клиента

Сторонняя (Яндекс.Метрика, GA) **запрещена**. Учёт посетителя — `POST /runs`. Сводка для сотрудников — `GET /stats/summary` и `GET /runs` в `/admin`, те же моки/Бастион.

### 5.11 Админ-сессия и метрики

1. Ге́йт маршрута: `sessionStorage.getItem("mdd.admin") === "1"`. Иначе `/admin/login`.
2. Логин: `POST /admin/session` → при `{ ok: true }` поставить флаг. Не хранить пароль в storage.
3. Выход: удалить флаг. Вкладка закрылась — sessionStorage очищен браузером (новая вкладка = снова логин). Это ок для стенда.
4. Мок GET админа без флага → 401, даже если кто-то открыл URL.
5. `correct` считается только как `score === 10`. Баллы 0/3/5 — «ошибка» (небезопасно), даже если «лучше чем 0».
6. Посещаемость = `completedCount` = число успешно принятых `POST /runs`. Не считать хиты `/` и не читать `localStorage` других устройств.
7. `anonymousId` из POST **не** отдавать в админ-JSON и **не** рисовать.
8. Смена `VITE_ADMIN_PASSWORD` — build-arg образа, дефолт `mdd-admin-stand` только для стенда разработки.

### 5.12 Интеграции

Внешние SaaS курса (Telegram Bot API, ЮKassa, Anthropic/OpenAI, Яндекс.Метрика, GA, Supabase) — **N/A, в поставку не входят.** Ниже — фактические интеграции клиента.

**Сервис:** HTTP API Бастиона (или мок тех же path)  
**Тип:** REST `fetch` из `src/api/client.ts`  
**Что отправляем:** `POST /runs` тело §3.2.1; `POST /admin/session` `{ password }`; GET без тела  
**Что получаем:** JSON §3.2  
**Ошибки:** timeout 8s → локальный INTERNAL; 429 backoff 2s/4s затем стоп; 401 админа → logout; 409 на POST → `synced=true`; не-JSON → INTERNAL. Мок сеть не бросает (N/A retry). CORS в моке N/A.

**Сервис:** Web Share API  
**Тип:** браузерный `navigator.share`  
**Что отправляем:** текст шаринга §4.8  
**Что получаем:** resolved / AbortError  
**Ошибки:** нет API → скрыть кнопку share; AbortError пользователя → молча; прочий fail → тост, copy остаётся.

**Сервис:** Clipboard  
**Тип:** `navigator.clipboard.writeText`, fallback `document.execCommand('copy')`  
**Что отправляем:** тот же текст  
**Что получаем:** успех / отказ  
**Ошибки:** отказ → тост + `<pre>`; `prompt()` запрещён.

**Сервис:** jsPDF (клиент, не внешний HTTP)  
**Тип:** библиотека в бандле  
**Что отправляем:** индекс, профиль, сильные, риски, 10 пунктов score=10  
**Что получаем:** файл `pamiatka-cifrovoj-den.pdf`  
**Ошибки:** exception → try/catch, одна повторная попытка blob-download; если снова fail — короткий тост, сессия и `/results` живы (не полноэкранная ошибка).

**Сервис:** сайт музея  
**Тип:** обычная ссылка `https://cryptography-museum.ru/` `target=_blank` `rel=noopener`  
**Что отправляем / получаем:** ничего в API  
**Ошибки:** сайт недоступен — браузер пользователя; игра не зависит.

### 5.13 Безопасность (шаблон Auth / RLS)

| Пункт шаблона | Статус | Замена |
|---------------|--------|--------|
| Аутентификация Supabase Auth email/password, OAuth | **N/A** | Посетитель: §5.1, без учётки. Админ: демо `POST /admin/session` + `sessionStorage`; прод — httpOnly cookie Бастиона |
| Авторизация RLS | **N/A** | Контракт §3.2: публичный только POST /runs; GET админа 401 без сессии. Мок: флаг `mdd.admin`. UI не рисует `anonymousId` |
| Валидация | Zod | `ScenariosFileSchema` на бандле (fail сборки); `SessionStateSchema` на LS; HTTP-схемы §3.3 на вход/выход адаптера |
| Rate limiting | Мок **N/A** | Бастион: не жёстче 60 POST /runs в мин с IP; GET админа 120/мин; тело ≤ 16 KB |

Запрещено: хранить пароль админа в localStorage; логировать пароль; считать `VITE_ADMIN_PASSWORD` боевой защитой; открывать visitor PII-поля.

---

## 6. Edge Cases (Блок 6)

Формат: ситуация / триггер / поведение. ≥15 сценариев. Не только happy path.

### Сеть и доступность

| # | Ситуация | Триггер | Поведение |
|---|----------|---------|-----------|
| 1 | Офлайн после загрузки бандла | `offline` во время игры | Игра полностью офлайн. `POST /runs` не уходит, `synced=false`, retry на `online` если complete |
| 2 | API 5xx / timeout 8s | любой `fetch` | Посетитель: не сырой JSON, `synced=false`. Админ: баннер + «Повторить» |
| 3 | 429 RATE_LIMITED | частый POST со стенда | backoff 2s затем 4s, затем стоп до следующего `/results`. Мок: N/A |
| 4 | 200 HTML вместо JSON | nginx SPA fallback на path API | `apiFetch` смотрит `content-type`, локальный INTERNAL, не `JSON.parse` наружу |
| 5 | PDF падает в WebView | jsPDF exception | try/catch + одна повторная попытка blob; снова fail → короткий тост, `/results` и сессия живы; не полноэкранная ошибка |
| 6 | Web Share нет | desktop без `navigator.share` | кнопку share скрыть, copy оставить |
| 7 | Clipboard запрещён | Permissions / insecure | тост «Скопируйте текст вручную» + `<pre>`; `prompt()` запрещён |
| 8 | Иллюстрация 404 / другой аспект | битый `/illustrations/s0N.webp` или не kit-ratio | слот фиксированной высоты, `object-fit: contain`, letterbox `--bg-primary`; пустой контейнер если 404, alt `ситуация {title}`, вопрос живой |
| 9 | Halvar не загрузился | сеть шрифтов / блокировка | Arial Narrow / sans-serif; играбельна |

### Данные и состояние

| # | Ситуация | Триггер | Поведение |
|---|----------|---------|-----------|
| 10 | Двойной клик «Ответить» | два pointerdown до commit | вторая обработка no-op, score не меняется |
| 11 | Назад с разбора на вопрос | History Back | разбор, не форма; после ответа `history.replace` того же URL |
| 12 | Reload до «Ответить» | F5 на выбранном варианте | выбор из React state сброшен, кнопка disabled; draft в LS не писать |
| 13 | Reload на разборе | F5 после записи answer | снова разбор, CTA «Следующий вопрос» / «Смотреть результат» |
| 14 | Прямой `/play/s07` | QR/deep link при дырах в маршруте | разрешено, run создаётся/продолжается |
| 14a | Тап чипа на `/play` | непройденный / пройденный | вопрос или read-only разбор; уход без «Ответить» не пишет `answers`; визуал current vs rest (§4.6) |
| 14b | Ручной `/menu` | устаревшая закладка | редирект `/`; экрана нет |
| 14c | Неизвестный SPA path `/foo` | мусорный URL, не `/play/:id`, не `/admin*` | редирект `/` как `/menu`; **без** тоста «Такого теста нет» |
| 15 | Прямой `/results` | новая вкладка того же origin | читает LS; 0 ответов — empty §4.8 |
| 16 | Две вкладки | `storage` event | вторая подтягивает answers; две записи одной сцены запрещены; разные сцены — last-write-wins полной сессии |
| 17 | LS недоступен | Safari private | in-memory + баннер; replay до закрытия вкладки |
| 18 | QuotaExceededError | переполненный origin | как №17 |
| 19 | Битый JSON в LS | ручная правка | backup `mdd.session.v1.bak` + новая сессия, не белый экран |
| 20 | Дырявый `answers` | удалили элемент вручную | считать факт; если length<10 сбросить `completedAt`; `synced=false` |
| 21 | Подделка score в LS | s01 A с score 10 | при чтении score из бандла; в POST уходит пересчитанный |
| 22 | Чужой scenarioId в LS | `s99` | запись выкинуть |
| 23 | 10/10 все нули | все ответы score 0 | профиль «Лёгкая цель», индекс 0; сильные Фишинг+Приватность, риски Устройства+Финансы |
| 24 | 10/10 все десятки | все 10 | «Цифровой ниндзя», 100; те же две/две канона; empty рисков нет |
| 25 | Границы 40 и 92 | сумма ровно | нижняя граница профиля |
| 26 | wifi = 5 баллов | одна сцена категории | полоска 50%; карточки без порога 80/50 |
| 27 | Replay не нажат | следующий человек у планшета | на `/` если complete: primary «Пройти игру ещё раз» + ghost «К результатам» |
| 27a | Киоск idle на `/results` | 2 мин без pointer/key (тап/скролл/клавиша) | тот же reset §5.1 шаг 4, навигация **`/`**; взаимодействие перезапускает таймер |
| 27b | Idle на `/play` | читает вопрос 2+ мин | **не** сбрасывать сессию |
| 28 | Длинный хакер-текст | s0N | скролл карточки; CTA sticky низ + safe-area-inset-bottom |
| 29 | Landscape / overflow чипов | 360 и tablet | горизонтальный scroll; scrollbar hidden (`scrollbar-width: none` / webkit); fade по краям; auto-scroll текущего в вид; полный `chipLabel` без многоточия (s01 «Дом», не «Смартфон» и не «Дом…») |
| 30 | Figma Q1 vs JSON | сверка макета | вёрстка из кадра; тексты/баллы s01 из pack «Утренний «возврат»» |
| 31 | `synced=true` | повтор захода на `/results` | POST не вызывать |
| 32 | Часовой пояс | стенд не UTC | timestamps `toISOString()` UTC; админ `toLocaleString("ru-RU")` |
| 33 | Нет Figma админки | дизайнер не отдал кадры | не блокер; §4.10–4.12 + токены §4.1 (чёрный/синий, без Violet / Gray primary / Blue light) |

### Безопасность

| # | Ситуация | Триггер | Поведение |
|---|----------|---------|-----------|
| 34 | Прямой `/admin` без флага | URL | `/admin/login?next=/admin`; после логина `next` только если начинается с `/admin` |
| 35 | Подделка `mdd.admin=1` | DevTools, пустой API | мок GET проходит (демо). При `VITE_API_BASE_URL` Бастион 401; SPA сбрасывает флаг |
| 36 | Пароль в бандле Vite | view-source | известный риск; не защита; сменить при выкладке; не светить в UI; в README только default for local |
| 37 | Админ и игра одна вкладка | после логина открыть `/` | флаг не трогает `mdd.session.v1` |
| 38 | Не-UUID `/admin/runs/foo` | ручной URL | не звать API; UI 404 «Прохождение не найдено» |
| 39 | `anonymousId` в ответе GET | ошибка Бастиона | UI поле не рендерит |
| 40 | QR на `/results` из чужой истории | шаринг URL | score в query нет; QR выставки = `/`, не `/admin` |
| 41 | Посетитель открывает `/admin` | угадал путь | логин паролем стенда; в шапке игры ссылки нет |

### Лимиты и производительность

| # | Ситуация | Триггер | Поведение |
|---|----------|---------|-----------|
| 42 | `page=0` / `per_page=999` | ручной query | клиент шлёт 1 и 20; мок/сервер на мусор → 400 VALIDATION_ERROR |
| 43 | Мок > 50 run | FIFO | drop oldest; seed ∪ POST этой вкладки; дубль `runId` не плодить |
| 44 | Бастион 100k+ run | загрузка `/admin` | пагинация `per_page=20`; без виртуализации на первой странице (20 строк) |
| 45 | Хвостовой `/` в base URL | `https://api/.../v1/` | trim в `env.ts`, не `//runs` |
| 46 | Тело POST > 16 KB | сломанный клиент | Бастион 400; наш клиент тело фиксированного размера 10 answers |
| 47 | Notch / home indicator | iPhone Safari/WebView | `viewport-fit=cover`; header safe-area-top; sticky CTA safe-area-bottom; OS status bar не рисуем |
| 48 | Focus ring | Tab vs палец | `:focus-visible` на кнопках; тап кольцо не показывает; нет A–D / стрелок |
| 49 | Тост как модалка | PDF/share/`s99` | плашка, без trap, без Escape-modal; `aria-live="polite"` ок |
| 50 | prefers-reduced-motion | OS reduce | чипы jump без slide; тост на месте; скелетоны без pulse; анимации не блокер |
| 51 | `navigator.vibrate` | «Ответить» / смена очков | **не вызывать** |
| 52 | Cookie-баннер | заход на `/` | **не** показывать дисклеймер cookie/localStorage |
| 53 | Главная с частичным run | `answers.length > 0`, не complete | тот же H1/subtitle; CTA «Продолжить маршрут» → первый непройденный |
| 54 | iPhone CTA под индикатором | sticky «Ответить» | padding `env(safe-area-inset-bottom)`; шапка не под notch |

---

---

## Приложение A. Хранение на стороне Бастиона (наш Postgres не поднимаем)

Это **не** схема нашей БД и **не** RLS нашего проекта. SQL/RLS/Supabase из шаблона курса закрыты как **N/A** в §2.0 и §5.13. Здесь только ориентир для handoff, чтобы агент не спроектировал «наш» Postgres.

Бастион **может** хранить `runs(run_id PK, anonymous_id, started_at, completed_at, index, profile_id, answers jsonb, categories jsonb, content_version)`. Индекс по `completed_at`, `profile_id`. **Наш код Postgres не поднимает.** RLS — на их стороне, если они его включают.

Публичное чтение таблицы из браузера посетителя нет. Клиент игры: только `POST /runs`. Клиент админки: `POST /admin/session`, `GET /runs`, `GET /runs/:id`, `GET /stats/summary` через адаптер. Агрегаты считает Бастион (в моке — `src/api/mock.ts`).

Админ-UI **входит** в эту поставку SPA. Хранение и боевой логин — зона Бастиона.

---

## Приложение B. Сборка и Docker (для агентов)

- Dev: `vite --host 127.0.0.1 --port 4174` (не 5173).
- Prod stage: `npm run build` → `dist/`.
- Docker: `nginx:alpine`, `listen 8080`, copy `dist` + `nginx.conf` SPA fallback.
- Build-arg `VITE_API_BASE_URL` (пустая строка = мок) и `VITE_ADMIN_PASSWORD` (пусто = `mdd-admin-stand`).
- README: как собрать, как подменить API, как войти в `/admin`. Этот SPEC — поведение; README — команды.

Конец спецификации v1.10.
