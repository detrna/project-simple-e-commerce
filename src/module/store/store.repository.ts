import { prisma } from "../../shared/prismaHelper";
import { IStoreRepository } from "./Istore.repository";
import { Store, StoreDTO } from "./Store";
import { StoreMapper } from "./store.mapper";


export class StoreRepository implements IStoreRepository {
    async getStore(id: string): Promise<Store | null> {
        try {
            const rows = await prisma.store.findUnique({
                where: { id: id },
            });

            if (!rows) {
                return null;
            }

            return StoreMapper.toDomain(rows)
        } catch (error) {
            console.error("Error menangkap data store", error);
            throw new Error("Failed to fetch Store");
        }
    }

    async getAllStore(): Promise<Store[]> {
        try {
            const rows = await prisma.store.findMany();

            return rows.map(StoreMapper.toDomain);
        } catch (error) {
            console.error("Error data semua toko tidak ditemukan", error)
            throw new Error("Failed to fetch users");
        }
    }

    async createStore(data: StoreDTO): Promise<Store> {
        try {
            const rows = await prisma.store.create({
                data: {
                    address: data.address,
                    email: data.email,
                    name: data.name,
                    userId: data.userId,
                    createdAt: data.createdAt,
                },

            });

            return StoreMapper.toDomain(rows)
        } catch (error) {
            console.error("Error data semua toko tidak ditemukan", error)
            throw new Error("Failed to fetch users");
        }
    }

    async deleteStore(id: string): Promise<void> {
        try {
            const rows = await prisma.store.delete({
                where: { id: id },
            });
        } catch (error) {
            console.error("Error tidak dapat menghapus data store", error);
            throw new Error("Failed to delete Store");
        }
    }
}