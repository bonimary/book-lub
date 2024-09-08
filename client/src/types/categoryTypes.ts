import { z } from 'zod';

export const categorySchema = z.object({
  name: z.string(),
  id: z.number(),
});

export type CategoryType = z.infer<typeof categorySchema>;
