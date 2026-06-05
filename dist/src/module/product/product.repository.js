"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
const product_mapper_1 = require("./product.mapper");
class ProductRepository {
    async getAllProductsByStoreId(id) {
        try {
            const rows = await prismaHelper_1.prisma.product.findMany({ where: { storeId: id } });
            const products = rows.map((rows) => product_mapper_1.ProductMapper.toDomain(rows));
            return products;
        }
        catch (e) {
            console.log(e);
            throw new Error("Failed to fetch products");
        }
    }
    async createProduct(data) {
        try {
            const result = await prismaHelper_1.prisma.product.create({
                data: {
                    name: data.name,
                    category: data.category,
                    subcategory: data.subcategory,
                    storeId: data.storeId,
                },
            });
            const product = product_mapper_1.ProductMapper.toDomain(result);
            return product;
        }
        catch (e) {
            console.log(e);
            throw new Error("Failed to create product");
        }
    }
    async getProductById(id) {
        try {
            const rows = await prismaHelper_1.prisma.product.findUnique({ where: { id: id } });
            const product = product_mapper_1.ProductMapper.toDomain(rows);
            return product;
        }
        catch (e) {
            console.log(e);
            throw new Error("Failed to fetch product");
        }
    }
    async deleteProduct(id) {
        try {
            const result = await prismaHelper_1.prisma.product.delete({ where: { id: id } });
            return true;
        }
        catch (e) {
            console.log(e);
            throw new Error("Failed to delete product");
        }
    }
    async getByOwnerId(productId, ownerId) {
        try {
            const rows = await prismaHelper_1.prisma.product.findFirst({
                where: { id: productId, store: { userId: ownerId } },
            });
            console.log("ROWS:", rows);
            return product_mapper_1.ProductMapper.toDomain(rows);
        }
        catch (e) {
            console.error(e);
            throw new Error("Failed to fetch product by owner id");
        }
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map