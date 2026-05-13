import { prisma } from "../../shared/prismaHelper"
import { IProductRepository } from "./Iproduct.repository"
import { Product } from "./Product"
import { ProductMapper } from "./product.mapper"

export class ProductRepository implements IProductRepository{
    async getAllProductsByStoreId(id: string): Promise<Product[]>{
        try{
            const rows = await prisma.product.findMany({where: {storeId: id}})
            const products = rows.map(rows => ProductMapper.toDomain(rows))
            return products
        } catch(e){
            throw new Error("Error")
        }
    }
    async createProduct(data: any): Promise<Product>{
        try{
            const result = await prisma.product.create({data: data})
            const product = ProductMapper.toDomain(result)
            return product
        } catch(e){
            throw new Error("Query Failed")
        }
    }
    async getProductById(id: any): Promise<Product>{
        try {
            const rows = await prisma.product.findUnique({where: id = id})
            const product = ProductMapper.toDomain(rows)
            return product
        } catch(e){
            throw new Error("Query Failed")
        }
    }
    async deleteProduct(id: any): Promise<boolean>{
        try{
            const result = await prisma.product.delete({where: id = id})
            return true
        } catch(e){
            throw new Error("Query Failed")
        }
    }
}