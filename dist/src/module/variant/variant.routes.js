"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const variant_controller_1 = require("./variant.controller");
const authenticate_1 = require("../../middleware/authenticate");
const order_container_1 = require("../order/order.container");
const router = (0, express_1.Router)();
const controller = new variant_controller_1.VariantController();
router.delete("/:id", authenticate_1.authenticate, controller.delete);
router.post("/:variantId/orders", authenticate_1.authenticate, order_container_1.orderController.createOrder);
exports.default = router;
//# sourceMappingURL=variant.routes.js.map