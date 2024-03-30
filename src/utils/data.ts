import {
  createReport,
  findInfoUser,
  findTransactions,
  findUsers,
} from "./db/db";

export const getFromDataTransactions = async (userId: string, page: number) => {
  if (!userId || page < 1) return null;
  const transactions = await findTransactions(userId, page);
  return transactions;
};

export const getFromDataPlayers = async (page: number) => {
  if (page < 1) return null;
  const users = await findUsers(page);
  return users;
};

export const getInfoUser = async (id: string) => {
  if (!id) return null; //?
  const infoUser = await findInfoUser(id);
  return infoUser;
};
export const setReport = (
  title: string,
  description: string,
  userAgent: string,
  pathUrl: string
) => {
  if (!title || !description) return null;
  createReport(title, description, userAgent, pathUrl);
};
