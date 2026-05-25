
import { Store, StoreDTO } from "./Store";
import { StoreRepository } from "./store.repository";

export class StoreService {
    async getStore(id: string): Promise<StoreDTO | null> {
        const repo = new StoreRepository();
        const store = await repo.getStore(id);
        if (!store) {
            throw new Error("Store not found");
        }
        return store;
    }
    async getAllStore(): Promise<StoreDTO[]> {
        const repo = new StoreRepository();
        const stores = await repo.getAllStore();

        if (Store.length === 0) {
            throw new Error("No stores found");
        }

        return stores.map(store => store)
    }
    async getByUid(uid: string): Promise<Store> {
        try {
            const repo = new StoreRepository();
            const result = await repo.getStoreByUID(uid);
            return result;
        } catch (e) {
            throw new Error(`Failed to fetch store by UID: ${e}`);
        }
    }
}
