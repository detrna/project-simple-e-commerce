import z from "zod";
import { PaginationSchema } from "../../middleware/pagination";

export const GetAllProductsSchema = z.object({
  query: PaginationSchema,
});
