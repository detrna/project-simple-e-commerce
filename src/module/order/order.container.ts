import { OrderController } from "./order.controller";
import { OrderRepository } from "./order.repository";
import { OrderService } from "./order.service";

const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
export const orderController = new OrderController(orderService);
