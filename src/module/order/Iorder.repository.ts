import { CreateOrderDTO, Order } from "./Order";

export interface IOrderRepository {
  getMyOrders(id: string): Promise<Order[]>;
  createOrder(data: CreateOrderDTO): Promise<Order>;
  getOrderById(id: string): Promise<Order | null>;
  payOrder(id: string): Promise<Order>;
  getOrdersByStoreId(id: string): Promise<Order[]>;
  getOrdersByIds(id: string[]): Promise<Order[]>;
}
