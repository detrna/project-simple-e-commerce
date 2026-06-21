import z from "zod";
import { Subcategory } from "../category/Category";
import { Variant } from "../variant/Variant";
import { GetAllProductsQuery } from "./product.schema";

export type Product = {
  id: string;
  name: string;
  variants?: Variant[];
  subcategory?: Subcategory;
  createdAt: Date;
};

export type CreateProductDTO = {
  name: string;
  subcategory: string;
  storeId: string;
};

export type GetAllProductsQuery = z.infer<typeof GetAllProductsQuery>;
