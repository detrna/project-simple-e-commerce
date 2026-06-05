"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
class TransactionRepository {
    async getMyTransactions(userId) {
        try {
            const rows = await prismaHelper_1.prisma.transaction.findMany({
                where: { order: { some: { userId: userId } } },
                include: { order: true },
            });
            return rows;
        }
        catch (e) {
            throw e;
        }
    }
    async getTransactionById(id) {
        try {
            const rows = await prismaHelper_1.prisma.transaction.findUnique({
                where: { id: id },
                include: { order: true },
            });
            return rows;
        }
        catch (e) {
            throw e;
        }
    }
    async create(orderId) {
        try {
            const result = await prismaHelper_1.prisma.$transaction(async (tx) => {
                const newTransaction = await tx.transaction.create({});
                const orders = await tx.order.updateManyAndReturn({
                    where: { id: { in: orderId } },
                    data: { transactionId: newTransaction.id },
                });
                const payload = {
                    id: newTransaction.id,
                    order: orders,
                    createdAt: newTransaction.createdAt,
                };
                return payload;
            });
            return result;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.TransactionRepository = TransactionRepository;
//# sourceMappingURL=transaction.repository.js.map