import {
  createReport,
  findGF,
  findLastWinner,
  findInfoUser,
  findTransactions,
  findUsers,
  findBiggestWin,
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

export const getFromInfoUser = async (id: string) => {
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
export const getFromDataGF = async () => {
  const data = await findGF();
  return data;
};
export const getFromDataGFLastWinner = async () => {
  const data = await findLastWinner();
  return data;
};
export const getFromDataGFBiggestWin = async () => {
  const data = await findBiggestWin();
  return data;
};
