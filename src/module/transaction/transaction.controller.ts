import { NextFunction, Request, response, Response } from "express";
import { TransactionService } from "./transaction.service";
import { pagination } from "../../middleware/pagination";
import { responseHelper, responseHelperDTO } from "../../shared/responseHelper";

export class TransactionController {
  constructor(private service: TransactionService) {
    this.service = service;
  }

  getMyTransactions = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userId: string = req.user?.userId as string;
      const pagination: pagination = req.pagination!;

      const result = await this.service.getMyTransactions({
        userId,
        pagination,
      });

      const payload: responseHelperDTO = {
        result,
        message: "User's list of transactions fetched successfully",
        pagination,
      };

      return responseHelper(res, payload);
    } catch (e) {
      next(e);
    }
  };

  getTransactionById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const transactionId: string = req.params.id as string;
      const userId: string = req.user?.userId as string;

      const result = await this.service.getTransactionById({
        transactionId,
        userId,
      });

      responseHelper(res, {
        result,
        message: "Transaction fetched successfully",
      });
    } catch (e) {
      throw e;
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

      responseHelper(res, {
        result,
        message: "Transaction created successfully",
      });
    } catch (e) {
      next(e);
    }
  };
}
