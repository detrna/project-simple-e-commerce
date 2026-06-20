import { redis } from "../../shared/RedisHelper";
import { Category, Subcategory } from "./Category";
import { CategoryRepository } from "./category.repository";

export class CategoryService {
  constructor(private repo: CategoryRepository) {
    this.repo = repo;
  }

  async getCategories(): Promise<Category[]> {
    const result: Category[] = await this.repo.getAllCategories();

    function formatCategory(categories: Category[]) {
      const cats: Category[] = categories.map((c, _) => {
        return {
          ...c,
          name: formatPascal(c.name),
          subcategory: formatSubcategories(c.subcategory),
        };
      });
      return cats;
    }

    function formatSubcategories(subcategories: Subcategory[]) {
      const subcats = subcategories.map((s, _) => {
        return { ...s, name: formatPascal(s.name) };
      });
      return subcats;
    }

    function formatPascal(text: string): string {
      const formatted =
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      return formatted;
    }

    const formattedCategory = formatCategory(result);

    redis.set({ entityName: "category", key: "", value: formattedCategory });

    return formattedCategory;
  }
}
