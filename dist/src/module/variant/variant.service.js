"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantService = void 0;
const variant_repository_1 = require("./variant.repository");
const store_repository_1 = require("../store/store.repository");
class VariantService {
    constructor() {
        this.repo = new variant_repository_1.VariantRepository();
    }
    async create(data) {
        const storeRepo = new store_repository_1.StoreRepository();
        const productOwner = await storeRepo.getStoreByUID(data.ownerId);
        if (!productOwner) {
            throw new Error("This user didn't own this product");
        }
        const result = await this.repo.createVariant(data);
        return result;
    }
    async getByProductId(id) {
        const result = await this.repo.getAllByProductId(id);
        if (result.length == 0) {
            throw new Error("Error: No variants found from this product");
        }
        return result;
    }
    async delete(data) {
        const storeRepo = new store_repository_1.StoreRepository();
        const productOwner = await storeRepo.getStoreByUID(data.ownerId);
        if (!productOwner) {
            throw new Error("This user didn't own this product");
        }
        const result = await this.repo.deleteVariant(data.variantId);
        return result;
    }
}
exports.VariantService = VariantService;
//# sourceMappingURL=variant.service.js.map