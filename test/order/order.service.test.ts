import { describe, expect, it, vi } from "vitest";
import { OrderService } from "../../src/module/order/order.service";
import { CreateOrderDTO } from "../../src/module/order/Order";

const repo = {
  getMyOrders: vi.fn(),
  getOrderById: vi.fn(),
  createOrder: vi.fn(),
  payOrder: vi.fn(),
  getOrdersByStoreId: vi.fn(),
};

const service = new OrderService(repo as any);

describe("getMyOrders", () => {
  it("should return authenticated user's list of orders", async () => {
    const orders = [{ id: "order-1" }];

    repo.getMyOrders.mockResolvedValue(orders);

    const result = await service.getMyOrders("user-1");

    expect(result).toEqual(orders);
    expect(repo.getMyOrders).toHaveBeenCalledWith("user-1");
  });
});

describe("createOrder", () => {
  it("should create an order", async () => {
    const response = { id: "order-1" };

    const request: CreateOrderDTO = {
      variantId: "variant-1",
      userId: "user-1",
      quantity: 1,
    };

    repo.createOrder.mockResolvedValue(response);

    const result = await service.createOrder(request);

    expect(result).toEqual(response);
    expect(repo.createOrder).toHaveBeenCalledWith(request);
  });
});

describe("payOrder", () => {
  it("should pay an order", async () => {
    const existingOrder = { userId: "user-1", id: "order-1", payment: false };
    const paidOrder = { userId: "user-1", id: "order-1", payment: true };

    repo.getOrderById.mockResolvedValue(existingOrder);
    repo.payOrder.mockResolvedValue(paidOrder);

    const result = await service.payOrder({
      userId: "user-1",
      orderId: "order-1",
    });

    expect(result).toEqual(paidOrder);
    expect(repo.getOrderById).toHaveBeenCalledWith("order-1");
    expect(repo.payOrder).toHaveBeenCalledWith("order-1");
  });

  it("should throw error when the user didn't own this order", async () => {
    const existingOrder = { userId: "user-1", id: "order-1", payment: false };
    const paidOrder = { userId: "user-1", id: "order-1", payment: true };

    repo.getOrderById.mockResolvedValue(existingOrder);
    repo.payOrder.mockResolvedValue(paidOrder);

    await expect(
      service.payOrder({ userId: "user-2", orderId: "order-1" }),
    ).rejects.toThrow();
  });
});

describe("getOrderByStoreId", () => {
  it("should return list of orders based on its storeId", async () => {
    const mockOrder = [
      { id: "order-1", storeId: "store-1" },
      { id: "order-2", storeId: "store-1" },
    ];

    repo.getOrdersByStoreId.mockResolvedValue(mockOrder);

    const result = await service.getOrderByStoreId({
      storeId: "store-1",
      userId: "owner-1",
    });

    expect(result).toEqual(mockOrder);
    expect(repo.getOrdersByStoreId).toHaveBeenCalledWith("store-1");
  });
});
