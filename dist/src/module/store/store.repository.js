"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
const store_mapper_1 = require("./store.mapper");
class StoreRepository {
    async getStore(id) {
        try {
            const rows = await prismaHelper_1.prisma.store.findUnique({
                where: { id: id },
            });
            if (!rows) {
                return null;
            }
            return store_mapper_1.StoreMapper.toDomain(rows);
        }
        catch (error) {
            console.error("Error menangkap data store", error);
            throw new Error("Failed to fetch Store");
        }
    }
    async getAllStore() {
        try {
            const rows = await prismaHelper_1.prisma.store.findMany();
            return rows.map(store_mapper_1.StoreMapper.toDomain);
        }
        catch (error) {
            console.error("Error data semua toko tidak ditemukan", error);
            throw new Error("Failed to fetch users");
        }
    }
    async createStore(data) {
        try {
            const rows = await prismaHelper_1.prisma.store.create({
                data: {
                    address: data.address,
                    email: data.email,
                    name: data.name,
                    userId: data.userId,
                    createdAt: data.createdAt,
                },
            });
            return store_mapper_1.StoreMapper.toDomain(rows);
        }
        catch (error) {
            console.error("Error data semua toko tidak ditemukan", error);
            throw new Error("Failed to fetch users");
        }
    }
    async deleteStore(id) {
        try {
            const rows = await prismaHelper_1.prisma.store.delete({
                where: { id: id },
            });
        }
        catch (error) {
            console.error("Error tidak dapat menghapus data store", error);
            throw new Error("Failed to delete Store");
        }
    }
    async getStoreByUID(uid) {
        try {
            const result = await prismaHelper_1.prisma.store.findUnique({
                where: { userId: uid },
            });
            return store_mapper_1.StoreMapper.toDomain(result);
        }
        catch (e) {
            throw new Error("Store not found");
        }
    }
}
exports.StoreRepository = StoreRepository;
//# sourceMappingURL=store.repository.js.map