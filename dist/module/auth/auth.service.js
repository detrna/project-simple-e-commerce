"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const auth_repository_1 = require("./auth.repository");
class authService {
    async register(data) {
        const repo = new auth_repository_1.authRepository();
        const result = await repo.createUser(data);
        return result;
    }
}
exports.authService = authService;
//# sourceMappingURL=auth.service.js.map