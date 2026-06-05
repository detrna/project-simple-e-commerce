"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prismaHelper_1 = require("../../shared/prismaHelper");
const user_mapper_1 = require("./user.mapper");
class UserRepository {
    async getUser(id) {
        try {
            const rows = await prismaHelper_1.prisma.user.findUnique({
                where: { id },
            });
            if (!rows) {
                return null;
            }
            return user_mapper_1.UserMapper.toDomain(rows);
        }
        catch (error) {
            console.error("Error fetching user:", error);
            throw new Error("Failed to fetch user");
        }
    }
    async getAllUser() {
        try {
            const rows = await prismaHelper_1.prisma.user.findMany();
            return rows.map(user_mapper_1.UserMapper.toDomain);
        }
        catch (error) {
            console.error("Error fetching users:", error);
            throw new Error("Failed to fetch users");
        }
    }
    async getUserByEmail(email) {
        try {
            const row = await prismaHelper_1.prisma.user.findUnique({
                where: { email },
            });
            return row ? user_mapper_1.UserMapper.toDomain(row) : null;
        }
        catch (error) {
            console.error("Error fetching user by email:", error);
            throw new Error("Failed to fetch user by email");
        }
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map