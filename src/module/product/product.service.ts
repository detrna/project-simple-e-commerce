
import { Product } from "./Product";
import { ProductRepository } from "./product.repository";


export class ProductService{
    public repo = new ProductRepository
    async getAllProducts(id: any): Promise<Product[]>{
        try{

            const result = await this.repo.getAllProductsByStoreId(id)
            return result;
        } catch(e){
            throw new Error("Error")
        }
    }
    async createProduct(body: any): Promise<Product>{
        const result = await this.repo.createProduct(body)
        return result;
    }
    async getProducts(id: any): Promise<Product>{
        const result = await this.repo.getProductById(id);
        return result
    }
    async deleteProduct(id: any): Promise<boolean>{
        const result = await this.repo.deleteProduct(id);
        return true
    }
}