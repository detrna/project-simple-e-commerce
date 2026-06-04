import { Request, Response } from "express";
import { CreateOrderDTO } from "./Order";
import { OrderService } from "./order.service";

export class OrderController {
  constructor(private orderService: OrderService) {
    this.orderService = orderService;
  }

  getMyOrders = async (req: Request, res: Response) => {
    try {
      const userId: string = req.user?.userId as string;

      const result = await this.orderService.getMyOrders(userId);

      return res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        return res.json(e);
      }
      console.error(e);
    }
  };

  createOrder = async (req: Request, res: Response) => {
    try {
      const quantity = req.body.quantity;
      const userId: string = req.user?.userId as string;
      const variantId: string = req.params.variantId as string;

      const payload: CreateOrderDTO = { quantity, userId, variantId };

      console.log(payload);

      const result = await this.orderService.createOrder(payload);

      res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        res.json(e);
      }
    }
  };

  payOrder = async (req: Request, res: Response) => {
    try {
      const orderId: string = req.params.id as string;
      const userId: string = req.user?.userId as string;
      const payload = { orderId, userId };

      const result = await this.orderService.payOrder(payload);

      res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        res.json(e);
      }
    }
  };

  getOrderByStoreId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as string;

      const result = await this.orderService.getOrderByStoreId(id);

      res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        res.json(e);
      }
    }
  };

  getOrderById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id as string;
      const result = await this.orderService.getOrderById(id);
      res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        res.json(e);
      }
    }
  };
}
