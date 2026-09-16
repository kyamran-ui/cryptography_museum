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
  choiceSummary: z.string().min(8).max(240),
  score: ScoreSchema,
  hacker: z.string().min(12).max(600),
  expert: z.string().min(24).max(900),
  expertHow: z.string().min(12).max(900),
  expertHowEmphasis: z.string().min(4).max(240).optional(),
});

export const ScenarioSchema = z
  .object({
    id: z.string().regex(/^s(0[1-9]|10)$/),
    order: z.number().int().min(1).max(10),
    placeId: PlaceIdSchema,
    chipLabel: z.enum(["Такси", "Кафе", "Работа", "Банк", "Почта", "Дом"]),
    categoryIds: z.array(CategoryIdSchema).min(1).max(3),
    overlayTag: z.literal("social_engineering").optional(),
    theme: z.string(),
    badge: z.string().max(48),
    title: z.string().min(4).max(80),
    situation: z.string().min(40),
    illustration: z.string().regex(/^\/illustrations\/s\d{2}\.(webp|png|svg)$/),
    answers: z.tuple([AnswerSchema, AnswerSchema, AnswerSchema, AnswerSchema]),
  })
  .superRefine((scenario, ctx) => {
    const ids = scenario.answers.map((a) => a.id);
    if (new Set(ids).size !== 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "answers must be A,B,C,D",
      });
    }
    const scores = new Set(scenario.answers.map((a) => a.score));
    if (![0, 3, 5, 10].every((s) => scores.has(s as 0 | 3 | 5 | 10))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "scores must be {0,3,5,10} once each",
      });
    }
  });

export const ScenariosFileSchema = z.object({
  version: z.literal(1),
  exhibition: z.literal("Ключ к доверию"),
  productTitle: z.literal("Маршрут цифрового дня"),
  museumSiteUrl: z.string().url(),
  scenarios: z.array(ScenarioSchema).length(10),
});
