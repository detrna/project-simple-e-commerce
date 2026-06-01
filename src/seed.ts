import "dotenv/config";
import {
  Category,
  Shipment,
  Subcategory,
} from "./database/src/generated/prisma/enums";
import { prisma } from "./shared/prismaHelper";

async function seed() {
  const users = [
    { id: "user-1", name: "Budi", email: "budi@mail.com", password: "123" },
    { id: "user-2", name: "Siti", email: "siti@mail.com", password: "123" },
    { id: "user-3", name: "Andi", email: "andi@mail.com", password: "123" },
    { id: "owner-1", name: "Owner", email: "owner@mail.com", password: "123" },
    { id: "admin", name: "Admin", email: "admin@mail.com", password: "123" },
  ];

  const stores = [
    {
      id: "store-1",
      address: "Jakarta",
      email: "store1@mail.com",
      name: "TokoA",
      userId: "owner-1",
    },
    {
      id: "store-2",
      address: "Bandung",
      email: "store2@mail.com",
      name: "TokoB",
      userId: "user-2",
    },
    {
      id: "store-3",
      address: "Surabaya",
      email: "store3@mail.com",
      name: "TokoC",
      userId: "user-3",
    },
  ];

  const products = [
    {
      id: "product-1",
      name: "iPhone",
      category: Category.ELECTRONICS,
      sub_category: Subcategory.PHONE,
      storeId: "store-1",
    },
    {
      id: "product-2",
      name: "MacBook",
      category: Category.ELECTRONICS,
      sub_category: Subcategory.LAPTOP,
      storeId: "store-1",
    },
    {
      id: "product-3",
      name: "T-Shirt",
      category: Category.FASHION,
      sub_category: Subcategory.SHIRT,
      storeId: "store-2",
    },
  ];

  const variants = [
    {
      id: "variant-1",
      name: "iPhone 128GB",
      price: 15000000,
      stock: 5,
      productId: "product-1",
    },
    {
      id: "variant-2",
      name: "MacBook M2",
      price: 25000000,
      stock: 3,
      productId: "product-2",
    },
    {
      id: "variant-3",
      name: "T-Shirt L",
      price: 150000,
      stock: 20,
      productId: "product-3",
    },
  ];

  const carts = [
    { id: "cart-1", userId: "user-1" },
    { id: "cart-2", userId: "user-2" },
    { id: "cart-3", userId: "user-3" },
  ];

  const cartVariants = [
    { id: "cv-1", cartId: "cart-1", variantId: "variant-1", quantity: 1 },
    { id: "cv-2", cartId: "cart-2", variantId: "variant-2", quantity: 2 },
    { id: "cv-3", cartId: "cart-3", variantId: "variant-3", quantity: 3 },
  ];

  const transactions = [{ id: "trx-1" }, { id: "trx-2" }, { id: "trx-3" }];

  const orders = [
    {
      id: "order-1",
      quantity: 1,
      fee: 10000,
      userId: "user-1",
      variantId: "variant-1",
      transactionId: "trx-1",
      payment: false,
      shipment: Shipment.WAITING_OWNER,
    },
    {
      id: "order-2",
      quantity: 2,
      fee: 15000,
      userId: "user-2",
      variantId: "variant-2",
      transactionId: "trx-2",
      payment: true,
      shipment: Shipment.ON_THE_WAY,
    },
    {
      id: "order-3",
      quantity: 1,
      fee: 8000,
      userId: "user-3",
      variantId: "variant-3",
      transactionId: "trx-3",
      payment: false,
      shipment: Shipment.WAITING_COURIER,
    },
  ];

  const reviews = [
    { id: "review-1", score: 5, content: "Excellent!", orderId: "order-1" },
    { id: "review-2", score: 4, content: "Good product", orderId: "order-2" },
    { id: "review-3", score: 3, content: "Average", orderId: "order-3" },
  ];

  try {
    await prisma.$transaction(async (tx) => {
      await tx.user.createMany({ data: users, skipDuplicates: true });
      await tx.store.createMany({ data: stores, skipDuplicates: true });
      await tx.product.createMany({ data: products, skipDuplicates: true });
      await tx.variant.createMany({ data: variants, skipDuplicates: true });
      await tx.cart.createMany({ data: carts, skipDuplicates: true });
      await tx.cart_Variant.createMany({
        data: cartVariants,
        skipDuplicates: true,
      });
      await tx.transaction.createMany({
        data: transactions,
        skipDuplicates: true,
      });
      await tx.order.createMany({ data: orders, skipDuplicates: true });
      await tx.review.createMany({ data: reviews, skipDuplicates: true });
    });

    console.log("✅ Seed success");
  } catch (error) {
    console.error("❌ Seed failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
