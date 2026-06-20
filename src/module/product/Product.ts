import { Subcategory } from "../category/Category";
import { Variant } from "../variant/Variant";

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

export type GetAllProductsQuery = {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
};
