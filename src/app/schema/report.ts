import { z } from "zod";

export const createReportSchema = z.object({
  title: z.string().min(3, { message: "Required" }),
  description: z.string().min(3, { message: "Required" }),
  href: z.string().optional(),
});

export type CreateReport = z.infer<typeof createReportSchema>;
