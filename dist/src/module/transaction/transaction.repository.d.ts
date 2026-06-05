import { ITransactionRepository } from "./Itransaction.repository";
import { Transaction } from "./Transaction";
export declare class TransactionRepository implements ITransactionRepository {
    getMyTransactions(userId: string): Promise<Transaction[]>;
    getTransactionById(id: string): Promise<Transaction | null>;
    create(orderId: string[]): Promise<Transaction>;
}
//# sourceMappingURL=transaction.repository.d.ts.map