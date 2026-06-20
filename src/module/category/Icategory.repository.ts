import { Category } from "./Category";

export interface ICategoryRepository {
  getAllCategories(): Promise<Category[]>;
}
