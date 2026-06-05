"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreMapper = void 0;
const Store_1 = require("./Store");
class StoreMapper {
    static toDomain(raw) {
        return new Store_1.Store(raw.id, raw.address, raw.email, raw.name, raw.userId, raw.createA);
    }
}
exports.StoreMapper = StoreMapper;
//# sourceMappingURL=store.mapper.js.map