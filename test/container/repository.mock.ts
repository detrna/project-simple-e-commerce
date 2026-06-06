import { vi } from "vitest";

export class mockRepository {
  static transaction = {
    getMyTransactions: vi.fn(),
    getTransactionById: vi.fn(),
    create: vi.fn(),
  };

  static order = {
    getMyOrders: vi.fn(),
    getOrderById: vi.fn(),
    createOrder: vi.fn(),
    payOrder: vi.fn(),
    getOrdersByStoreId: vi.fn(),
    getOrdersByIds: vi.fn(),
  };
}
