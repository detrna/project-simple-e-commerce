import { IProductRepository } from "./Iproduct.repository";
import { CreateProductDTO, Product } from "./Product";
export declare class ProductRepository implements IProductRepository {
    getAllProductsByStoreId(id: string): Promise<Product[]>;
    createProduct(data: CreateProductDTO): Promise<Product>;
    getProductById(id: string): Promise<Product>;
    deleteProduct(id: string): Promise<boolean>;
    getByOwnerId(productId: string, ownerId: string): Promise<Product | null>;
}
//# sourceMappingURL=product.repository.d.ts.map