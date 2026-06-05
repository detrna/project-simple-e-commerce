import { IOrderRepository } from "./Iorder.repository";
import { CreateOrderDTO, Order } from "./Order";
export declare class OrderRepository implements IOrderRepository {
    getMyOrders(id: string): Promise<Order[]>;
    createOrder(data: CreateOrderDTO): Promise<Order>;
    getOrderById(id: string): Promise<Order | null>;
    payOrder(id: string): Promise<Order>;
    getOrdersByStoreId(id: string): Promise<Order[]>;
}
//# sourceMappingURL=order.repository.d.ts.map