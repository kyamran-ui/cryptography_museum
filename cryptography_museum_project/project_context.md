Cryptography Museum — project context

Exhibition game «Маршрут цифрового дня» / «Ключ к доверию». Hosted on the Cryptography Museum site.

We are frontend. Handoff: React + TypeScript + Vite, static nginx image in Docker, for Бастион. They own backend and Postgres. Same SPA: visitor game and /admin anonymous stats. Content in JSON, visitor session in localStorage, admin demo flag in sessionStorage (mdd.admin=1). API adapter: mock if VITE_API_BASE_URL empty, Bastion fetch when set. Kyamran reviews layout (especially desktop; admin has no Figma frames).

Stack TZ (optional in the museum doc, we take their example): https://docs.google.com/document/d/16-V4E5MRpZKJ1pskg3rA0LbIAzLeSs6O/edit

Play

There is no /menu screen (designers will not deliver a picker mock). One scenario = one question + score. Home: same H1 and subtitle always. CTA «Пройти квест» → /play/s01 if the run has zero answers; «Продолжить маршрут» → the first unanswered scene in chip order if the session has answers and is not complete; if the run is complete, home shows replay + results (no picker). n/10 follows play order. The ten route chips on /play/:id are clickable navigation: unanswered chip → question; answered chip → read-only debrief. Leaving a question without answering records nothing. Completing the game still requires all 10 answers. Chip visuals: current blue, all others gray (SPEC §4.6).

After each answer: debrief immediately — always hacker + expert, copy depends on answer and points. Must answer (no skip). Debrief CTA is «Следующий вопрос» (not «Далее») → next unplayed scene in canonical chip order (1 Дом → 2 Такси → 3 Кафе → 4–6 Работа → 7 Банк → 8 Почта → 9–10 Дом), skipping already answered. After the last unplayed scene’s debrief: «Смотреть результат» → /results. Never go to a menu. Visual: blue text + arrow_right.svg, not the 328×52 black bar (SPEC 1.10 §4.3 / §4.7). Home «Пройти квест» is the black fill bar + arrow_upright.svg.

ScoreCard (Kyamran, SPEC 1.10): points are Halvar Bold type +0 / +3 / +5 / +10 (--font-display), not an icon — never +10-icon.svg. Numeral and «БАЛЛОВ» use the score color (error / blue-primary / success). Label icons: +0 emergency-icon.svg; +3 and +5 security-icon.svg; +10 only security*green-icon.svg. Button arrows: media/icons/arrow*\*.svg with currentColor.

Replay of the whole run («Пройти игру ещё раз») → new runId, keep anonymousId, empty answers → /play/s01.

Before all 10 are done: named profile is hidden. Points for completed stages show only if the visitor opens results. After all 10: index 0–100 + profile.

Route: chips on the question and debrief screens, no separate day map and no /menu.

Scoring and profiles

Points 0 / 3 / 5 / 10. Labels: +0 опасное, +3 and +5 небезопасное (same copy; no «сомнительное»), +10 безопасное. +3 may reuse +5 kit blue.

Ten × 10 = 100 when complete.

Profiles (only after all 10):

0–39 Легкая цель

40–59 Доверчивый прохожий

60–91 Осторожный аналитик

92–100 Цифровой ниндзя

Result bars: six categories from the scenarios doc; each bar is % of that category’s max from the visitor’s answers (Figma 8-bar numbers are mock-only).

Strengths/risks cards (only after all 10; no ≥80% / <50% gate): always the two highest percents as strengths and the two lowest as risks. Never duplicate a topic. If a category would appear on both lists, keep it as a strength. If all six percents are equal: strengths = Фишинг, Приватность; risks = Устройства, Финансы. Tie-break: higher percent wins; if equal, earlier in canonical order: Фишинг, Приватность, Wi-Fi / Сети, Пароли / Аккаунты, Устройства, Финансы.

Results / share / PDF

Results frame 2541:4499. Figma still shows old profile title «Осознанный пользователь» and 8 bars — product uses four levels + 6 categories.

PDF: index, profile, strengths, risk zones, memo.

Keep Бастион in the header (game + admin).

Visitor never sees /admin. No names/email/phone anywhere.

Admin stats in scope: /admin/login, /admin, /admin/runs/:runId. Demo login POST /admin/session vs VITE_ADMIN_PASSWORD (default mdd-admin-stand); not production auth. Bastion must replace with a server session. Attendance = count of completed POST /runs. Reads: GET /runs (paginated { data, meta: { total, page, per_page } }), GET /runs/:id, GET /stats/summary.

