import { IStoreRepository } from "./Istore.repository";
import { Store, StoreDTO } from "./Store";
export declare class StoreRepository implements IStoreRepository {
    getStore(id: string): Promise<Store | null>;
    getAllStore(): Promise<Store[]>;
    createStore(data: StoreDTO): Promise<Store>;
    deleteStore(id: string): Promise<void>;
    getStoreByUID(uid: string): Promise<Store>;
}
//# sourceMappingURL=store.repository.d.ts.map