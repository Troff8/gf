import { prisma } from "../src/utils/prisma";

const usersData = [
  {
    nickname: "Jesse Pinkman",
    image: "/avatar.jpg",
    winning: 147,
    games: 10,
    tradeLink: "steam.com",
  },
  {
    nickname: "Walter White litle",
    image: "/avatar2.jpg",
    winning: 300,
    games: 20,
    tradeLink: "steam.com",
  },
  {
    nickname: "Saul Goodman",
    image: "/avatar2.jpg",
    winning: 658,
    games: 72,
    tradeLink: "steam.com",
  },
  {
    nickname: "Jack Jowhe",
    image: "/avatar2.jpg",
    winning: 6458,
    games: 2,
    tradeLink: "steam.com",
  },
  {
    nickname: "Jesse Pinkman",
    image: "/avatar.jpg",
    winning: 147,
    games: 10,
    tradeLink: "steam.com",
  },
  {
    nickname: "Walter White litle",
    image: "/avatar2.jpg",
    winning: 300,
    games: 20,
    tradeLink: "steam.com",
  },
  {
    nickname: "Saul Goodman",
    image: "/avatar2.jpg",
    winning: 658,
    games: 72,
    tradeLink: "steam.com",
  },
  {
    nickname: "Jack Jowhe",
    image: "/avatar2.jpg",
    winning: 6458,
    games: 2,
    tradeLink: "steam.com",
  },
  {
    nickname: "Jesse Pinkman",
    image: "/avatar.jpg",
    winning: 147,
    games: 10,
    tradeLink: "steam.com",
  },
  {
    nickname: "Walter White litle",
    image: "/avatar2.jpg",
    winning: 300,
    games: 20,
    tradeLink: "steam.com",
  },
  {
    nickname: "Saul Goodman",
    image: "/avatar2.jpg",
    winning: 658,
    games: 72,
    tradeLink: "steam.com",
  },
  {
    nickname: "Jack Jowhe",
    image: "/avatar2.jpg",
    winning: 6458,
    games: 2,
    tradeLink: "steam.com",
  },
  // Добавьте других пользователей, если нужно
];

(async () => {
  console.log("Adding default data...");
  await Promise.all(
    usersData.map(async (userData) => {
      await prisma.user.create({
        data: userData,
      });
    })
  );

  const user = await prisma.user.create({
    data: {
      nickname: "Walter White",
      image: "/avatar.jpg",
      winning: 50,
      games: 15,
      tradeLink: "steam.com",
    },
  });
  const userId = user.id;
  await Promise.all([
    prisma.transactions.createMany({
      data: [
        {
          userId: userId,
          type: "bid",
          sum: "777",
        },
        {
          userId: userId,
          type: "conclusion",
          sum: "1231",
        },
        {
          userId: userId,
          type: "purchase",
          sum: "1231",
        },
        {
          userId: userId,
          type: "bid",
          sum: "74237",
        },
        {
          userId: userId,
          type: "conclusion",
          sum: "432423",
        },
        {
          userId: userId,
          type: "purchase",
          sum: "2342",
        },
        {
          userId: userId,
          type: "bid",
          sum: "43242",
        },
        {
          userId: userId,
          type: "conclusion",
          sum: "867",
        },
        {
          userId: userId,
          type: "purchase",
          sum: "34",
        },
        {
          userId: userId,
          type: "bid",
          sum: "74237",
        },
        {
          userId: userId,
          type: "conclusion",
          sum: "432423",
        },
        {
          userId: userId,
          type: "purchase",
          sum: "2342",
        },
        {
          userId: userId,
          type: "bid",
          sum: "43242",
        },
        {
          userId: userId,
          type: "conclusion",
          sum: "867",
        },
      ].reverse(),
    }),
  ]);

  console.log("Adding default data - OK");
})();
