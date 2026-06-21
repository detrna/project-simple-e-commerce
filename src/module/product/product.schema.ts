import z from "zod";
import { PaginationSchema } from "../../middleware/pagination";

export const GetAllProductsQuery = z.object({
  priceMin: z.coerce.number().optional(),
  priceMax: z.coerce.number().optional(),
  locations: z.array(z.string()).optional(),
  subcategory: z.string().optional(),
  category: z.string().optional(),
});

export const GetAllProductsSchema = z.object({
  query: z.intersection(PaginationSchema, GetAllProductsQuery),
});
