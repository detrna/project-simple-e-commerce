"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
class OrderRepository {
    async getMyOrders(id) {
        try {
            const rows = await prismaHelper_1.prisma.order.findMany({ where: { userId: id } });
            return rows;
        }
        catch (e) {
            throw e;
        }
    }
    createOrder(data) {
        try {
            console.log(data.variantId);
            const result = prismaHelper_1.prisma.order.create({ data });
            return result;
        }
        catch (e) {
            throw e;
        }
    }
    getOrderById(id) {
        try {
            const result = prismaHelper_1.prisma.order.findUnique({ where: { id: id } });
            return result;
        }
        catch (e) {
            throw e;
        }
    }
    payOrder(id) {
        try {
            const result = prismaHelper_1.prisma.order.update({
                where: { id: id },
                data: { payment: true },
            });
            return result;
        }
        catch (e) {
            throw e;
        }
    }
    getOrdersByStoreId(id) {
        try {
            const rows = prismaHelper_1.prisma.order.findMany({
                where: { variant: { product: { storeId: id } } },
            });
            return rows;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map