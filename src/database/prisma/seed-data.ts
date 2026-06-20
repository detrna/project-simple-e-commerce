import { Shipment } from "../src/generated/prisma/enums";

export class SeedData {
  // =========================
  // CACHE (singleton)
  // =========================
  private static instance: ReturnType<typeof SeedData.generate> | null = null;

  // =========================
  // PUBLIC ACCESS
  // =========================
  static get() {
    if (!this.instance) {
      this.instance = this.generate();
    }
    return this.instance;
  }

  // =========================
  // RESET (for tests)
  // =========================
  static reset() {
    this.instance = null;
  }

  // =========================
  // GENERATOR (runs once)
  // =========================
  private static generate() {
    const USER_COUNT = 50;
    const STORE_COUNT = 20;
    const ORDER_COUNT = 200;
    const TRANSACTION_COUNT = 80;

    const range = (n: number) => [...Array(n).keys()];
    const pick = <T>(arr: T[], i: number) => arr[i % arr.length];

    const users = [
      ...range(USER_COUNT).map((i) => ({
        id: `user-${i + 1}`,
        name: `User ${i + 1}`,
        email: `user${i + 1}@mail.com`,
        password: "123",
      })),
      {
        id: "hub-user",
        name: "Hub User",
        email: "hub@mail.com",
        password: "123",
      },
    ];

    const stores = [
      ...range(STORE_COUNT).map((i) => ({
        id: `store-${i + 1}`,
        name: `Store ${i + 1}`,
        email: `store${i + 1}@mail.com`,
        address: `City ${i + 1}`,
        userId: `user-${(i % USER_COUNT) + 1}`,
      })),
      {
        id: "main-store",
        name: "Main Store",
        email: "main@mail.com",
        address: "Jakarta",
        userId: "hub-user",
      },
    ];

    const categories = [
      { name: "ELECTRONICS" },
      { name: "BOOKS" },
      { name: "FASHION" },
    ];

    const subcategories = [
      { name: "PHONE", categoryName: "ELECTRONICS" },
      { name: "LAPTOP", categoryName: "ELECTRONICS" },
      { name: "TV", categoryName: "ELECTRONICS" },
      { name: "NOVEL", categoryName: "BOOKS" },
      { name: "PSYCHOLOGY", categoryName: "BOOKS" },
      { name: "HEALTH", categoryName: "BOOKS" },
      { name: "SHIRT", categoryName: "FASHION" },
      { name: "JACKET", categoryName: "FASHION" },
      { name: "TROUSER", categoryName: "FASHION" },
    ];

    const products = [
      {
        id: "product-1",
        name: "iPhone 15",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-2",
        name: "MacBook M2",
        subcategoryName: "LAPTOP",
        storeId: "main-store",
      },
      {
        id: "product-3",
        name: "T-Shirt Basic",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-4",
        name: "Samsung S24",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-5",
        name: "Dell XPS 13",
        subcategoryName: "LAPTOP",
        storeId: "main-store",
      },
      {
        id: "product-6",
        name: "Psychology Book",
        subcategoryName: "PSYCHOLOGY",
        storeId: "main-store",
      },
      {
        id: "product-7",
        name: "Winter Jacket",
        subcategoryName: "JACKET",
        storeId: "main-store",
      },
      {
        id: "product-8",
        name: "Formal Shirt",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-9",
        name: "Noise-Cancelling Headphones",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-10",
        name: "Running Shoes",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-11",
        name: "Smartwatch",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-12",
        name: "Travel Backpack",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-13",
        name: "Yoga Mat",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-14",
        name: "Coffee Maker",
        subcategoryName: "TV",
        storeId: "main-store",
      },
      {
        id: "product-15",
        name: "Bluetooth Speaker",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-16",
        name: "Leather Wallet",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-17",
        name: "Desk Lamp",
        subcategoryName: "TV",
        storeId: "main-store",
      },
      {
        id: "product-18",
        name: "Graphic Novel",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-19",
        name: "Camping Tent",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-20",
        name: "Wireless Charger",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-21",
        name: "Gaming Mouse",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-22",
        name: "Wireless Earbuds",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-23",
        name: "Fantasy Novel",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-24",
        name: "Workout Shorts",
        subcategoryName: "TROUSER",
        storeId: "main-store",
      },
      {
        id: "product-25",
        name: "Action Camera",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-26",
        name: "Cookbook",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-27",
        name: "Denim Jacket",
        subcategoryName: "JACKET",
        storeId: "main-store",
      },
      {
        id: "product-28",
        name: "Graphic Tee",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-29",
        name: "4K Monitor",
        subcategoryName: "TV",
        storeId: "main-store",
      },
      {
        id: "product-30",
        name: "Study Planner",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-31",
        name: "Wireless Keyboard",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-32",
        name: "Running Socks",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-33",
        name: "Smart Home Hub",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-34",
        name: "Meditation Journal",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-35",
        name: "Leather Belt",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-36",
        name: "Portable SSD",
        subcategoryName: "LAPTOP",
        storeId: "main-store",
      },
      {
        id: "product-37",
        name: "Children Storybook",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-38",
        name: "Casual Polo",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-39",
        name: "Portable Projector",
        subcategoryName: "TV",
        storeId: "main-store",
      },
      {
        id: "product-40",
        name: "Nutrition Handbook",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-41",
        name: "Bluetooth Headset",
        subcategoryName: "PHONE",
        storeId: "main-store",
      },
      {
        id: "product-42",
        name: "Office Shirt",
        subcategoryName: "SHIRT",
        storeId: "main-store",
      },
      {
        id: "product-43",
        name: "Self-Help Guide",
        subcategoryName: "NOVEL",
        storeId: "main-store",
      },
      {
        id: "product-44",
        name: "Noise Machine",
        subcategoryName: "TV",
        storeId: "main-store",
      },
      {
        id: "product-45",
        name: "Denim Shorts",
        subcategoryName: "TROUSER",
        storeId: "main-store",
      },
    ];

    const variants: any[] = [];

    for (const p of products) {
      const count = 1 + Math.floor(Math.random() * 4);

      for (let i = 0; i < count; i++) {
        variants.push({
          id: `variant-${p.id}-${i}`,
          name: `${p.name} Variant ${i + 1}`,
          price: 100000 + i * 50000,
          stock: 10 + i,
          productId: p.id,
        });
      }
    }

    const carts = range(10).map((i) => ({
      id: `cart-${i + 1}`,
      userId: `user-${(i % USER_COUNT) + 1}`,
    }));

    const cartVariants = range(40).map((i) => ({
      id: `cv-${i + 1}`,
      cartId: `cart-${(i % 10) + 1}`,
      variantId: `variant-product-${(i % 8) + 1}-0`,
      quantity: 1 + (i % 3),
    }));

    const transactions = range(TRANSACTION_COUNT).map((i) => ({
      id: `trx-${i + 1}`,
    }));

    const orders = range(ORDER_COUNT).map((i) => ({
      id: `order-${i + 1}`,
      quantity: 1 + (i % 3),
      fee: 5000 + i * 100,
      payment: i % 2 === 0,
      shipment: pick(
        [
          Shipment.WAITING_OWNER,
          Shipment.WAITING_COURIER,
          Shipment.ON_THE_WAY,
          Shipment.DELIVERED,
        ],
        i,
      ),
      userId: i % 5 === 0 ? "hub-user" : `user-${(i % USER_COUNT) + 1}`,
      variantId: `variant-product-${(i % 8) + 1}-0`,
      transactionId: `trx-${(i % TRANSACTION_COUNT) + 1}`,
    }));

    const reviews = range(50).map((i) => ({
      id: `review-${i + 1}`,
      score: 3 + (i % 3),
      content: `Review ${i + 1}`,
      orderId: `order-${(i % ORDER_COUNT) + 1}`,
    }));

    return {
      users,
      stores,
      categories,
      subcategories,
      products,
      variants,
      carts,
      cartVariants,
      transactions,
      orders,
      reviews,
    };
  }
}
