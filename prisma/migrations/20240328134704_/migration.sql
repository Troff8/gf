/*
  Warnings:

  - Added the required column `transactionsId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "transactionsId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_transactionsId_fkey" FOREIGN KEY ("transactionsId") REFERENCES "Transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
