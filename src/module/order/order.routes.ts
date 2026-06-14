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
import { getCache, getPaginatedCache } from "../../middleware/getCache";

const router = Router();

router.get(
  "",
  authenticate,
  validate(GetMyOrdersSchema),
  paginate,
  getPaginatedCache("order"),
  orderController.getMyOrders,
);

router.get(
  "/:id",
  authenticate,
  validate(GetOrderByIdSchema),
  getCache({ entityName: "order", paramsKey: "id" }),
  orderController.getOrderById,
);

router.patch(
  "/:id/pay",
  authenticate,
  validate(PayOrderSchema),
  orderController.payOrder,
);

export default router;
