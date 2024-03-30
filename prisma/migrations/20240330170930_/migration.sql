/*
  Warnings:

  - You are about to drop the column `transactionsId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `games` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `winning` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_transactionsId_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_userId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "transactionsId",
ADD COLUMN     "winnerId" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "games",
DROP COLUMN "winning";

-- DropTable
DROP TABLE "Transactions";

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "type" TEXT NOT NULL,
    "sum" TEXT NOT NULL,
    "gameId" TEXT,
    "createdAt" TIMESTAMP NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameUser" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GameUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameUser" ADD CONSTRAINT "GameUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
