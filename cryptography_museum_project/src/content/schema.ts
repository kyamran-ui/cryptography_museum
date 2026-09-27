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
  outcome: z.string().min(12).max(900),
  risk: z.string().min(12).max(900),
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
    illustration: z.enum([
      "media/illustrations/s01-home.png",
      "media/illustrations/s02-taxi.png",
      "media/illustrations/s03-cafe.png",
      "media/illustrations/s04-work.png",
      "media/illustrations/s05-work.png",
      "media/illustrations/s06-work.png",
      "media/illustrations/s07-bank.png",
      "media/illustrations/s08-post.png",
      "media/illustrations/s09-home.png",
      "media/illustrations/s10-home.png",
    ]),
    howRight: z.string().min(12).max(900),
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
    if (!scenario.illustration.startsWith(`media/illustrations/${scenario.id}-`)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "illustration file must match scenario id",
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
