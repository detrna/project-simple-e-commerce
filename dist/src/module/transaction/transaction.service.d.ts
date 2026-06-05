import { ITransactionRepository } from "./Itransaction.repository";
import { Transaction } from "./Transaction";
export declare class TransactionService {
    private repo;
    constructor(repo: ITransactionRepository);
    getMyTransactions: (userId: string) => Promise<Transaction[]>;
    getTransactionById: (data: {
        userId: string;
        transactionId: string;
    }) => Promise<Transaction | null>;
    create: (data: {
        orderIds: string[];
        userId: string;
    }) => Promise<Transaction>;
}
//# sourceMappingURL=transaction.service.d.ts.map