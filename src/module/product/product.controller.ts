import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import { CreateProductDTO, GetAllProductsQuery } from "./Product";
import { StoreService } from "../store/store.service";
import { pagination } from "../../middleware/pagination";
import { responseHelper, responseHelperDTO } from "../../shared/responseHelper";

export class ProductController {
  constructor(private service: ProductService) {
    this.service = service;
  }

  getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const pagination: pagination = req.pagination!;
      const query: GetAllProductsQuery = req.validatedQuery!;

      const result = await this.service.getAllProducts({ pagination, query });

      const payload: responseHelperDTO = {
        result,
        message: "Products fetched successfully",
        pagination,
      };

      return responseHelper(res, payload);
    } catch (e) {
      next(e);
    }
  };

  getProductsByStoreId = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const storeId = req.query.id;

      if (typeof storeId !== "string")
        return res.status(400).json({ message: "Invalid id" });

      const result = await this.service.getProductsByStoreId(storeId);

      return res.json(result);
    } catch (e) {
      next(e);
    }
  };

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const storeService = new StoreService();
      const existingStore = await storeService.getByUid(req.body.storeId);

      if (!existingStore) {
        return res.status(404).json({ message: "Store not found" });
      }

      if (existingStore.id !== req.user!.userId) {
        return res
          .status(403)
          .json({ message: "Unauthorized to create product for this store" });
      }

      const productData: CreateProductDTO = req.body;
      const result = await this.service.createProduct(productData);
      return res.json(result);
    } catch (e) {
      next(e);
    }
  };

  getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getProducts(req.params.id as string);

      return res.json(result);
    } catch (e) {
      next(e);
    }
  };

  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.deleteProduct(req.params.id as string);

      return res.json(result);
    } catch (e) {
      next(e);
    }
  };

  getSearchRecomendations = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const search = req.params.search as string;

      const result = await this.service.getSearchRecomendations(search);

      return responseHelper(res, { result });
    } catch (e) {
      next(e);
    }
  };
}
