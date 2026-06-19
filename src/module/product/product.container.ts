import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";

export const productRepository = new ProductRepository();
export const productService = new ProductService(productRepository);
export const productController = new ProductController(productService);
