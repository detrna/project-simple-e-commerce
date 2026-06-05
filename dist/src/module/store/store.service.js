"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const store_repository_1 = require("./store.repository");
class StoreService {
    async getByUid(uid) {
        try {
            const repo = new store_repository_1.StoreRepository();
            const result = await repo.getStoreByUID(uid);
            return result;
        }
        catch (e) {
            throw new Error(`Failed to fetch store by UID: ${e}`);
        }
    }
}
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map