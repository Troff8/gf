import prisma from "../src/utils/prisma";
import { faker } from "@faker-js/faker";

const usersData = Array.from({ length: 100 }, () => ({
  nickname: faker.internet.userName(),
  image: "/jesse.jpg",
  winning: faker.datatype.number({ min: 20, max: 10000 }),
  games: faker.datatype.number({ min: 20, max: 10000 }),
  tradeLink: "",
}));
(async () => {
  console.log("Adding default data...");
  const users = await Promise.all(
    usersData.map(async (userData) => {
      return prisma.user.create({
        data: userData,
      });
    })
  );

  await Promise.all(
    users.map(async (user) => {
      const userId = user.id;
      return prisma.transactions.createMany({
        data: [
          {
            userId: userId,
            type: "bid",
            sum: faker.datatype.number({ min: 20, max: 10000 }).toString(),
          },
          // Добавьте остальные транзакции здесь
        ],
      });
    })
  );

  console.log("Adding default data - OK");
})();
