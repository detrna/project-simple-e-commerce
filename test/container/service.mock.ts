import { OrderService } from "../../src/module/order/order.service";
import { TransactionService } from "../../src/module/transaction/transaction.service";
import { mockRepository } from "./repository.mock";

export class mockService {
  static order: OrderService = new OrderService(mockRepository.order);
  static transaction: TransactionService = new TransactionService(
    mockRepository.transaction,
    mockRepository.order,
  );
}
