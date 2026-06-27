import { pagination } from "../../middleware/pagination";
import { IProductRepository } from "./Iproduct.repository";
import { CreateProductDTO, GetAllProductsQuery, Product } from "./Product";
export class ProductService {
  constructor(private repo: IProductRepository) {
    this.repo = repo;
  }
  async getAllProducts(data: {
    pagination: pagination;
    query: GetAllProductsQuery;
  }): Promise<Product[]> {
    const result = await this.repo.getAllProducts(data);

    return result;
  }

  async getProductsByStoreId(id: string): Promise<Product[]> {
    const result = await this.repo.getAllProductsByStoreId(id);

    if (result.length === 0) throw new Error("No products found");

    return result;
  }

  async createProduct(data: CreateProductDTO): Promise<Product> {
    const result = await this.repo.createProduct(data);

    if (!result) throw new Error("Failed to create product");

    return result;
  }

  async getProducts(id: string): Promise<Product> {
    const result = await this.repo.getProductById(id);

    if (!result) throw new Error("Product not found");

    return result;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const existingProduct = await this.repo.getProductById(id);

    if (!existingProduct) throw new Error("Product not found");

    const result = await this.repo.deleteProduct(id);

    if (!result) throw new Error("Failed to delete product");

    return result;
  }

  async getSearchRecomendations(search: string) {
    const result = await this.repo.getSearchRecomendations(search);

    return result;
  }
}
