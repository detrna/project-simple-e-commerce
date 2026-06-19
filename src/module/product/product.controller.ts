import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./Product";
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

      const result = await this.service.getAllProducts(pagination);

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
  ): Promise<Response> => {
    try {
      const storeId = req.query.id;

      if (typeof storeId !== "string") {
        return res.status(400).json({ message: "Invalid id" });
      }
      const result = await this.service.getProductsByStoreId(storeId);
      return res.json(result);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  };
  createProduct = async (req: Request, res: Response): Promise<Response> => {
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
      return res.status(400).json({
        message: e instanceof Error ? e.message : "An error occurred",
      });
    }
  };
  getProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await this.service.getProducts(req.params.id as string);
      return res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        return res.status(400).json({ message: e.message });
      }
      return res.json(e);
    }
  };
  deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await this.service.deleteProduct(req.params.id as string);
      return res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("controller:", e);
        return res.status(400).json(e.message);
      }
      return res.json(e);
    }
  };
}
