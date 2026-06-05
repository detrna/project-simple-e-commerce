import { Request, Response } from "express";
import { TransactionService } from "./transaction.service";
export declare class TransactionController {
    private service;
    constructor(service: TransactionService);
    getMyTransactions: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getTransactionById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createTransaction: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=transaction.controller.d.ts.map