import { NextFunction, Request, Response } from "express";
import { TransactionService } from "./transaction.service";

export class TransactionController {
  constructor(private service: TransactionService) {
    this.service = service;
  }

  getMyTransactions = async (req: Request, res: Response) => {
    try {
      const userId: string = req.user?.userId as string;

      const result = await this.service.getMyTransactions(userId);

      return res.json(result);
    } catch (e) {
      console.error(e);
      return res.json(e);
    }
  };

  getTransactionById = async (req: Request, res: Response) => {
    try {
      const transactionId: string = req.params.id as string;
      const userId: string = req.user?.userId as string;

      const result = await this.service.getTransactionById({
        transactionId,
        userId,
      });

      return res.json(result);
    } catch (e) {
      console.error(e);
      return res.json(e);
    }
  };

  createTransaction = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const orderIds: string[] = req.body.orderIds;
      const userId: string = req.user?.userId as string;

      const result = await this.service.create({ orderIds, userId });

      return res.json(result);
    } catch (e) {
      next(e);
    }
  };
}
