"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
class userRepository {
    async getUser(id) {
        return await prismaHelper_1.prisma.user.findUnique({
            where: { id },
        });
    }
    async getAllUser() {
        return await prismaHelper_1.prisma.user.findMany();
    }
}
exports.userRepository = userRepository;
//# sourceMappingURL=user.repository.js.map