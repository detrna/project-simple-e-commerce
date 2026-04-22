"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
class userController {
    async getUser(req, res) {
        const service = new user_service_1.userService();
        const result = await service.getUser(req.body);
        res.json(result);
    }
    async getAllUser(req, res) {
        const service = new user_service_1.userService();
        const result = await service.getAllUser();
        res.json(result);
    }
}
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map