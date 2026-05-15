import { Store } from "./Store";

export interface IStoreRepository {
    getStore(id: string): Promise<Store | null>;
    getAllStore(): Promise<Store[] | null>;
    createStore(store: Store): Promise<Store>
    deleteStore(id: string): Promise<void>;
}