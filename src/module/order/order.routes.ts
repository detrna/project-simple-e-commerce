import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { orderController } from "./order.container";

const router = Router();

router.get("", authenticate, orderController.getMyOrders);
router.get("/:id", authenticate, orderController.getOrderById);
router.patch("/:id/pay", authenticate, orderController.payOrder);

export default router;
