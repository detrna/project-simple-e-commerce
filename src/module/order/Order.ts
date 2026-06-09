import { z } from "zod";
import {
  CreateOrderSchema,
  GetMyOrdersSchema,
  GetOrderByIdSchema,
  GetOrdersByStoreIdSchema,
} from "./order.schema";

export type Order = {
  id: string;
  quantity: number;
  payment: boolean;
  shipment: Shipment;
  fee: number;
  transactionId: string | null;
  variantId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

type Shipment =
  | "WAITING_OWNER"
  | "WAITING_COURIER"
  | "ON_THE_WAY"
  | "DELIVERED";

export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;
export type GetOrderByStoreIdDTO = z.infer<typeof GetOrderByIdSchema>;
export type GetMyOrdersDTO = z.infer<typeof GetMyOrdersSchema>;
export type GetOrdersByStoreIdDTO = z.infer<typeof GetOrdersByStoreIdSchema>;
