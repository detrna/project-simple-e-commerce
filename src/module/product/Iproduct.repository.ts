import { Product } from "./Product";

export interface IProductRepository {
  getAllProductsByStoreId(id: any): Promise<Product[]>;
  createProduct(data: any): Promise<Product>;
  getProductById(id: any): Promise<Product>;
  deleteProduct(id: any): Promise<boolean>;
  getByOwnerId(productId: string, ownerId: string): Promise<Product | null>;
}
