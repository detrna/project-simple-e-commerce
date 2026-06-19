import { Category, Subcategory, Shipment } from "../src/generated/prisma/enums";

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

    const products = [
      {
        id: "product-1",
        name: "iPhone 15",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.PHONE,
        storeId: "main-store",
      },
      {
        id: "product-2",
        name: "MacBook M2",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.LAPTOP,
        storeId: "main-store",
      },
      {
        id: "product-3",
        name: "T-Shirt Basic",
        category: Category.FASHION,
        subcategory: Subcategory.SHIRT,
        storeId: "main-store",
      },
      {
        id: "product-4",
        name: "Samsung S24",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.PHONE,
        storeId: "main-store",
      },
      {
        id: "product-5",
        name: "Dell XPS 13",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.LAPTOP,
        storeId: "main-store",
      },
      {
        id: "product-6",
        name: "Psychology Book",
        category: Category.BOOKS,
        subcategory: Subcategory.PSYCHOLOGY,
        storeId: "main-store",
      },
      {
        id: "product-7",
        name: "Winter Jacket",
        category: Category.FASHION,
        subcategory: Subcategory.JACKET,
        storeId: "main-store",
      },
      {
        id: "product-8",
        name: "Formal Shirt",
        category: Category.FASHION,
        subcategory: Subcategory.SHIRT,
        storeId: "main-store",
      },
      {
        id: "product-9",
        name: "Noise-Cancelling Headphones",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-10",
        name: "Running Shoes",
        category: Category.FASHION,
        subcategory: Subcategory.TROUSER,
        storeId: "main-store",
      },
      {
        id: "product-11",
        name: "Smartwatch",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.PHONE,
        storeId: "main-store",
      },
      {
        id: "product-12",
        name: "Travel Backpack",
        category: Category.FASHION,
        subcategory: Subcategory.JACKET,
        storeId: "main-store",
      },
      {
        id: "product-13",
        name: "Yoga Mat",
        category: Category.FASHION,
        subcategory: Subcategory.TROUSER,
        storeId: "main-store",
      },
      {
        id: "product-14",
        name: "Coffee Maker",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-15",
        name: "Bluetooth Speaker",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-16",
        name: "Leather Wallet",
        category: Category.FASHION,
        subcategory: Subcategory.TROUSER,
        storeId: "main-store",
      },
      {
        id: "product-17",
        name: "Desk Lamp",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-18",
        name: "Graphic Novel",
        category: Category.BOOKS,
        subcategory: Subcategory.NOVEL,
        storeId: "main-store",
      },
      {
        id: "product-19",
        name: "Camping Tent",
        category: Category.FASHION,
        subcategory: Subcategory.JACKET,
        storeId: "main-store",
      },
      {
        id: "product-20",
        name: "Wireless Charger",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.PHONE,
        storeId: "main-store",
      },
      {
        id: "product-21",
        name: "Gaming Mouse",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-22",
        name: "Wireless Earbuds",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.PHONE,
        storeId: "main-store",
      },
      {
        id: "product-23",
        name: "Fantasy Novel",
        category: Category.BOOKS,
        subcategory: Subcategory.NOVEL,
        storeId: "main-store",
      },
      {
        id: "product-24",
        name: "Workout Shorts",
        category: Category.FASHION,
        subcategory: Subcategory.TROUSER,
        storeId: "main-store",
      },
      {
        id: "product-25",
        name: "Action Camera",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-26",
        name: "Cookbook",
        category: Category.BOOKS,
        subcategory: Subcategory.NOVEL,
        storeId: "main-store",
      },
      {
        id: "product-27",
        name: "Denim Jacket",
        category: Category.FASHION,
        subcategory: Subcategory.JACKET,
        storeId: "main-store",
      },
      {
        id: "product-28",
        name: "Graphic Tee",
        category: Category.FASHION,
        subcategory: Subcategory.SHIRT,
        storeId: "main-store",
      },
      {
        id: "product-29",
        name: "4K Monitor",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-30",
        name: "Study Planner",
        category: Category.BOOKS,
        subcategory: Subcategory.PSYCHOLOGY,
        storeId: "main-store",
      },
      {
        id: "product-31",
        name: "Wireless Keyboard",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-32",
        name: "Running Socks",
        category: Category.FASHION,
        subcategory: Subcategory.TROUSER,
        storeId: "main-store",
      },
      {
        id: "product-33",
        name: "Smart Home Hub",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-34",
        name: "Meditation Journal",
        category: Category.BOOKS,
        subcategory: Subcategory.PSYCHOLOGY,
        storeId: "main-store",
      },
      {
        id: "product-35",
        name: "Leather Belt",
        category: Category.FASHION,
        subcategory: Subcategory.TROUSER,
        storeId: "main-store",
      },
      {
        id: "product-36",
        name: "Portable SSD",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-37",
        name: "Children Storybook",
        category: Category.BOOKS,
        subcategory: Subcategory.NOVEL,
        storeId: "main-store",
      },
      {
        id: "product-38",
        name: "Casual Polo",
        category: Category.FASHION,
        subcategory: Subcategory.SHIRT,
        storeId: "main-store",
      },
      {
        id: "product-39",
        name: "Portable Projector",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-40",
        name: "Nutrition Handbook",
        category: Category.BOOKS,
        subcategory: Subcategory.HEALTH,
        storeId: "main-store",
      },
      {
        id: "product-41",
        name: "Bluetooth Headset",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.PHONE,
        storeId: "main-store",
      },
      {
        id: "product-42",
        name: "Office Shirt",
        category: Category.FASHION,
        subcategory: Subcategory.SHIRT,
        storeId: "main-store",
      },
      {
        id: "product-43",
        name: "Self-Help Guide",
        category: Category.BOOKS,
        subcategory: Subcategory.PSYCHOLOGY,
        storeId: "main-store",
      },
      {
        id: "product-44",
        name: "Noise Machine",
        category: Category.ELECTRONICS,
        subcategory: Subcategory.TV,
        storeId: "main-store",
      },
      {
        id: "product-45",
        name: "Denim Shorts",
        category: Category.FASHION,
        subcategory: Subcategory.TROUSER,
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
