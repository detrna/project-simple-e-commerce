"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
class TransactionController {
    constructor(service) {
        this.service = service;
        this.getMyTransactions = async (req, res) => {
            try {
                const userId = req.user?.userId;
                const result = await this.service.getMyTransactions(userId);
                return res.json(result);
            }
            catch (e) {
                console.error(e);
                return res.json(e);
            }
        };
        this.getTransactionById = async (req, res) => {
            try {
                const transactionId = req.params.id;
                const userId = req.user?.userId;
                const result = await this.service.getTransactionById({
                    transactionId,
                    userId,
                });
                return res.json(result);
            }
            catch (e) {
                console.error(e);
                return res.json(e);
            }
        };
        this.createTransaction = async (req, res) => {
            try {
                const orderIds = req.body.orderIds;
                const userId = req.user?.userId;
                const result = await this.service.create({ orderIds, userId });
                return res.json(result);
            }
            catch (e) {
                console.error(e);
                return res.json(e);
            }
        };
        this.service = service;
    }
}
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map