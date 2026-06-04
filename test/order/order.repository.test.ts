import { describe, expect, it } from "vitest";
import { OrderRepository } from "../../src/module/order/order.repository";
import { afterEach, beforeEach } from "node:test";
import { prisma } from "../../src/shared/prismaHelper";
import { CreateOrderDTO } from "../../src/module/order/Order";

const OrderMock: CreateOrderDTO = {
  id: "order-test-1",
  quantity: 1,
  fee: 1000,
  transactionId: "trx-1",
  variantId: "variant-1",
  userId: "user-1",
};

describe("getMyOrders", () => {
  it("should return authenticated user's orders", async () => {
    const repo = new OrderRepository();

    const result = await repo.getMyOrders("user-1");

    expect(result).toEqual([
      {
        id: "order-1",
        quantity: 1,
        payment: false,
        shipment: "WAITING_OWNER",
        fee: 10000,
        transactionId: "trx-1",
        variantId: "variant-1",
        userId: "user-1",
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      },
    ]);
  });
});

describe("createOrder", () => {
  afterEach(async () => {
    await prisma.order.deleteMany({
      where: {
        id: OrderMock.id,
      },
    });
  });

  it("should create an order", async () => {
    const repo = new OrderRepository();

    const result = await repo.createOrder(OrderMock);

    expect(result).toEqual({
      ...OrderMock,
      payment: false,
      shipment: "WAITING_OWNER",
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});

describe("getOrderById", () => {
  beforeEach(async () => {
    await prisma.order.create({ data: OrderMock });
  });
  afterEach(async () => {
    await prisma.order.deleteMany({ where: { id: OrderMock.id } });
  });

  it("should return order by its id", async () => {
    const repo = new OrderRepository();

    const result = await repo.getOrderById("order-test-1");

    expect(result?.id).toEqual(OrderMock.id);
  });
});

describe("payOrder", () => {
  beforeEach(async () => {
    await prisma.order.create({ data: OrderMock });
  });
  afterEach(async () => {
    await prisma.order.deleteMany({ where: { id: OrderMock.id } });
  });

  it("should patch order's payment to true", async () => {
    const repo = new OrderRepository();

    const result = await repo.payOrder(OrderMock.id as string);

    expect(result).toEqual({
      ...OrderMock,
      payment: true,
      shipment: "WAITING_OWNER",
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});

describe("getOrdersByStoreId", () => {
  it("should return store's orders", async () => {
    const repo = new OrderRepository();

    const result = await repo.getOrdersByStoreId("store-2");

    expect(result).toEqual([
      {
        id: "order-3",
        quantity: 1,
        payment: false,
        shipment: "WAITING_COURIER",
        fee: 8000,
        transactionId: "trx-3",
        variantId: "variant-3",
        userId: "user-3",
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      },
    ]);
  });
});
