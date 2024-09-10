import { z } from 'zod';
import { UserSchema } from './userTypes';

export const bookSchema = z.object({
  id: z.number(),
  title: z.string(),
  autor: z.string(),
  description: z.string(),
  imge: z.string(),
  pages: z.number(),
  language: z.string(),
  categoryId: z.number(),
  user: UserSchema,
});

export type BookType = z.infer<typeof bookSchema>;

export const bookAddSchema = z.object({
  title: z.string(),
  autor: z.string(),
  description: z.string(),
  imge: z.string(),
  pages: z.number(),
  language: z.string(),
  categoryId: z.number(),
});

export type BookAddType = z.infer<typeof bookAddSchema>;
