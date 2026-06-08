import { pagination } from "../../middleware/pagination";
import { prisma } from "../../shared/prismaHelper";
import { ITransactionRepository } from "./Itransaction.repository";
import { Transaction } from "./Transaction";

export class TransactionRepository implements ITransactionRepository {
  async getMyTransactions(data: {
    userId: string;
    pagination: pagination;
  }): Promise<Transaction[]> {
    try {
      const { limit, cursor } = data.pagination;
      const rows = await prisma.transaction.findMany({
        where: { order: { some: { userId: data.userId } } },
        take: limit,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        include: { order: true },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      });

      return rows;
    } catch (e) {
      throw e;
    }
  }

  async getTransactionById(id: string): Promise<Transaction | null> {
    try {
      const rows = await prisma.transaction.findUnique({
        where: { id: id },
        include: { order: true },
      });

      return rows;
    } catch (e) {
      throw e;
    }
  }

  async create(orderIds: string[]): Promise<Transaction> {
    try {
      const rows = await prisma.$transaction(async (tx) => {
        const newTransaction = await tx.transaction.create({});

        const orders = await tx.order.updateManyAndReturn({
          where: { id: { in: orderIds } },
          data: { transactionId: newTransaction.id },
        });

        const payload: Transaction = {
          id: newTransaction.id,
          order: orders,
          createdAt: newTransaction.createdAt,
        };

        return payload;
      });

      return rows;
    } catch (e) {
      throw e;
    }
  }
}
