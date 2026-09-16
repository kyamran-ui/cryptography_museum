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
  choiceSummary: string;
  score: Score;
  hacker: string;
  expert: string;
  expertHow: string;
  expertHowEmphasis?: string;
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
  scenarioId: Scenario["id"] | string;
  answerId: AnswerId;
  score: Score;
  answeredAt: string;
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
  percent: number;
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

export interface RunListItem {
  runId: string;
  startedAt: string;
  completedAt: string;
  index: number;
  profileId: ProfileId;
  answeredCount: 10;
}

export interface RunAnswerDetail {
  scenarioId: Scenario["id"] | string;
  answerId: AnswerId;
  score: Score;
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
  startedCount: number;
  completedCount: number;
  attendance: number;
  averageIndex: number;
  completionRate: number;
  profileCounts: Record<ProfileId, number>;
}

export interface PostRunRequest {
  anonymousId: string;
  runId: string;
  startedAt: string;
  completedAt: string;
  index: number;
  profileId: ProfileId;
  answers: Array<{
    scenarioId: Scenario["id"] | string;
    answerId: AnswerId;
    score: Score;
  }>;
  categories: Array<{
    id: CategoryId;
    earned: number;
    max: number;
    percent: number;
  }>;
  contentVersion: 1;
  client: "mdd-web";
}

export interface PostRunResponse {
  ok: true;
  runId: string;
  stored: boolean;
}
