"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = require("../../middleware/authenticate");
const order_container_1 = require("./order.container");
const router = (0, express_1.Router)();
router.get("", authenticate_1.authenticate, order_container_1.orderController.getMyOrders);
router.get("/:id", authenticate_1.authenticate, order_container_1.orderController.getOrderById);
router.patch("/:id/pay", authenticate_1.authenticate, order_container_1.orderController.payOrder);
exports.default = router;
//# sourceMappingURL=order.routes.js.map