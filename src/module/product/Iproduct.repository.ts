import { pagination } from "../../middleware/pagination";
import { GetAllProductsQuery, Product } from "./Product";

export interface IProductRepository {
  getAllProducts(data: {
    pagination: pagination;
    query: GetAllProductsQuery;
  }): Promise<Product[]>;
  getAllProductsByStoreId(id: any): Promise<Product[]>;
  createProduct(data: any): Promise<Product>;
  getProductById(id: any): Promise<Product | null>;
  deleteProduct(id: any): Promise<boolean>;
  getByOwnerId(productId: string, ownerId: string): Promise<Product | null>;
}
