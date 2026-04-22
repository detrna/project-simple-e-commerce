"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
class authController {
    async register(req, res) {
        const service = new auth_service_1.authService();
        const body = req.body;
        const result = await service.register(body);
        return result;
    }
}
exports.authController = authController;
//# sourceMappingURL=auth.controller.js.map