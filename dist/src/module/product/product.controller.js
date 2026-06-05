"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const store_service_1 = require("../store/store.service");
class ProductController {
    async getAllProducts(req, res) {
        try {
            const service = new product_service_1.ProductService();
            const storeId = req.query.id;
            if (typeof storeId !== "string") {
                return res.status(400).json({ message: "Invalid id" });
            }
            const result = await service.getAllProducts(storeId);
            return res.json(result);
        }
        catch (e) {
            console.log(e);
            return res.json(e);
        }
    }
    async createProduct(req, res) {
        try {
            const storeService = new store_service_1.StoreService();
            const existingStore = await storeService.getByUid(req.body.storeId);
            if (!existingStore) {
                return res.status(404).json({ message: "Store not found" });
            }
            if (existingStore.id !== req.user.userId) {
                return res
                    .status(403)
                    .json({ message: "Unauthorized to create product for this store" });
            }
            const service = new product_service_1.ProductService();
            const productData = req.body;
            const result = await service.createProduct(productData);
            return res.json(result);
        }
        catch (e) {
            return res
                .status(400)
                .json({
                message: e instanceof Error ? e.message : "An error occurred",
            });
        }
    }
    async getProduct(req, res) {
        try {
            const service = new product_service_1.ProductService();
            const result = await service.getProducts(req.params.id);
            return res.json(result);
        }
        catch (e) {
            if (e instanceof Error) {
                return res.status(400).json({ message: e.message });
            }
            return res.json(e);
        }
    }
    async deleteProduct(req, res) {
        try {
            const service = new product_service_1.ProductService();
            const result = await service.deleteProduct(req.params.id);
            return res.json(result);
        }
        catch (e) {
            if (e instanceof Error) {
                console.log("controller:", e);
                return res.status(400).json(e.message);
            }
            return res.json(e);
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map