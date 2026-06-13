import { z } from "zod";
import { GetOrderByIdSchema } from "./order.schema";

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

export type CreateOrderDTO = {
  variantId: string;
  userId: string;
  quantity: number;
};

export type GetOrderByStoreIdDTO = z.infer<typeof GetOrderByIdSchema>;
