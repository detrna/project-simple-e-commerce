import { Order } from "../../database/src/generated/prisma/client";
import { orderRepository } from "../order/order.container";
import { ITransactionRepository } from "./Itransaction.repository";
import { Transaction } from "./Transaction";

export class TransactionService {
  constructor(private repo: ITransactionRepository) {
    this.repo = repo;
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
    const existingOrders: (Order | null)[] = await Promise.all(
      data.orderIds.map((orderId) => orderRepository.getOrderById(orderId)),
    );

    existingOrders.forEach((order) => {
      if (!order) {
        throw new Error("Couldn't find one of the orders");
      }

      if (order.userId !== data.userId) {
        throw new Error("This user didn't own one of the orders");
      }
    });

    const result = await this.repo.create(data.orderIds);
    return result;
  };
}
