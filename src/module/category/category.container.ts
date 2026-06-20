import { CategoryController } from "./category.controller";
import { CategoryRepository } from "./category.repository";
import { CategoryService } from "./category.service";

export const categoryRepository = new CategoryRepository();
export const categoryService = new CategoryService(categoryRepository);
export const categoryController = new CategoryController(categoryService);
