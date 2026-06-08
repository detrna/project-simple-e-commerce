import "dotenv/config";
import { prisma } from "../../../shared/prismaHelper";
import seed from "./seed-data";

export async function dbSeed() {
  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.createMany({ data: seed.users, skipDuplicates: true });
      await tx.store.createMany({ data: seed.stores, skipDuplicates: true });
      await tx.product.createMany({
        data: seed.products,
        skipDuplicates: true,
      });
      await tx.variant.createMany({
        data: seed.variants,
        skipDuplicates: true,
      });
      await tx.cart.createMany({ data: seed.carts, skipDuplicates: true });
      await tx.cart_Variant.createMany({
        data: seed.cartVariants,
        skipDuplicates: true,
      });
      await tx.transaction.createMany({
        data: seed.transactions,
        skipDuplicates: true,
      });
      await tx.order.createMany({ data: seed.orders, skipDuplicates: true });
      await tx.review.createMany({ data: seed.reviews, skipDuplicates: true });
    });

    console.log("✅ Seed success");
  } catch (error) {
    console.error("❌ Seed failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

dbSeed();
