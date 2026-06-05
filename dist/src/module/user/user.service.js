"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("./user.repository");
class UserService {
    async getUser(id) {
        const repo = new user_repository_1.UserRepository();
        const user = await repo.getUser(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user.toSafeObject();
    }
    async getAllUser() {
        const repo = new user_repository_1.UserRepository();
        const users = await repo.getAllUser();
        if (users.length === 0) {
            throw new Error("No users found");
        }
        return users.map(user => user.toSafeObject());
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map