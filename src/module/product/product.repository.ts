import { pagination } from "../../middleware/pagination";
import { prisma } from "../../shared/prismaHelper";
import { IProductRepository } from "./Iproduct.repository";
import { CreateProductDTO, Product } from "./Product";

export class ProductRepository implements IProductRepository {
  async getAllProducts(pagination: pagination): Promise<Product[]> {
    try {
      const { limit, cursor } = pagination;
      const rows = await prisma.product.findMany({
        include: { store: true, variants: true, subcategory: true },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        skip: cursor ? 1 : 0,
        take: limit,
        cursor: cursor ? { id: cursor } : undefined,
      });

      return rows;
    } catch (e) {
      throw e;
    }
  }

  async getAllProductsByStoreId(id: string): Promise<Product[]> {
    try {
      const rows = await prisma.product.findMany({
        where: { storeId: id },
        include: { store: true, variants: true, category: true },
      });

      return rows;
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
          subcategoryId: data.subcategoryId,
          storeId: data.storeId,
        },
      });

      return result;
    } catch (e) {
      console.log(e);
      throw new Error("Failed to create product");
    }
  }
  async getProductById(id: string): Promise<Product | null> {
    try {
      const rows = await prisma.product.findUnique({ where: { id: id } });

      return rows;
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

      return rows;
    } catch (e) {
      console.error(e);
      throw new Error("Failed to fetch product by owner id");
    }
  }
}
