import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { transactionController } from "./transaction.container";

const router = Router();

router.get("", authenticate, transactionController.getMyTransactions);
router.get("/:id", authenticate, transactionController.getTransactionById);
router.post("", authenticate, transactionController.createTransaction);

export default router;
