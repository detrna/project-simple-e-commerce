import { IOrderRepository } from "./Iorder.repository";
import { CreateOrderDTO, Order } from "./Order";
export declare class OrderService {
    private OrderRepository;
    constructor(OrderRepository: IOrderRepository);
    getMyOrders(id: string): Promise<Order[]>;
    createOrder(data: CreateOrderDTO): Promise<Order>;
    payOrder(data: {
        userId: string;
        orderId: string;
    }): Promise<Order>;
    getOrderByStoreId(id: string): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
}
//# sourceMappingURL=order.service.d.ts.map