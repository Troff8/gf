import { prisma } from "../prisma";

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
    const totalCount = await prisma.transactions.count({
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
  });
  const totalCount = await prisma.user.count({});
  if (!users || !totalCount) {
    return { users: [], totalCount: 0 };
  }
  return { users: users, totalCount: totalCount };
};
export const findInfoUser = async (id: string) => {
  try {
    const info = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return info;
  } catch (error) {
    throw new Error("Error search infoUser");
  }
};
