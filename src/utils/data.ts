import { findTransactions, findUsers } from "./db/user";

export const getFromDataTransactions = async (userId: string, page: number) => {
  if (!userId || page < 1) {
    return null;
  }
  const transactions = await findTransactions(userId, page);
  return transactions;
};
export const getFromDataPlayers = async (page: number) => {
  if (page < 1) {
    return null;
  }
  const users = await findUsers(page);
  return users;
};
