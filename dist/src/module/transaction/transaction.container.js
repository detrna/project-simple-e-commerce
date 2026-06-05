"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = exports.transactionService = exports.transactionRepository = void 0;
const transaction_controller_1 = require("./transaction.controller");
const transaction_repository_1 = require("./transaction.repository");
const transaction_service_1 = require("./transaction.service");
exports.transactionRepository = new transaction_repository_1.TransactionRepository();
exports.transactionService = new transaction_service_1.TransactionService(exports.transactionRepository);
exports.transactionController = new transaction_controller_1.TransactionController(exports.transactionService);
//# sourceMappingURL=transaction.container.js.map