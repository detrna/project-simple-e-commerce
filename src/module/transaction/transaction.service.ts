import { Order } from "../../database/src/generated/prisma/client";
import { BadRequestError, UnauthorizedError } from "../../shared/AppError";
import { orderRepository } from "../order/order.container";
import { OrderRepository } from "../order/order.repository";
import { ITransactionRepository } from "./Itransaction.repository";
import { Transaction } from "./Transaction";

export class TransactionService {
  constructor(
    private repo: ITransactionRepository,
    private orderRepo: OrderRepository,
  ) {
    this.repo = repo;
    this.orderRepo = orderRepo;
  }

  getMyTransactions = async (userId: string): Promise<Transaction[]> => {
    const result = await this.repo.getMyTransactions(userId);

    if (result.length == 0) {
      throw new Error("This user has yet to make transaction");
    }

    return result;
  };

  getTransactionById = async (data: {
    userId: string;
    transactionId: string;
  }): Promise<Transaction | null> => {
    const result = await this.repo.getTransactionById(data.transactionId);

    if (!result) {
      throw new Error("Couldn't find requested transaction");
    }

    if (result?.order[0].userId !== data.userId) {
      throw new Error("This user didn't own this transaction");
    }

    return result;
  };

  create = async (data: {
    orderIds: string[];
    userId: string;
  }): Promise<Transaction> => {
    const existingOrders: Order[] = await this.orderRepo.getOrdersByIds(
      data.orderIds,
    );

    if (existingOrders.length !== data.orderIds.length) {
      throw new BadRequestError("Couldn't find one of the requested order");
    }

    existingOrders.forEach((order) => {
      if (order.userId !== data.userId) {
        throw new UnauthorizedError("This user didn't own one of the orders");
      }
    });

    const result = await this.repo.create(data.orderIds);
    return result;
  };
}
