import { z } from "zod";

export const todoSchema = z.object({
  name: z.string().min(1, "name は必須です"),
});

export type Todo = z.infer<typeof todoSchema>;
