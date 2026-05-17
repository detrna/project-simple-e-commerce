import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./Product";
import { StoreService } from "../store/store.service";

export class ProductController {
  async getAllProducts(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ProductService();
      const storeId = req.query.id;

      if (typeof storeId !== "string") {
        return res.status(400).json({ message: "Invalid id" });
      }
      const result = await service.getAllProducts(storeId);
      return res.json(result);
    } catch (e) {
      console.log(e);
      return res.json(e);
    }
  }
  async createProduct(req: Request, res: Response): Promise<Response> {
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

      const service = new ProductService();
      const productData: CreateProductDTO = req.body;
      const result = await service.createProduct(productData);
      return res.json(result);
    } catch (e) {
      return res
        .status(400)
        .json({
          message: e instanceof Error ? e.message : "An error occurred",
        });
    }
  }
  async getProduct(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ProductService();
      const result = await service.getProducts(req.params.id as string);
      return res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        return res.status(400).json({ message: e.message });
      }
      return res.json(e);
    }
  }
  async deleteProduct(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ProductService();
      const result = await service.deleteProduct(req.params.id as string);
      return res.json(result);
    } catch (e) {
      if (e instanceof Error) {
        console.log("controller:", e);
        return res.status(400).json(e.message);
      }
      return res.json(e);
    }
  }
}
