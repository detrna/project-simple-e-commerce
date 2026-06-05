"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const authenticate_1 = require("../../middleware/authenticate");
const variant_controller_1 = require("../variant/variant.controller");
const router = (0, express_1.Router)();
const controller = new product_controller_1.ProductController();
const variantController = new variant_controller_1.VariantController();
router.get("/", controller.getAllProducts);
router.delete("/:id", controller.deleteProduct);
router.post("/", authenticate_1.authenticate, controller.createProduct);
router.get("/:id", controller.getProduct);
router.post("/:productId/variants", authenticate_1.authenticate, variantController.create);
router.get("/:productId/variants", variantController.getByProductId);
exports.default = router;
//# sourceMappingURL=product.routes.js.map