import { z } from "zod";
import { AnswerIdSchema, ScoreSchema } from "@/content/schema";

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