Stats/API: mocks until Bastion URL is set. No our Postgres.

Route chips (product = designers)

1 Дом (s01, phone glyph media/icons/mobile_text_2-icon.svg — not «Смартфон»; plot still bank-call / SMS), 2 Такси, 3 Кафе, 4–6 Работа (three different icons: bag / pin / laptop), 7 Банк, 8 Почта, 9–10 Дом (both sofa). Header logos: media/logos/. Hacker/expert rasters: media/hacker-expert/. ScoreCard / arrows: SPEC 1.10 §2.4.

UI

Mobile-first, then a wide desktop/tablet grid (Kyamran tunes it). Decorative animation is not required and not an acceptance blocker. Skeletons are static gray (no pulse). Honor prefers-reduced-motion (chip strip jumps; toast appears in place). No navigator.vibrate.

Platform UX (SPEC 1.10, Kyamran):

Colors: Figma Light theme only; no extra brand colors / WCAG overrides.

Chips: two states (current --blue-primary; all others gray), Figma connecting line, product labels (s01 Дом), always clickable.

Chip overflow: hidden scrollbar (mobile/tablet), edge fade, auto-scroll current into view (not a carousel).

Illustration: fixed-height kit slot, object-fit: contain, letterbox --bg-primary; s06 is one image.

iPhone: viewport-fit=cover; header safe-area-inset-top; sticky CTA safe-area-inset-bottom; do not draw OS status bar.

Unknown path /foo → / (same as /menu); /play/s99 toast + /.

Kiosk: 2 min idle only on /results → replay reset then /; interaction restarts timer; no idle-reset on /play.

Toast: non-modal, no focus trap, no Escape-as-modal; aria-live="polite" ok. PDF: try/catch, one retry, blob; fail → short toast, stay on results.

Keyboard: Tab + Enter, :focus-visible ring; no A–D / arrow shortcuts; finger tap has no ring.

Motion: no required decoration; static gray skeletons; prefers-reduced-motion jumps chips/toast in place. Not an acceptance blocker.

No navigator.vibrate. No cookie/localStorage disclaimer on home.

Home /: same H1 and marketing subtitle always; empty «Пройти квест» → s01; in-progress «Продолжить маршрут» → first unanswered; complete = replay + results.

Admin: max-w-[960px], same tokens (#00001A / #1E53E6). Out of visitor header.

Fonts (SPEC 1.12 §4.2, реф media/debrief-refs/type-scale-frame.png): Halvar files in media/fonts/ (Breitschrift Regular/Bold web, plus Engschrift/Mittelschrift/Stencil). Bahnschrift Light/SemiLight/SemiBold have no files — CSS names + system Bahnschrift if present, else Segoe/Arial (weights may collapse); no @font-face for Bahnschrift/BBH. Debrief quotes are media/icons/kovichki-icon.svg (currentColor), not BBH 64 / Halvar 28. --font-quote is not for that mark.

Hero art s01–s10 complete under media/illustrations/ (s01 png, s02 jpg, s03–s10 png). Question-screen layout does not change — only the illustration file.

Figma

File uBGQGyWe3uSTMMy52r2poX

Ready screens: https://www.figma.com/design/uBGQGyWe3uSTMMy52r2poX/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8?node-id=2541-1961

UI kit: https://www.figma.com/design/uBGQGyWe3uSTMMy52r2poX/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8?node-id=2541-3484

Styles: https://www.figma.com/design/uBGQGyWe3uSTMMy52r2poX/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8?node-id=2541-3931

Results: https://www.figma.com/design/uBGQGyWe3uSTMMy52r2poX/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8?node-id=2541-4499

Statistics (visitor accordion on results, not admin): https://www.figma.com/design/uBGQGyWe3uSTMMy52r2poX/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8?node-id=2541-4667

Admin dashboard: no Figma frames. SPEC §4.10–4.12, black/blue tokens; Kyamran tunes.

Sources

Scenarios doc: https://docs.google.com/document/d/175ybDCGvo1rIgcuas5lMg-rxNHZNtHrNVjA6Yd4ptYg/edit?tab=t.0

Оставшиеся задания

Ждём референсы от дизайнера (не верстаем вслепую):

Поделиться — макет блока шаринга (сети, картинка vs текст+ссылка).

Экрана меню сценариев нет (решение Kyamran): не ждать макет /menu, навигация — чипы на /play/:id.

После появления макетов — вернуть в работу.

Не блокер макета (верстаем по SPEC):

Desktop grid: верстаем wide, Kyamran правит.

Админ /admin — кадров Figma нет; в скоупе frontend, layout из SPEC.
