/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the `Cart_Variant_User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart_Variant_User" DROP CONSTRAINT "Cart_Variant_User_cartId_fkey";

-- DropForeignKey
ALTER TABLE "Cart_Variant_User" DROP CONSTRAINT "Cart_Variant_User_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cart_Variant_User" DROP CONSTRAINT "Cart_Variant_User_variantId_fkey";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "location",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Variant" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Cart_Variant_User";

-- CreateTable
CREATE TABLE "Cart_Variant" (
    "id" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Cart_Variant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Variant" ADD CONSTRAINT "Cart_Variant_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart_Variant" ADD CONSTRAINT "Cart_Variant_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
