import { z } from "zod";

export const createLinkTradeSchema = z.object({
  link: z.string(),
});

export type CreateLinkTrade = z.infer<typeof createLinkTradeSchema>;
