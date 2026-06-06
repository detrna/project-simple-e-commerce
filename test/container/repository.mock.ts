import { vi } from "vitest";

export const mockRepository = {
  transaction: {
    getMyTransactions: vi.fn(),
    getTransactionById: vi.fn(),
    create: vi.fn(),
  },
  order: {
    getMyOrders: vi.fn(),
    getOrderById: vi.fn(),
    createOrder: vi.fn(),
    payOrder: vi.fn(),
    getOrdersByStoreId: vi.fn(),
    getOrdersByIds: vi.fn(),
  },
};
