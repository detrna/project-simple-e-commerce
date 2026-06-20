import { Request, Response, NextFunction } from "express";
import { CategoryService } from "./category.service";
import { responseHelper } from "../../shared/responseHelper";

export class CategoryController {
  constructor(private service: CategoryService) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getCategories();

      return responseHelper(res, {
        result,
        message: "Categories Fetched Successfully",
      });
    } catch (e) {
      next(e);
    }
  };
}
