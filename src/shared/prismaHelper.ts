import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../database/src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const basePrisma = new PrismaClient({ adapter });

const productPriceMinTrigger = async (variant: {
  productId?: string | null;
}) => {
  if (!variant?.productId) return;

  const product = await basePrisma.product.findUnique({
    where: { id: variant.productId },
    include: { variants: true },
  });

  if (product) {
    if (product.variants.length > 0) {
      const lowestPrice = Math.min(...product.variants.map((v) => v.price));

      await basePrisma.product.update({
        where: { id: product.id },
        data: { priceMin: lowestPrice },
      });
    } else {
      await basePrisma.product.update({
        where: { id: product.id },
        data: { priceMin: 0 },
      });
    }
  }
};

const productSoldIncreaseTrigger = async (variant: {
  productId?: string | null;
}) => {
  if (!variant?.productId) return;

  const product = await basePrisma.product.findUnique({
    where: { id: variant.productId },
    include: { variants: true },
  });

  if (product) {
    await basePrisma.product.update({
      where: { id: product.id },
      data: { sold: product.sold + 1 },
    });
  }
};

const productSoldDecreaseTrigger = async (variant: {
  productId?: string | null;
  sold?: number;
}) => {
  if (!variant?.productId) return;

  const product = await basePrisma.product.findUnique({
    where: { id: variant.productId },
    include: { variants: true },
  });

  if (product) {
    if (variant.sold) {
      await basePrisma.product.update({
        where: { id: product.id },
        data: { sold: product.sold - variant.sold },
      });
    }
  }
};

export const prisma = basePrisma.$extends({
  query: {
    variant: {
      async create({ args, query }) {
        const newVariant = await query(args);
        await productPriceMinTrigger(newVariant);
        return newVariant;
      },

      async createMany({ args, query }) {
        const result = await query(args);
        const inputData = Array.isArray(args.data) ? args.data : [args.data];
        const productIds = [
          ...new Set(inputData.map((v) => v.productId).filter(Boolean)),
        ];
        for (const productId of productIds) {
          await productPriceMinTrigger({ productId });
        }
        return result;
      },

      async update({ args, query }) {
        const updatedVariant = await query(args);
        await productPriceMinTrigger(updatedVariant);
        if (args.data.sold) await productSoldIncreaseTrigger(updatedVariant);
        return updatedVariant;
      },

      async delete({ args, query }) {
        const deletedVariant = await query(args);
        await productPriceMinTrigger(deletedVariant);
        await productSoldDecreaseTrigger(deletedVariant);
        return deletedVariant;
      },
    },
  },
});
