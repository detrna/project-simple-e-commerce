"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantController = void 0;
const variant_service_1 = require("./variant.service");
class VariantController {
    constructor() {
        this.service = new variant_service_1.VariantService();
    }
    async create(req, res) {
        try {
            const variantService = new variant_service_1.VariantService();
            const data = req.body;
            data.productId = req.params.productId;
            data.ownerId = req.user.userId;
            const result = await variantService.create(data);
            res.json(result);
        }
        catch (e) {
            res.json(e);
        }
    }
    async getByProductId(req, res) {
        try {
            const variantService = new variant_service_1.VariantService();
            const id = req.params.productId;
            const result = await variantService.getByProductId(id);
            res.json(result);
        }
        catch (e) {
            res.json(e);
        }
    }
    async delete(req, res) {
        try {
            const variantService = new variant_service_1.VariantService();
            const variantId = req.params.id;
            const ownerId = req.user.userId;
            const payload = { variantId, ownerId };
            const result = await variantService.delete(payload);
            res.json(result);
        }
        catch (e) {
            res.json(e);
        }
    }
}
exports.VariantController = VariantController;
//# sourceMappingURL=variant.controller.js.map