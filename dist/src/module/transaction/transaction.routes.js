"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = require("../../middleware/authenticate");
const transaction_container_1 = require("./transaction.container");
const router = (0, express_1.Router)();
router.get("", authenticate_1.authenticate, transaction_container_1.transactionController.getMyTransactions);
router.get("/:id", authenticate_1.authenticate, transaction_container_1.transactionController.getTransactionById);
router.post("", authenticate_1.authenticate, transaction_container_1.transactionController.createTransaction);
exports.default = router;
//# sourceMappingURL=transaction.routes.js.map