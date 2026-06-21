import { pagination } from "../../middleware/pagination";
import { prisma } from "../../shared/prismaHelper";
import { IProductRepository } from "./Iproduct.repository";
import { CreateProductDTO, GetAllProductsQuery, Product } from "./Product";

export class ProductRepository implements IProductRepository {
  async getAllProducts(data: {
    pagination: pagination;
    query: GetAllProductsQuery;
  }): Promise<Product[]> {
    try {
      const query: GetAllProductsQuery = data.query;
      const { limit, cursor } = data.pagination;
      const rows = await prisma.product.findMany({
        include: { store: true, variants: true, subcategory: true },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        skip: cursor ? 1 : 0,
        take: limit,
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          variants: {
            some: { price: { gte: query.priceMin, lte: query.priceMax } },
          },
          subcategory: { categoryName: query.category },
          subcategoryName: query.subcategory,
          store: { address: { in: query.locations } },
        },
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
        include: { store: true, variants: true, subcategory: true },
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
          subcategoryName: data.subcategory,
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
