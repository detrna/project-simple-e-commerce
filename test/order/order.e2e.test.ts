import { describe, expect, it } from "vitest";
import supertest from "supertest";
import app from "../../src/index";
import "dotenv/config";
import seed from "../../src/database/prisma/seed/seed-data";
import { prisma } from "../../src/shared/prismaHelper";
import { mockToken } from "../container/token.mock";

const { userToken, ownerToken } = mockToken;

describe("getMyOrders", () => {
  it("should return authenticated user's list of orders", async () => {
    const response = await supertest(app)
      .get("/api/v1/orders")
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(200);
    expect(response.body[0]).toMatchObject(seed.orders[0]);
  });
  it("should response an empty array if the user has yet to have any order", async () => {
    const response = await supertest(app)
      .get("/api/v1/orders")
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
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
