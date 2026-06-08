import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { transactionController } from "./transaction.container";
import { paginate } from "../../middleware/pagination";

const router = Router();

router.get("", authenticate, paginate, transactionController.getMyTransactions);
router.get("/:id", authenticate, transactionController.getTransactionById);
router.post("", authenticate, transactionController.createTransaction);

export default router;
