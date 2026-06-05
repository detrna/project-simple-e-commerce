"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const cookieHelper_1 = __importDefault(require("../../shared/cookieHelper"));
const auth_service_1 = require("./auth.service");
class AuthController {
    async register(req, res) {
        const service = new auth_service_1.AuthService();
        const result = await service.register(req.body);
        return result ? res.json(result) : res.status(400).json({ message: "Registration failed" });
    }
    async login(req, res) {
        const service = new auth_service_1.AuthService();
        const result = await service.login(req.body);
        if (!result) {
            return res.status(400).json({ message: "Login failed" });
        }
        (0, cookieHelper_1.default)(res, "accessToken", result.accessToken, { expiresIn: "1d" });
        (0, cookieHelper_1.default)(res, "refreshToken", result.refreshToken, { expiresIn: "7d" });
        return res.json({ accessToken: result.accessToken });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map