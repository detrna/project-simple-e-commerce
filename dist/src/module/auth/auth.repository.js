"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
const user_mapper_1 = require("../user/user.mapper");
class AuthRepository {
    async createUser(data) {
        const result = await prismaHelper_1.prisma.user.create({ data: {
                name: data.name,
                email: data.email,
                password: data.password
            } });
        if (!result)
            return null;
        return user_mapper_1.UserMapper.toDomain(result);
    }
    async loginUser(data) {
        const result = await prismaHelper_1.prisma.user.findUnique({
            where: { email: data.email },
        });
        if (!result)
            return null;
        return user_mapper_1.UserMapper.toDomain(result);
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map