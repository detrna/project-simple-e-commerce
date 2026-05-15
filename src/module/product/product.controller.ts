import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./Product";


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
    
      const service = new ProductService();
      const productData: CreateProductDTO = req.body;
      const result = await service.createProduct(productData);
        return res.json(result);
    
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

      console.log(result)
      return res.json(result);
    } catch (e) {
        if (e instanceof Error) {
            console.log("controller:", e)
            return res.status(400).json(e.message);
        }   
        console.log("outer:", e)
      return res.json(e);
    }
  }
}
