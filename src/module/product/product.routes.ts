import { Router } from "express";
import { ProductController } from "./product.controller";
import { authenticate } from "../../middleware/authenticate";
import { VariantController } from "../variant/variant.controller";

const router = Router();
const controller = new ProductController();
const variantController = new VariantController();

router.get("/", controller.getAllProducts);
router.delete("/:id", controller.deleteProduct);
router.post("/", authenticate, controller.createProduct);
router.get("/:id", controller.getProduct);
router.post("/:productId/variants", authenticate, variantController.create);
router.get("/:productId/variants", variantController.getByProductId);

export default router;
