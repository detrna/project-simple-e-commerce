"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
const User_1 = require("../user/User");
class authRepository {
    async createUser(data) {
        const result = await prismaHelper_1.prisma.user.create({ data: data });
        if (!result)
            return null;
        return new User_1.User(result.id, result.name, result.password, result.email, result.createdAt);
    }
}
exports.authRepository = authRepository;
//# sourceMappingURL=auth.repository.js.map