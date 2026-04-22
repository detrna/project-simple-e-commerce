"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("./user.repository");
class userService {
    async getUser(reqBody) {
        const repo = new user_repository_1.userRepository();
        return await repo.getUser(reqBody.id);
    }
    async getAllUser() {
        const repo = new user_repository_1.userRepository();
        return await repo.getAllUser();
    }
}
exports.userService = userService;
//# sourceMappingURL=user.service.js.map