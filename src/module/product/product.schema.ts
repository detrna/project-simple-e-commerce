import z from "zod";
import { PaginationSchema } from "../../middleware/pagination";
import { OrderBySchema } from "../../middleware/inputValidation";

export const GetAllProductsQuery = z.object({
  priceMin: z.coerce.number().optional(),
  priceMax: z.coerce.number().optional(),
  subcategory: z.string().optional(),
  category: z.string().optional(),
  search: OrderBySchema,
  price: OrderBySchema,
  rating: OrderBySchema,
  sold: OrderBySchema,
  locations: z.preprocess((value) => {
    if (typeof value === "string") return [value];
    return value;
  }, z.array(z.string()).optional()),
});

export const GetAllProductsSchema = z.object({
  query: z.intersection(PaginationSchema, GetAllProductsQuery),
});

export const GetSearchRecomendation = z.object({
  params: z.object({
    search: z.string(),
  }),
});
