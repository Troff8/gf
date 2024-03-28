import { prisma } from "../src/utils/prisma";

(async () => {
  console.log("Adding default data...");

  await Promise.all([
    prisma.user.create({
      data: {
        nickname: "Jesse Pinkman",
        image: "/avatar.jpg",
        winning: 147,
        games: 10,
        tradeLink: "steam.com",
      },
    }),
    prisma.transactions.createMany({
      data: [
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "purchase",
          sum: "1231",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "bid",
          sum: "777",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "conclusion",
          sum: "777",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "purchase",
          sum: "1231",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "bid",
          sum: "777",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "conclusion",
          sum: "777",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "purchase",
          sum: "1231",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "bid",
          sum: "777",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "conclusion",
          sum: "777",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "purchase",
          sum: "1231",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "bid",
          sum: "777",
        },
        {
          userId: "1",
          date: new Date(0).toISOString(),
          type: "conclusion",
          sum: "777",
        },
      ].reverse(),
    }),
  ]);

  console.log("Adding default data - OK");
})();
