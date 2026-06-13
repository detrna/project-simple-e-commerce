import { number, string, z } from "zod";
import { PaginationSchema } from "../../middleware/pagination";

export const CreateOrderSchema = z.object({
  params: z.object({ variantId: string() }),
  body: z.object({ quantity: number() }),
});

export const GetOrderByIdSchema = z.object({
  params: z.object({ id: string() }),
});

export const GetMyOrdersSchema = z.object({
  query: PaginationSchema,
});

export const GetOrdersByStoreIdSchema = z.object({
  params: z.object({ storeId: string() }),
  query: PaginationSchema,
});

export const PayOrderSchema = z.object({
  params: z.object({ id: string() }),
});
