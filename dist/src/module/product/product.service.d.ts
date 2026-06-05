import { CreateProductDTO, Product } from "./Product";
import { ProductRepository } from "./product.repository";
export declare class ProductService {
    repo: ProductRepository;
    getAllProducts(id: string): Promise<Product[]>;
    createProduct(data: CreateProductDTO): Promise<Product>;
    getProducts(id: string): Promise<Product>;
    deleteProduct(id: string): Promise<boolean>;
}
//# sourceMappingURL=product.service.d.ts.map