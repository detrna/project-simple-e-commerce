"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
class UserController {
    async getUser(req, res) {
        try {
            const service = new user_service_1.UserService();
            const result = await service.getUser(req.params.id);
            res.json(result);
        }
        catch (e) {
            res.json({ msg: e });
        }
    }
    async getAllUser(req, res) {
        try {
            const service = new user_service_1.UserService();
            const result = await service.getAllUser();
            res.json(result);
        }
        catch (e) {
            res.json({ msg: e });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map