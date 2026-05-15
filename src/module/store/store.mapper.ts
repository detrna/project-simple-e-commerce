import { Store } from "./Store";

export class StoreMapper {
    static toDomain(raw: any): Store {
        return new Store(
            raw.id,
            raw.address,
            raw.email,
            raw.name,
            raw.userId,
            raw.createA
        );
    }
}