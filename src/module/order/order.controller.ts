import { NextFunction, Request, Response } from "express";
import { CreateOrderDTO, Order } from "./Order";
import { OrderService } from "./order.service";
import { pagination } from "../../middleware/pagination";
import { responseHelper, responseHelperDTO } from "../../shared/responseHelper";

export class OrderController {
  constructor(private orderService: OrderService) {
    this.orderService = orderService;
  }

  getMyOrders = async (req: Request, res: Response) => {
    try {
      const userId: string = req.user?.userId as string;
      const pagination: pagination = req.pagination!;

      const result: Order[] = await this.orderService.getMyOrders({
        userId,
        pagination,
      });

      const payload: responseHelperDTO = {
        result,
        message: "User's list of orders fetched successfully",
        pagination,
      };

      return responseHelper(res, payload);
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
      const quantity: number = req.body.quantity;
      const userId: string = req.user?.userId as string;
      const variantId: string = req.params.variantId as string;
      const id: string = req.body?.orderId;

      const payload: CreateOrderDTO = { quantity, userId, variantId, id };

      const result: Order = await this.orderService.createOrder(payload);

      return responseHelper(res, {
        result,
        message: "Order created successfully",
      });
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        res.json(e);
      }
    }
  };

  payOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orderId: string = req.params.id as string;
      const userId: string = req.user?.userId as string;
      const payload = { orderId, userId };

      const result: Order = await this.orderService.payOrder(payload);

      return responseHelper(res, {
        result,
        message: "Order paid successfully",
      });
    } catch (e) {
      next(e);
    }
  };

  getOrderByStoreId = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const storeId: string = req.params.id as string;
      const userId: string = req.user?.userId as string;
      const pagination: pagination = req.pagination!;

      const result: Order[] = await this.orderService.getOrderByStoreId({
        storeId,
        userId,
        pagination,
      });

      const payload: responseHelperDTO = {
        result,
        message: "Store's order fetched successfully",
        pagination,
      };

      return responseHelper(res, payload);
    } catch (e) {
      next(e);
    }
  };

  getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id as string;
      const result: Order = await this.orderService.getOrderById(id);

      return responseHelper(res, {
        result,
        message: "Order fetched successfully",
      });
    } catch (e) {
      next(e);
    }
  };
}
