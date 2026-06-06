import supertest from "supertest";
import { describe, expect, it } from "vitest";
import app from "../../src";
import { mockToken } from "../container/token.mock";
import seed from "../../src/database/prisma/seed/seed-data";
import { prisma } from "../../src/shared/prismaHelper";
import { dbSeed } from "../../src/database/prisma/seed/seed";

const { userToken, ownerToken, unauthorizedUserToken, nonexistentUserToken } =
  mockToken;

describe("getMyTransactions", () => {
  it("return list of user's transactions", async () => {
    const response = await supertest(app)
      .get("/api/v1/transactions")
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject([seed.transactions[0]]);
  });
});

describe("getTransactionById", () => {
  it("return transaction based on its id", async () => {
    const response = await supertest(app)
      .get("/api/v1/transactions/trx-1")
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(seed.transactions[0]);
  });

  it("throw a 403 error if the user didn't own the transaction", async () => {
    const response = await supertest(app)
      .get("/api/v1/transactions/trx-1")
      .set("Authorization", `Bearer ${unauthorizedUserToken}`);

    expect(response.status).toBe(403);
  });

  it("throw a 400 error if the transaction didn't exist", async () => {
    const response = await supertest(app)
      .get("/api/v1/transactions/trx-nonexistent-1")
      .set("Authorization", `Bearer ${userToken}`);

    expect(response.status).toBe(400);
  });
});

describe("create", () => {
  it("create and persist transaction data", async () => {
    await prisma.order.create({
      data: { ...seed.orders[0], transactionId: null, id: "order-test-1" },
    });

    const response = await supertest(app)
      .post("/api/v1/transactions")
      .set("Authorization", `Bearer ${userToken}`)
      .send({ orderIds: ["order-test-1"] });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ order: [{ id: "order-test-1" }] });

    await prisma.transaction.delete({ where: { id: response.body.id } });
  });

  it("throw 400 error if one of the order didn't exist", async () => {
    const response = await supertest(app)
      .post("/api/v1/transactions")
      .set("Authorization", `Bearer ${userToken}`)
      .send({ orderIds: ["order-nonexistent-1"] });

    expect(response.status).toBe(400);
  });

  it("throw 400 error if one of the order already has a transactionId", async () => {
    const response = await supertest(app)
      .post("/api/v1/transactions")
      .set("Authorization", `Bearer ${userToken}`)
      .send({ orderIds: ["order-1"] });

    expect(response.status).toBe(400);
  });

  it("throw 403 error if the user didn't own one of the orders", async () => {
    const response = await supertest(app)
      .post("/api/v1/transactions")
      .set("Authorization", `Bearer ${unauthorizedUserToken}`)
      .send({ orderIds: ["order-1"] });

    expect(response.status).toBe(403);
  });
});
