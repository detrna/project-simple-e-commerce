import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { orderController } from "../order/order.container";

const router = Router();

router.get(
  "/:storeId/orders",
  authenticate,
  orderController.getOrdersByStoreId,
);

export default router;
