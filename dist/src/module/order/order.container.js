"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = exports.orderService = exports.orderRepository = void 0;
const order_controller_1 = require("./order.controller");
const order_repository_1 = require("./order.repository");
const order_service_1 = require("./order.service");
exports.orderRepository = new order_repository_1.OrderRepository();
exports.orderService = new order_service_1.OrderService(exports.orderRepository);
exports.orderController = new order_controller_1.OrderController(exports.orderService);
//# sourceMappingURL=order.container.js.map