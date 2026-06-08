import supertest from "supertest";
import { afterAll, describe, expect, it } from "vitest";
import app from "../../src";
import { mockToken } from "../container/token.mock";
import seed from "../../src/database/prisma/seed(old)/seed-data";
import { prisma } from "../../src/shared/prismaHelper";
import { SeedData } from "../../src/database/prisma/seed-data";

const { unauthorizedUserToken, hubUserToken } = mockToken;
const data = SeedData.get();

describe("getMyTransactions", () => {
  it("return user's list of transactions", async () => {
    const transactions = await prisma.transaction.findMany({
      where: { order: { some: { userId: "hub-user" } } },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      omit: { createdAt: true },
    });

    const limit = 5;
    const skip = 5;
    const cursor = transactions[skip - 1].id;

    const response = await supertest(app)
      .get(`/api/v1/transactions?limit=${limit}&cursor=${cursor}`)
      .set("Authorization", `Bearer ${hubUserToken}`);

    expect(response.status).toBe(200);
    expect(response.body.data).toMatchObject(
      transactions.slice(skip, skip + limit),
    );
  });
});

describe("getTransactionById", () => {
  it("return transaction based on its id", async () => {
    const trxId = "trx-1";
    const expectedData = await prisma.transaction.findUnique({
      where: { id: trxId },
      omit: { createdAt: true },
    });

    const response = await supertest(app)
      .get(`/api/v1/transactions/${trxId}`)
      .set("Authorization", `Bearer ${hubUserToken}`);

    expect(response.status).toBe(200);
    expect(response.body.data).toMatchObject(expectedData!);
  });

  it("throw a 403 error if the user didn't own the transaction", async () => {
    const response = await supertest(app)
      .get("/api/v1/transactions/trx-10")
      .set("Authorization", `Bearer ${unauthorizedUserToken}`);

    expect(response.status).toBe(403);
  });

  it("throw a 400 error if the transaction didn't exist", async () => {
    const response = await supertest(app)
      .get("/api/v1/transactions/trx-nonexistent-1")
      .set("Authorization", `Bearer ${hubUserToken}`);

    expect(response.status).toBe(400);
  });
});

describe("create", () => {
  it("create and persist transaction data", async () => {
    const expectedData = await prisma.order.create({
      data: { ...data.orders[0], transactionId: null, id: "order-test-1" },
      omit: { createdAt: true, transactionId: true, updatedAt: true },
    });

    const response = await supertest(app)
      .post("/api/v1/transactions")
      .set("Authorization", `Bearer ${hubUserToken}`)
      .send({ orderIds: ["order-test-1"] });

    expect(response.status).toBe(200);
    expect(response.body.data).toMatchObject({ order: [expectedData] });
  });

  it("throw 400 error if one of the order didn't exist", async () => {
    const response = await supertest(app)
      .post("/api/v1/transactions")
      .set("Authorization", `Bearer ${hubUserToken}`)
      .send({ orderIds: ["order-nonexistent-1"] });

    expect(response.status).toBe(400);
  });

  it("throw 400 error if one of the order already has a transactionId", async () => {
    const response = await supertest(app)
      .post("/api/v1/transactions")
      .set("Authorization", `Bearer ${hubUserToken}`)
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

  afterAll(async () => {
    await prisma.transaction.deleteMany({
      where: { order: { some: { id: "order-test-1" } } },
    });
  });
});
