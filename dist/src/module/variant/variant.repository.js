"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
const variant_mapper_1 = require("./variant.mapper");
class VariantRepository {
    async createVariant(data) {
        try {
            const result = await prismaHelper_1.prisma.variant.create({
                data: {
                    name: data.name,
                    price: data.price,
                    stock: data.stock,
                    productId: data.productId,
                },
            });
            return variant_mapper_1.VariantMapper.ToDomain(result);
        }
        catch (e) {
            console.error(e);
            throw new Error("Couldn't create database");
        }
    }
    async getAllByProductId(id) {
        try {
            const rows = await prismaHelper_1.prisma.variant.findMany({ where: { productId: id } });
            return rows.map((variant) => variant_mapper_1.VariantMapper.ToDomain(variant));
        }
        catch (e) {
            console.error(e);
            throw new Error("Couldn't fetch variants by product id");
        }
    }
    async deleteVariant(id) {
        try {
            const result = await prismaHelper_1.prisma.variant.delete({ where: { id: id } });
            return true;
        }
        catch (e) {
            console.error(e);
            throw new Error("Couldn't delete variant");
        }
    }
    async getById(id) {
        try {
            const rows = await prismaHelper_1.prisma.variant.findUnique({ where: { id: id } });
            return rows;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.VariantRepository = VariantRepository;
//# sourceMappingURL=variant.repository.js.map