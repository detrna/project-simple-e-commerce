import { Request, Response } from "express"
import { ProductService } from "./product.service"
import { ProductRepository } from "./product.repository"

export class ProductController{
    public service = new ProductService()
    async getAllProducts(req: Request, res: Response): Promise<Response>{
        try{
            const result = await this.service.getAllProducts(req.query.id)
            return res.json(result)
        } catch(e){
            return res.json(e)
        }
    }
    async createProduct(req: Request, res: Response): Promise<Response>{
        try{
            const result = await this.service.createProduct(req.body)
            return res.json(result)
        } catch(e){
            return res.json(e)
        }
    }
    async getProduct(req: Request, res: Response): Promise<Response>{
        try {
            const result = await this.service.createProduct(req.params)
            return res.json(result)
        } catch(e){
            return res.json(e)
        }
    }
    async deleteProduct(req: Request, res: Response): Promise<Response>{
        try {
            const result = await this.service.deleteProduct(req.params)
            return res.json(result)
        } catch(e){
            return res.json(e)
        }
    }
}