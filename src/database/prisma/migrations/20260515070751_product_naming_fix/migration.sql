/*
  Warnings:

  - You are about to drop the column `subCategory` on the `Product` table. All the data in the column will be lost.
  - Added the required column `subcategory` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Subcategory" AS ENUM ('PHONE', 'LAPTOP', 'TV', 'NOVEL', 'PSYCHOLOGY', 'HEALTH', 'SHIRT', 'JACKET', 'TROUSER');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "subCategory",
ADD COLUMN     "subcategory" "Subcategory" NOT NULL;

-- DropEnum
DROP TYPE "Sub_Category";
