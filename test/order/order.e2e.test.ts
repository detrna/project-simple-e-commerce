import { afterAll, beforeAll, describe, expect, it } from "vitest";
import supertest from "supertest";
import app from "../../src/index";
import "dotenv/config";
import seed from "../../src/database/prisma/seed/seed-data";
import { prisma } from "../../src/shared/prismaHelper";
import { mockToken } from "../container/token.mock";

const { userToken, testUserToken } = mockToken;

describe("getMyOrders", () => {
  it("should return authenticated user's list of orders", async () => {
    const response = await supertest(app)
      .get("/api/v1/orders")
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(200);
    expect(response.body.data[0].userId).toMatchObject(
      seed.orders[0].userId as any,
    );
  });

  it("should feature a cursor based pagination", async () => {
    const ordersData = Array.from({ length: 10 }, (_, i) => ({
      ...seed.orders[0],
      id: `order-test-${i}`,
      userId: "user-1",
      transactionId: null,
    }));

    await prisma.order.createMany({ data: ordersData });

    const response = await supertest(app)
      .get(`/api/v1/orders?limit=5&cursor=${ordersData[4].id}`)
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(200);
    expect(response.body.data).toMatchObject(ordersData.slice(5, 10).reverse());
  });

  afterAll(async () => {
    await prisma.order.deleteMany({
      where: { userId: "user-1", transaction: null },
    });
  });
});

describe("createOrder", () => {
  it("should create an order in the database", async () => {
    const response = await supertest(app)
      .post("/api/v1/variants/variant-1/orders")
      .set("Authorization", `Bearer ${userToken}`)
      .send({ orderId: "order-4", quantity: 1 });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      variantId: "variant-1",
      quantity: 1,
      userId: "user-1",
    });

    await prisma.order.delete({ where: { id: "order-4" } });
  });
});

describe("payOrder", () => {
  it("should pay the order", async () => {
    const response = await supertest(app)
      .patch("/api/v1/orders/order-1/pay")
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ ...seed.orders[0], payment: true });

    await prisma.order.update({
      where: { id: "order-1" },
      data: { payment: false },
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
// });

describe("getOrderById", () => {
  it("should return an order based on its id", async () => {
    const result = await supertest(app)
      .get("/api/v1/orders/order-1")
      .set("Authorization", `Bearer ${userToken}`);

    expect(result.body).toMatchObject(seed.orders[0]);
  });

  it("should throw a bad request error if the order didn't exist", async () => {
    const result = await supertest(app)
      .get("/api/v1/orders/order-727")
      .set("Authorization", `Bearer ${userToken}`);

    expect(result.status).toBe(400);
  });
});
