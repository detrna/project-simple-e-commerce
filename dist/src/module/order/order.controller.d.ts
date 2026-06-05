import { Request, Response } from "express";
import { OrderService } from "./order.service";
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getMyOrders: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    createOrder: (req: Request, res: Response) => Promise<void>;
    payOrder: (req: Request, res: Response) => Promise<void>;
    getOrderByStoreId: (req: Request, res: Response) => Promise<void>;
    getOrderById: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=order.controller.d.ts.map