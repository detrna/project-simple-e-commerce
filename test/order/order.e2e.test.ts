import { afterAll, beforeAll, describe, expect, it } from "vitest";
import supertest from "supertest";
import app from "../../src/index";
import "dotenv/config";
import { prisma } from "../../src/shared/prismaHelper";
import { mockToken } from "../container/token.mock";
import { SeedData } from "../../src/database/prisma/seed-data";

const { userToken, hubUserToken } = mockToken;
const data = SeedData.get();

describe("getMyOrders", () => {
  it("return user's list of order", async () => {
    const userId = "hub-user";

    const orders = await prisma.order.findMany({
      where: { userId },
      omit: { createdAt: true, updatedAt: true },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    });

    const limit = 5;
    const skip = 5;
    const cursor = orders[skip - 1].id;

    const response = await supertest(app)
      .get(`/api/v1/orders?limit=${limit}&cursor=${cursor}`)
      .set("Authorization", `Bearer ${mockToken.hubUserToken}`);

    expect(response.status).toBe(200);
    expect(response.body.data).toMatchObject(orders.slice(skip, skip + limit));
  });
});

describe("createOrder", () => {
  afterAll(async () => {
    await prisma.order.delete({ where: { id: "order-test" } });
  });

  it("should create an order in the database", async () => {
    const variant = data.variants[0];

    const response = await supertest(app)
      .post(`/api/v1/variants/${variant.id}/orders`)
      .set("Authorization", `Bearer ${userToken}`)
      .send({ orderId: "order-test", quantity: 1 });

    expect(response.status).toBe(200);
    expect(response.body.data).toMatchObject({
      variantId: variant.id,
      quantity: 1,
      userId: "user-1",
    });
  });
});

describe("payOrder", () => {
  const orderRequest = data.orders[0];

  afterAll(async () => {
    await prisma.order.update({
      where: { id: orderRequest.id },
      data: { payment: false },
    });
  });

  it("should pay the order", async () => {
    const orderResponse = await prisma.order.findUnique({
      where: { id: orderRequest.id },
      omit: { createdAt: true, updatedAt: true },
    });

    const response = await supertest(app)
      .patch(`/api/v1/orders/${orderRequest.id}/pay`)
      .set("Authorization", `Bearer ${hubUserToken}`);

    expect(response.status).toBe(200);
    expect(response.body.data).toMatchObject({
      ...orderResponse,
      payment: true,
    });
  });

  it("should throw an error if the user didn't own the order", async () => {
    const response = await supertest(app)
      .patch("/api/v1/orders/order-3/pay")
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(403);
  });
});

// describe("GetOrderByStoreId", () => {
//   it("should return orders based on its storeId", async () => {
//     const response = await supertest(app)
//       .get("/api/v1/stores/store-1/orders")
//       .set("Authorization", `Bearer: ${ownerToken}`);

//     expect(response.body[0]).toMatchObject(seed.orders[0]);
//   });

//   it("should throw unauthorized error if the user wasn't the store owner", async () => {
//     const response = await supertest(app)
//       .get("/api/v1/stores/store-1/orders")
//       .set("Authorization", `Bearer: ${userToken}`);

//     expect(response.status).toBe(403);
//   });

//   it("should feature a cursor based pagination", async () => {
//     const ordersData = Array.from({ length: 10 }, (_, i) => ({
//       ...seed.orders[0],
//       id: `order-test-${i}`,
//       userId: "user-1",
//       transactionId: null,
//     }));

//     await prisma.order.createMany({ data: ordersData });

//     const response = await supertest(app)
//       .get("/api/v1/stores/store-1/orders?limit=5&cursor=order-1")
//       .set("Authorization", `Bearer ${ownerToken}`);

//     expect(response).toBe(200);
//     expect(response.body).toMatchObject(ordersData.splice(4, 10).reverse());
//   });
// });

describe("getOrderById", () => {
  it("should return an order based on its id", async () => {
    const order = data.orders[0];

    const orderResponse = await prisma.order.findUnique({
      where: { id: order.id },
      omit: { createdAt: true, updatedAt: true },
    });

    const result = await supertest(app)
      .get("/api/v1/orders/order-1?test=1")
      .set("Authorization", `Bearer ${userToken}`);

    expect(result.body.data).toMatchObject(orderResponse!);
    expect(result.status).toBe(200);
  });

  it("should throw a bad request error if the order didn't exist", async () => {
    const result = await supertest(app)
      .get("/api/v1/orders/order-727")
      .set("Authorization", `Bearer ${userToken}`);

    expect(result.status).toBe(400);
  });
});
