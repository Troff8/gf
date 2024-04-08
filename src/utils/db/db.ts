import prisma from "../prisma";

const ITEM_PER_PAGE = 8;

export const findTransactions = async (userId: string, page: number) => {
  try {
    const offset = (page - 1) * ITEM_PER_PAGE;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        transactions: {
          skip: offset,
          take: ITEM_PER_PAGE,
        },
      },
    });
    const totalCount = await prisma.transaction.count({
      where: { userId },
    });
    if (!user || !totalCount) {
      return { transactions: [], totalCount: 0 };
    }
    return { transactions: user.transactions, totalCount: totalCount };
  } catch (error) {
    throw new Error("Error search transactions");
  }
};

export const findUsers = async (page: number) => {
  const offset = (page - 1) * ITEM_PER_PAGE;
  const users = await prisma.user.findMany({
    skip: offset,
    take: ITEM_PER_PAGE,
    include: {
      Game: {
        include: {
          transactions: true,
        },
      },
    },
  });
  const totalCount = await prisma.user.count({});

  const resUsers: {
    id: string;
    active: boolean;
    nickname: string | null;
    image: string | null;
    tradeLink: string | null;
    createdAt: Date;
    totalGames: number;
    winning: number;
  }[] = [];
  users.map((user) => {
    const totalGames = user.Game.length;
    let winning = 0;
    user.Game.forEach((game) => {
      if (game.winnerId === user.id) {
        game.transactions.forEach((transaction) => {
          winning += +transaction.sum;
        });
      }
    });
    resUsers.push({
      id: user.id,
      active: user.active,
      nickname: user.nickname,
      image: user.image,
      tradeLink: user.tradeLink,
      createdAt: user.createdAt,
      totalGames: totalGames,
      winning: winning,
    });
  });
  if (!users || !totalCount) {
    return null;
  }

  return { users: resUsers, totalCount: totalCount };
};

export const findInfoUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        Game: {
          include: {
            transactions: true,
          },
        },
        transactions: {},
      },
    });

    if (!user) return null;

    const totalGames = user.Game.length;
    let winning = 0;
    user.Game.forEach((game) => {
      if (game.winnerId === user.id) {
        game.transactions.forEach((transaction) => {
          winning += +transaction.sum;
        });
      }
    });

    return {
      ...user,
      totalGames: totalGames,
      winning: winning,
      transactions: user.transactions,
    };
  } catch (error) {
    throw new Error("Error search infoUser");
  }
};
export const createReport = async (
  title: string,
  description: string,
  userAgent: string,
  pathUrl: string
) => {
  try {
    await prisma.report.create({
      data: {
        title: title,
        description: description,
        userAgent: userAgent,
        href: pathUrl,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Error create reports");
  }
};
export const findGF = async () => {
  try {
    const players = await prisma.user.count({});
    const games = await prisma.game.count({});
    const totalWinnings = await prisma.transaction.aggregate({
      where: {
        type: "win",
      },
      _sum: {
        sum: true,
      },
    });
    if (totalWinnings._sum.sum === null)
      return { players, games, totalWinnings: 0 };

    return { players, games, totalWinnings: totalWinnings._sum.sum };
  } catch (error) {
    console.log(error);
    throw new Error("Error search GF data");
  }
};

export const findLastWinner = async () => {
  try {
    const lastGame = await prisma.game.findFirst({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        winnerId: true,
      },
    });
    if (lastGame) {
      const transactionsSum = await prisma.transaction.aggregate({
        where: { gameId: lastGame.id },
        _sum: { sum: true },
      });
      if (lastGame.winnerId) {
        const user = await prisma.user.findUnique({
          where: {
            id: lastGame.winnerId,
          },
          select: {
            nickname: true,
            image: true,
          },
        });
        const sum = transactionsSum._sum.sum || 0;
        return { user, sum };
      }
    }

    return null;
  } catch (error) {
    throw new Error("Error search GF data");
  }
};
export const findBiggestWin = async () => {
  const gamesWithTransactionSums = await prisma.game.findMany({
    include: {
      transactions: true,
    },
  });

  let maxSum = 0;
  let gameWithMaxSum = null;

  for (const game of gamesWithTransactionSums) {
    const sum = game.transactions.reduce(
      (total, transaction) => total + transaction.sum,
      0
    );
    if (sum > maxSum) {
      maxSum = sum;
      gameWithMaxSum = game;
    }
  }
  if (gameWithMaxSum && gameWithMaxSum.winnerId) {
    const user = await prisma.user.findUnique({
      where: {
        id: gameWithMaxSum.winnerId,
      },
      select: {
        nickname: true,
        image: true,
      },
    });

    return { ...user, maxSum };
  }
  return null;
};
