/*
  Warnings:

  - You are about to drop the column `sub_category` on the `Product` table. All the data in the column will be lost.
  - Added the required column `subcategory` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sub_category",
ADD COLUMN     "subcategory" "Subcategory" NOT NULL;
