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
      { id: "cat-electronics", name: "ELECTRONICS" },
      { id: "cat-books", name: "BOOKS" },
      { id: "cat-fashion", name: "FASHION" },
    ];

    const subcategories = [
      {
        id: "sub-phone",
        name: "PHONE",
        categoryId: "cat-electronics",
      },
      {
        id: "sub-laptop",
        name: "LAPTOP",
        categoryId: "cat-electronics",
      },
      { id: "sub-tv", name: "TV", categoryId: "cat-electronics" },
      { id: "sub-novel", name: "NOVEL", categoryId: "cat-books" },
      {
        id: "sub-psychology",
        name: "PSYCHOLOGY",
        categoryId: "cat-books",
      },
      { id: "sub-health", name: "HEALTH", categoryId: "cat-books" },
      { id: "sub-shirt", name: "SHIRT", categoryId: "cat-fashion" },
      { id: "sub-jacket", name: "JACKET", categoryId: "cat-fashion" },
      {
        id: "sub-trouser",
        name: "TROUSER",
        categoryId: "cat-fashion",
      },
    ];

    const products = [
      {
        id: "product-1",
        name: "iPhone 15",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-2",
        name: "MacBook M2",
        subcategoryId: "sub-laptop",
        storeId: "main-store",
      },
      {
        id: "product-3",
        name: "T-Shirt Basic",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-4",
        name: "Samsung S24",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-5",
        name: "Dell XPS 13",
        subcategoryId: "sub-laptop",
        storeId: "main-store",
      },
      {
        id: "product-6",
        name: "Psychology Book",
        subcategoryId: "sub-psychology",
        storeId: "main-store",
      },
      {
        id: "product-7",
        name: "Winter Jacket",
        subcategoryId: "sub-jacket",
        storeId: "main-store",
      },
      {
        id: "product-8",
        name: "Formal Shirt",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-9",
        name: "Noise-Cancelling Headphones",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-10",
        name: "Running Shoes",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-11",
        name: "Smartwatch",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-12",
        name: "Travel Backpack",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-13",
        name: "Yoga Mat",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-14",
        name: "Coffee Maker",
        subcategoryId: "sub-tv",
        storeId: "main-store",
      },
      {
        id: "product-15",
        name: "Bluetooth Speaker",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-16",
        name: "Leather Wallet",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-17",
        name: "Desk Lamp",
        subcategoryId: "sub-tv",
        storeId: "main-store",
      },
      {
        id: "product-18",
        name: "Graphic Novel",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-19",
        name: "Camping Tent",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-20",
        name: "Wireless Charger",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-21",
        name: "Gaming Mouse",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-22",
        name: "Wireless Earbuds",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-23",
        name: "Fantasy Novel",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-24",
        name: "Workout Shorts",
        subcategoryId: "sub-trouser",
        storeId: "main-store",
      },
      {
        id: "product-25",
        name: "Action Camera",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-26",
        name: "Cookbook",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-27",
        name: "Denim Jacket",
        subcategoryId: "sub-jacket",
        storeId: "main-store",
      },
      {
        id: "product-28",
        name: "Graphic Tee",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-29",
        name: "4K Monitor",
        subcategoryId: "sub-tv",
        storeId: "main-store",
      },
      {
        id: "product-30",
        name: "Study Planner",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-31",
        name: "Wireless Keyboard",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-32",
        name: "Running Socks",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-33",
        name: "Smart Home Hub",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-34",
        name: "Meditation Journal",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-35",
        name: "Leather Belt",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-36",
        name: "Portable SSD",
        subcategoryId: "sub-laptop",
        storeId: "main-store",
      },
      {
        id: "product-37",
        name: "Children Storybook",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-38",
        name: "Casual Polo",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-39",
        name: "Portable Projector",
        subcategoryId: "sub-tv",
        storeId: "main-store",
      },
      {
        id: "product-40",
        name: "Nutrition Handbook",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-41",
        name: "Bluetooth Headset",
        subcategoryId: "sub-phone",
        storeId: "main-store",
      },
      {
        id: "product-42",
        name: "Office Shirt",
        subcategoryId: "sub-shirt",
        storeId: "main-store",
      },
      {
        id: "product-43",
        name: "Self-Help Guide",
        subcategoryId: "sub-novel",
        storeId: "main-store",
      },
      {
        id: "product-44",
        name: "Noise Machine",
        subcategoryId: "sub-tv",
        storeId: "main-store",
      },
      {
        id: "product-45",
        name: "Denim Shorts",
        subcategoryId: "sub-trouser",
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
