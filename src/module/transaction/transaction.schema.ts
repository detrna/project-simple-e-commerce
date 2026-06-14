import { z } from "zod";
import { PaginationSchema } from "../../middleware/pagination";

export const GetMyTransactionsSchema = z.object({
  query: PaginationSchema,
});

export const CreateTransactionSchema = z.object({
  body: z.object({ orderIds: z.array(z.string().nonempty()) }),
});

export const GetTransactionByIdSchema = z.object({
  params: z.object({ id: z.string() }),
});

// router.get("", authenticate, paginate, transactionController.getMyTransactions);
// router.get("/:id", authenticate, transactionController.getTransactionById);
// router.post("", authenticate, transactionController.createTransaction);
