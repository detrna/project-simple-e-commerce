import { Router } from "express";
import { ProductController } from "./product.controller";
import { authenticate } from "../../middleware/authenticate";

const router = Router()
const controller = new ProductController

router.get("/", controller.getAllProducts)
router.delete("/:id", controller.deleteProduct)
router.post("/", authenticate, controller.createProduct)
router.get("/:id", controller.getProduct)

export default router