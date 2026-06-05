"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = require("../../middleware/authenticate");
const order_container_1 = require("../order/order.container");
const router = (0, express_1.Router)();
router.get("/:storeId/orders", authenticate_1.authenticate, order_container_1.orderController.getOrderByStoreId);
exports.default = router;
//# sourceMappingURL=store.routes.js.map