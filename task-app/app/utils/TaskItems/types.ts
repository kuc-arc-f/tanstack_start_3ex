import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(1, "title は必須です"),
});

export type Todo = z.infer<typeof todoSchema>;