import { basePrisma, prisma } from "../../shared/prismaHelper";

export const productPriceMinTrigger = async (variant: {
  productId?: string | null;
}) => {
  console.log("returned");
  if (!variant?.productId) return;

  const product = await prisma.product.findUnique({
    where: { id: variant.productId },
    include: { variants: true },
  });

  console.log("test");

  if (product) {
    if (product.variants.length > 0) {
      const lowestPrice = Math.min(...product.variants.map((v) => v.price));

      console.log(lowestPrice);

      await prisma.product.update({
        where: { id: product.id },
        data: { priceMin: lowestPrice },
      });
    } else {
      console.log("huh");
      await prisma.product.update({
        where: { id: product.id },
        data: { priceMin: 0 },
      });
    }
  }
};
