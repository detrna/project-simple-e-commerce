"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
        this.getMyOrders = async (req, res) => {
            try {
                const userId = req.user?.userId;
                const result = await this.orderService.getMyOrders(userId);
                return res.json(result);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.error(e);
                    return res.json(e);
                }
                console.error(e);
            }
        };
        this.createOrder = async (req, res) => {
            try {
                const quantity = req.body.quantity;
                const userId = req.user?.userId;
                const variantId = req.params.variantId;
                const payload = { quantity, userId, variantId };
                console.log(payload);
                const result = await this.orderService.createOrder(payload);
                res.json(result);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.error(e);
                    res.json(e);
                }
            }
        };
        this.payOrder = async (req, res) => {
            try {
                const orderId = req.params.id;
                const userId = req.user?.userId;
                const payload = { orderId, userId };
                const result = await this.orderService.payOrder(payload);
                res.json(result);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.error(e);
                    res.json(e);
                }
            }
        };
        this.getOrderByStoreId = async (req, res) => {
            try {
                const id = req.params.id;
                const result = await this.orderService.getOrderByStoreId(id);
                res.json(result);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.error(e);
                    res.json(e);
                }
            }
        };
        this.getOrderById = async (req, res) => {
            try {
                const id = req.params.id;
                const result = await this.orderService.getOrderById(id);
                res.json(result);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.error(e);
                    res.json(e);
                }
            }
        };
        this.orderService = orderService;
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map