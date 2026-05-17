
import { Store } from "./Store";
import { StoreRepository } from "./store.repository";

export class StoreService {
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
