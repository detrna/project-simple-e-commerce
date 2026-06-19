import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { VariantController } from "../variant/variant.controller";
import { paginate } from "../../middleware/pagination";
import { validate } from "../../middleware/inputValidation";
import { GetAllProductsSchema } from "./product.schema";
import { productController } from "./product.container";

const router = Router();
const variantController = new VariantController();

router.get(
  "",
  validate(GetAllProductsSchema),
  paginate,
  productController.getAllProducts,
);
router.delete("/:id", productController.deleteProduct);
router.post("", authenticate, productController.createProduct);
router.get("/:id", productController.getProduct);
router.post("/:productId/variants", authenticate, variantController.create);
router.get("/:productId/variants", variantController.getByProductId);

export default router;
