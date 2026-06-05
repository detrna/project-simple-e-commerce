import { prisma } from "../../shared/prismaHelper";
import { IProductRepository } from "./Iproduct.repository";
import { CreateProductDTO, Product } from "./Product";
import { ProductMapper } from "./product.mapper";

export class ProductRepository implements IProductRepository {
  async getAllProductsByStoreId(id: string): Promise<Product[]> {
    try {
      const rows = await prisma.product.findMany({ where: { storeId: id } });
      const products = rows.map((rows) => ProductMapper.toDomain(rows));
      return products;
    } catch (e) {
      console.log(e);
      throw new Error("Failed to fetch products");
    }
  }
  async createProduct(data: CreateProductDTO): Promise<Product> {
    try {
      const result = await prisma.product.create({
        data: {
          name: data.name,
          category: data.category,
          subcategory: data.subcategory,
          storeId: data.storeId,
        },
      });

      const product = ProductMapper.toDomain(result);
      return product;
    } catch (e) {
      console.log(e);
      throw new Error("Failed to create product");
    }
  }
  async getProductById(id: string): Promise<Product> {
    try {
      const rows = await prisma.product.findUnique({ where: { id: id } });
      const product = ProductMapper.toDomain(rows);
      return product;
    } catch (e) {
      console.log(e);
      throw new Error("Failed to fetch product");
    }
  }
  async deleteProduct(id: string): Promise<boolean> {
    try {
      const result = await prisma.product.delete({ where: { id: id } });
      return true;
    } catch (e) {
      console.log(e);
      throw new Error("Failed to delete product");
    }
  }
  async getByOwnerId(
    productId: string,
    ownerId: string,
  ): Promise<Product | null> {
    try {
      const rows = await prisma.product.findFirst({
        where: { id: productId, store: { userId: ownerId } },
      });
      console.log("ROWS:", rows);
      return ProductMapper.toDomain(rows);
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch product by owner id");
    }
  }
}
