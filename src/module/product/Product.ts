import { Subcategory } from "../category/Category";

export type Product = {
  id: string;
  name: string;
  subcategory?: Subcategory;
  createdAt: Date;
};

export type CreateProductDTO = {
  name: string;
  subcategoryId: string;
  storeId: string;
};
