import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { orderController } from "./order.container";
import { paginate } from "../../middleware/pagination";
import { validate } from "../../middleware/inputValidation";
import { GetOrderByIdSchema } from "./order.schema";

const router = Router();

router.get("", authenticate, paginate, orderController.getMyOrders);
router.get(
  "/:id",
  authenticate,
  validate(GetOrderByIdSchema),
  orderController.getOrderById,
);
router.patch("/:id/pay", authenticate, orderController.payOrder);

export default router;
