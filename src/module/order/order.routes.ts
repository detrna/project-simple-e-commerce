import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { orderController } from "./order.container";
import { paginate } from "../../middleware/pagination";
import { validate } from "../../middleware/inputValidation";
import {
  GetMyOrdersSchema,
  GetOrderByIdSchema,
  PayOrderSchema,
} from "./order.schema";

const router = Router();

router.get(
  "",
  authenticate,
  validate(GetMyOrdersSchema),
  paginate,
  orderController.getMyOrders,
);

router.get(
  "/:id",
  authenticate,
  validate(GetOrderByIdSchema),
  orderController.getOrderById,
);

router.patch(
  "/:id/pay",
  authenticate,
  validate(PayOrderSchema),
  orderController.payOrder,
);

export default router;
