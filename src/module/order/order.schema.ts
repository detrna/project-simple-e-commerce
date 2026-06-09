import { number, string, z } from "zod";
import { PaginationSchema } from "../../middleware/pagination";

export const CreateOrderSchema = z.object({
  variantId: string(),
  userId: string(),
  quantity: number(),
});

export const GetOrderByIdSchema = z.object({
  params: z.object({ id: string() }),
});

export const GetMyOrdersSchema = z.object({
  pagination: PaginationSchema,
  userId: string(),
});

export const GetOrdersByStoreIdSchema = z.object({
  storeId: string(),
  pagination: PaginationSchema,
});
