import { pagination } from "../../middleware/pagination";
import { Transaction } from "./Transaction";

export interface ITransactionRepository {
  getMyTransactions(data: {
    userId: string;
    pagination: pagination;
  }): Promise<Transaction[]>;
  getTransactionById(id: string): Promise<Transaction | null>;
  create(orderId: string[]): Promise<Transaction>;
}
