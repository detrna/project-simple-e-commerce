/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `subcategoryId` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `Subcategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Subcategory` table. All the data in the column will be lost.
  - Added the required column `subcategoryName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_subcategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "subcategoryId",
ADD COLUMN     "subcategoryName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_pkey",
DROP COLUMN "categoryId",
DROP COLUMN "id",
ADD COLUMN     "categoryName" TEXT NOT NULL,
ADD CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("name");

-- CreateIndex
CREATE INDEX "Category_name_idx" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Subcategory_name_idx" ON "Subcategory"("name");

-- CreateIndex
CREATE INDEX "Subcategory_categoryName_idx" ON "Subcategory"("categoryName");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subcategoryName_fkey" FOREIGN KEY ("subcategoryName") REFERENCES "Subcategory"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE CASCADE ON UPDATE CASCADE;
