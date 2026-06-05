"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_repository_1 = require("./product.repository");
class ProductService {
    constructor() {
        this.repo = new product_repository_1.ProductRepository;
    }
    async getAllProducts(id) {
        const result = await this.repo.getAllProductsByStoreId(id);
        if (result.length === 0) {
            throw new Error("No products found");
        }
        return result;
    }
    async createProduct(data) {
        const result = await this.repo.createProduct(data);
        if (!result) {
            throw new Error("Failed to create product");
        }
        return result;
    }
    async getProducts(id) {
        const result = await this.repo.getProductById(id);
        if (!result) {
            throw new Error("Product not found");
        }
        return result;
    }
    async deleteProduct(id) {
        const existingProduct = await this.repo.getProductById(id);
        if (!existingProduct) {
            throw new Error("Product not found");
        }
        const result = await this.repo.deleteProduct(id);
        if (!result) {
            throw new Error("Failed to delete product");
        }
        return result;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map