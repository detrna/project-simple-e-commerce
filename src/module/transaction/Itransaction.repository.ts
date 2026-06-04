import { Transaction } from "./Transaction";

export interface ITransactionRepository {
  getMyTransactions(userId: string): Promise<Transaction[]>;
  getTransactionById(id: string): Promise<Transaction | null>;
  create(orderId: string[]): Promise<Transaction>;
}
