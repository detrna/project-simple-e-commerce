export class Product {
  constructor(
    public id: string,
    public name: string,
    public category: Category,
    public subCategory: Subcategory,
    public createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.subCategory = subCategory;
    this.createdAt = createdAt;
  }
}

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
