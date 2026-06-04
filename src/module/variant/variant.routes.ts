import { Router } from "express";
import { VariantController } from "./variant.controller";
import { authenticate } from "../../middleware/authenticate";
import { orderController } from "../order/order.container";

const router = Router();
const controller = new VariantController();

router.delete("/:id", authenticate, controller.delete);
router.post("/:variantId/orders", authenticate, orderController.createOrder);

export default router;
