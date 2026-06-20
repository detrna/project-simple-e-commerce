import { prisma } from "../../shared/prismaHelper";
import { Category } from "./Category";
import { ICategoryRepository } from "./Icategory.repository";

export class CategoryRepository implements ICategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    try {
      const rows = await prisma.category.findMany({
        include: { subcategory: true },
      });

      return rows;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
