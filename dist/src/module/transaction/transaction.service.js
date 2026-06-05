"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const order_container_1 = require("../order/order.container");
class TransactionService {
    constructor(repo) {
        this.repo = repo;
        this.getMyTransactions = async (userId) => {
            const result = await this.repo.getMyTransactions(userId);
            if (result.length == 0) {
                throw new Error("This user has yet to make transaction");
            }
            return result;
        };
        this.getTransactionById = async (data) => {
            const result = await this.repo.getTransactionById(data.transactionId);
            if (!result) {
                throw new Error("Couldn't find requested transaction");
            }
            if (result?.order[0].userId !== data.userId) {
                throw new Error("This user didn't own this transaction");
            }
            return result;
        };
        this.create = async (data) => {
            const existingOrders = await Promise.all(data.orderIds.map((orderId) => order_container_1.orderRepository.getOrderById(orderId)));
            existingOrders.forEach((order) => {
                if (!order) {
                    throw new Error("Couldn't find one of the orders");
                }
                if (order.userId !== data.userId) {
                    throw new Error("This user didn't own one of the orders");
                }
            });
            const result = await this.repo.create(data.orderIds);
            return result;
        };
        this.repo = repo;
    }
}
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map