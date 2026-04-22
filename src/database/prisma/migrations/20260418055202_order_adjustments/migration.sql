/*
  Warnings:

  - The `shipment` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Shipment" AS ENUM ('WAITING_OWNER', 'WAITING_COURIER', 'ON_THE_WAY', 'DELIVERED');

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "payment" SET DEFAULT false,
DROP COLUMN "shipment",
ADD COLUMN     "shipment" "Shipment" NOT NULL DEFAULT 'WAITING_OWNER';
