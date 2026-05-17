/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Order_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Store_userId_key" ON "Store"("userId");
