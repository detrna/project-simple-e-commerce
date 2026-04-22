"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const controller = new user_controller_1.userController();
const router = (0, express_1.Router)();
router.get("/:id", controller.getUser);
router.get("/", controller.getAllUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map