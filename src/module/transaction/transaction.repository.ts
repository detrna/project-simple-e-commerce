import { prisma } from "../../shared/prismaHelper";
import { ITransactionRepository } from "./Itransaction.repository";
import { Transaction } from "./Transaction";

export class TransactionRepository implements ITransactionRepository {
  async getMyTransactions(userId: string): Promise<Transaction[]> {
    try {
      const rows = await prisma.transaction.findMany({
        where: { order: { some: { userId: userId } } },
        include: { order: true },
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
