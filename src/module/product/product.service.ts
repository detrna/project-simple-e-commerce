
import { CreateProductDTO, Product } from "./Product";
import { ProductRepository } from "./product.repository";


export class ProductService{
    public repo = new ProductRepository
    async getAllProducts(id: string): Promise<Product[]>{
      
            const result = await this.repo.getAllProductsByStoreId(id)
            if(result.length === 0){
                throw new Error("No products found")
            }
            return result;
        
    }
    async createProduct(data: CreateProductDTO): Promise<Product>{
            const result = await this.repo.createProduct(data)
            if(!result){
                throw new Error("Failed to create product")
            }
            return result;
        
    }
    async getProducts(id: string): Promise<Product>{
        const result = await this.repo.getProductById(id);
        if(!result){
            throw new Error("Product not found")
        }
        return result
    }
    async deleteProduct(id: string): Promise<boolean>{
        const existingProduct = await this.repo.getProductById(id);
        if(!existingProduct){
            throw new Error("Product not found")
        }

        const result = await this.repo.deleteProduct(id);
        if(!result){
            throw new Error("Failed to delete product")
        }
        return result
    }
}