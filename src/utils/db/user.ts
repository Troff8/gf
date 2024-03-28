import { prisma } from "../prisma";

export const findTransactions = async (userId: string) => {
  if (!userId) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      transactions: true,
    },
  });
  if (!user) {
    return null;
  }
  return user.transactions;
};

export const findAllUsers = async () => {
  const users = await prisma.user.findMany({});
  if (!users) {
    return null;
  }
  return users;
};
