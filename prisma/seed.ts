import prisma from "../src/utils/prisma";
import {
  User,
  Transaction,
  Game,
  GameUser,
  Report,
  Account,
} from "@prisma/client";

import { faker } from "@faker-js/faker";

const sample = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

let allUsers: User[];
let allTransactions: Transaction[];
let allGames: Game[];

(async () => {
  console.log("Adding default data...");
  const usersData = Array.from({ length: 100 }, () => [
    faker.internet.userName(),
    "/jesse.jpg",
    faker.internet.url(),
  ]);

  allUsers = await Promise.all(
    usersData.map(([nickname, image, tradeLink]) =>
      prisma.user.create({
        data: {
          nickname: nickname,
          image: image,
          tradeLink: tradeLink,
        },
      })
    )
  );

  const gamesData = Array.from({ length: 300 }, () => [sample(allUsers).id]);

  allGames = await Promise.all(
    gamesData.map(([winner]) =>
      prisma.game.create({
        data: {
          winnerId: winner,
        },
      })
    )
  );

  const transactionData = Array.from({ length: 50 }, () => [
    "win",
    faker.datatype.number({ min: 100, max: 15000 }).toString(),
  ]);

  allTransactions = await Promise.all(
    transactionData.map(([type, sum]) =>
      prisma.transaction.create({
        data: {
          userId: sample(allUsers).id,
          type: type,
          sum: Number(sum),
          gameId: sample(allGames).id,
        },
      })
    )
  );

  // Create game users
  const gameUsers = await Promise.all(
    allUsers.map((user) =>
      prisma.gameUser.create({
        data: {
          gameId: sample(allGames).id,
          userId: user.id,
        },
      })
    )
  );

  console.log("Adding default data - OK");
})();
