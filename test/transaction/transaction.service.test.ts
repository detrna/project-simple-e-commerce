import { describe, expect, it, vi } from "vitest";
import seed from "../../src/database/prisma/seed/seed-data";
import { Transaction } from "../../src/module/transaction/Transaction";
import { mockService } from "../container/service.mock";
import { mockRepository } from "../container/repository.mock";
import { BadRequestError, UnauthorizedError } from "../../src/shared/AppError";

const repo = mockRepository.transaction;
const orderRepo = mockRepository.order;
const service = mockService.transaction;

describe("getMyTransactions", () => {
  it("return user's list of transactions", async () => {
    repo.getMyTransactions.mockResolvedValue([seed.transactions[0]]);

    const result: Transaction[] = await service.getMyTransactions("user-1");

    expect(result[0]).toMatchObject(seed.transactions[0]);
    expect(repo.getMyTransactions).toHaveBeenCalledWith("user-1");
  });
});

describe("getTransactionById", () => {
  it("return transaction based by its id", async () => {
    repo.getTransactionById.mockResolvedValue({
      ...seed.transactions[0],
      order: [seed.orders[0]],
    });

    const request = { userId: "user-1", transactionId: "trx-1" };

    const result: Transaction | null =
      await service.getTransactionById(request);

    expect(result).toMatchObject(seed.transactions[0]);
    expect(repo.getTransactionById).toHaveBeenCalledWith(request.transactionId);
  });

  it("throw an error when the transaction didn't exist", async () => {
    repo.getTransactionById.mockResolvedValue(null);

    const request = { userId: "user-1", transactionId: "trx-failed-1" };

    await expect(service.getTransactionById(request)).rejects.toThrow();
    expect(repo.getTransactionById).toHaveBeenCalledWith(request.transactionId);
  });

  it("throw an error when the user didn't own the order in the transactions", async () => {
    repo.getTransactionById.mockResolvedValue({
      ...seed.transactions[0],
      order: [seed.orders[0]],
    });

    const request = { userId: "user-failed-1", transactionId: "trx-test-1" };

    await expect(service.getTransactionById(request)).rejects.toThrow();
    expect(repo.getTransactionById).toHaveBeenCalledWith(request.transactionId);
  });
});

describe("create", () => {
  it("create and persist transaction", async () => {
    orderRepo.getOrdersByIds.mockResolvedValue([seed.orders[0]]);

    repo.create.mockResolvedValue({
      ...seed.transactions[0],
      order: seed.orders[0],
    });

    const request = { orderIds: ["order-1"], userId: "user-1" };

    const result = await service.create(request);

    expect(result).toMatchObject(seed.transactions[0]);
    expect(orderRepo.getOrdersByIds).toHaveBeenCalledWith(request.orderIds);
    expect(repo.create).toHaveBeenCalledWith(request.orderIds);
  });

  it("should throw if the requested order didn't exist", async () => {
    const request = { orderIds: ["order-nonexistent-1"], userId: "user-1" };

    orderRepo.getOrdersByIds.mockResolvedValue([]);

    await expect(service.create(request)).rejects.toBeInstanceOf(
      BadRequestError,
    );

    expect(orderRepo.getOrdersByIds).toHaveBeenCalledWith(["order-1"]);
  });

  it("should throw UnauthorizedError if the user didn't own the requested order", async () => {
    const request = { orderIds: ["order-1"], userId: "user-unauthorized-1" };

    orderRepo.getOrdersByIds.mockResolvedValue([seed.orders[0]]);

    await expect(service.create(request)).rejects.toBeInstanceOf(
      UnauthorizedError,
    );

    expect(orderRepo.getOrdersByIds).toHaveBeenCalledWith(request.orderIds);
  });
});
