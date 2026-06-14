import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { transactionController } from "./transaction.container";
import { paginate } from "../../middleware/pagination";
import { validate } from "../../middleware/inputValidation";
import {
  CreateTransactionSchema,
  GetMyTransactionsSchema,
  GetTransactionByIdSchema,
} from "./transaction.schema";
import { getCache } from "../../middleware/getCache";

const router = Router();

const entityName = "trx";

router.get(
  "",
  authenticate,
  validate(GetMyTransactionsSchema),
  paginate,
  transactionController.getMyTransactions,
);
router.get(
  "/:id",
  authenticate,
  validate(GetTransactionByIdSchema),
  getCache({ entityName, paramsKey: "id" }),
  transactionController.getTransactionById,
);
router.post(
  "",
  authenticate,
  validate(CreateTransactionSchema),
  transactionController.createTransaction,
);

export default router;
