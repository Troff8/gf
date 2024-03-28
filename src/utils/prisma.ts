import { PrismaClient } from "@prisma/client";
declare global {
  /* eslint-disable no-var */
  // eslint-disable-next-line vars-on-top
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["warn", "error"],
    errorFormat: "pretty",
  });

// global.prisma = prisma;
