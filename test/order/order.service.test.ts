import { describe, expect, it, vi } from "vitest";
import { CreateOrderDTO } from "../../src/module/order/Order";
import { mockRepository } from "../container/repository.mock";
import { mockService } from "../container/service.mock";
import { SeedData } from "../../src/database/prisma/seed-data";

const repo = mockRepository.order;
const service = mockService.order;
const data = SeedData.get();

describe("getMyOrders", () => {
  it("should return authenticated user's list of orders", async () => {
    const response = [{ id: "order-1" }];
    const request = {
      userId: "user-1",
      pagination: { limit: 5, cursor: null },
    };

    repo.getMyOrders.mockResolvedValue(response);

    const result = await service.getMyOrders(request);

    expect(result).toEqual(response);
    expect(repo.getMyOrders).toHaveBeenCalledWith(request);
  });
});

describe("createOrder", () => {
  it("should create an order", async () => {
    const response = { id: "order-1" };

    const request: CreateOrderDTO = {
      variantId: data.variants[0].id,
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
    const response = [
      { id: "order-1", storeId: "store-1" },
      { id: "order-2", storeId: "store-1" },
    ];

    const store = data.stores[0];
    const request = {
      storeId: store.id,
      userId: store.userId,
      pagination: { limit: 0, cursor: null },
    };

    repo.getOrdersByStoreId.mockResolvedValue(response);

    const result = await service.getOrderByStoreId(request);

    expect(result).toEqual(response);
    expect(repo.getOrdersByStoreId).toHaveBeenCalledWith(request);
  });
});
