import { OrderService } from "../../src/module/order/order.service";
import { TransactionService } from "../../src/module/transaction/transaction.service";
import { mockRepository } from "./repository.mock";

export const mockService = {
  order: new OrderService(mockRepository.order),
  transaction: new TransactionService(
    mockRepository.transaction,
    mockRepository.order,
  ),
};
