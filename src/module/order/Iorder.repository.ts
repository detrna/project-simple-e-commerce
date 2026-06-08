import { pagination } from "../../middleware/pagination";
import { CreateOrderDTO, Order } from "./Order";

export interface IOrderRepository {
  getMyOrders(data: {
    userId: string;
    pagination: pagination;
  }): Promise<Order[]>;
  createOrder(data: CreateOrderDTO): Promise<Order>;
  getOrderById(id: string): Promise<Order | null>;
  payOrder(id: string): Promise<Order>;
  getOrdersByStoreId(data: {
    storeId: string;
    pagination: pagination;
  }): Promise<Order[]>;
  getOrdersByIds(id: string[]): Promise<Order[]>;
}
