import "dotenv/config";

import { SeedData } from "./seed-data";
import { prisma } from "../../shared/prismaHelper";

async function main() {
  console.log("🌱 Seeding database...");

  const data = SeedData.get();

  await prisma.user.createMany({
    data: data.users,
    skipDuplicates: true,
  });

  await prisma.store.createMany({
    data: data.stores,
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: data.products,
    skipDuplicates: true,
  });

  await prisma.variant.createMany({
    data: data.variants,
    skipDuplicates: true,
  });

  await prisma.cart.createMany({
    data: data.carts,
    skipDuplicates: true,
  });

  await prisma.cart_Variant.createMany({
    data: data.cartVariants,
    skipDuplicates: true,
  });

  await prisma.transaction.createMany({
    data: data.transactions,
    skipDuplicates: true,
  });

  await prisma.order.createMany({
    data: data.orders,
    skipDuplicates: true,
  });

  await prisma.review.createMany({
    data: data.reviews,
    skipDuplicates: true,
  });

  console.log("✅ Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
