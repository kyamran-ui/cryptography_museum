import { z } from "zod";
import { AnswerIdSchema, CategoryIdSchema, ScoreSchema } from "@/content/schema";

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
