import { TransactionController } from "./transaction.controller";
import { TransactionRepository } from "./transaction.repository";
import { TransactionService } from "./transaction.service";

export const transactionRepository = new TransactionRepository();
export const transactionService = new TransactionService(transactionRepository);
export const transactionController = new TransactionController(
  transactionService,
);
