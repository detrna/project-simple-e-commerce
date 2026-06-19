export type Product = {
  id: string;
  name: string;
  category: Category;
  subcategory: Subcategory;
  createdAt: Date;
};

export type CreateProductDTO = {
  name: string;
  category: Category;
  subcategory: Subcategory;
  storeId: string;
};

type Category = "ELECTRONICS" | "BOOKS" | "FASHION";
type Subcategory =
  | "PHONE"
  | "LAPTOP"
  | "TV"
  | "NOVEL"
  | "PSYCHOLOGY"
  | "HEALTH"
  | "SHIRT"
  | "JACKET"
  | "TROUSER";
