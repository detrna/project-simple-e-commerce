import { Order } from "../../database/src/generated/prisma/client";
import { pagination } from "../../middleware/pagination";
import { BadRequestError, UnauthorizedError } from "../../shared/AppError";
import { IOrderRepository } from "../order/Iorder.repository";
import { ITransactionRepository } from "./Itransaction.repository";
import { Transaction } from "./Transaction";

export class TransactionService {
  constructor(
    private repo: ITransactionRepository,
    private orderRepo: IOrderRepository,
  ) {
    this.repo = repo;
    this.orderRepo = orderRepo;
  }

  getMyTransactions = async (data: {
    userId: string;
    pagination: pagination;
  }): Promise<Transaction[]> => {
    const result = await this.repo.getMyTransactions(data);

    return result;
  };

  getTransactionById = async (data: {
    userId: string;
    transactionId: string;
  }): Promise<Transaction> => {
    const result = await this.repo.getTransactionById(data.transactionId);

    if (!result) {
      throw new BadRequestError("Couldn't find requested transaction");
    }

    if (result?.order[0].userId !== data.userId) {
      throw new UnauthorizedError("This user didn't own this transaction");
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
      throw new BadRequestError("Could not find one of the requested order");
    }

    existingOrders.forEach((order) => {
      if (order.userId !== data.userId) {
        throw new UnauthorizedError("This user did not own one of the orders");
      }

      if (order.transactionId) {
        throw new BadRequestError(
          `One of the orders already in another transaction`,
        );
      }
    });

    const result = await this.repo.create(data.orderIds);
    return result;
  };
}
