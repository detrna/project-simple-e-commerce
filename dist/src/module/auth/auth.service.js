"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptHelper_1 = require("../../shared/bcryptHelper");
const jwtHelper_1 = require("../../shared/jwtHelper");
const user_repository_1 = require("../user/user.repository");
const auth_repository_1 = require("./auth.repository");
class AuthService {
    async register(data) {
        const repo = new auth_repository_1.AuthRepository();
        const userRepo = new user_repository_1.UserRepository();
        const existingUser = await userRepo.getUserByEmail(data.email);
        if (existingUser) {
            throw new Error("Email already exists");
        }
        const saltRounds = parseInt(process.env.saltRounds || "10", 10);
        const hashedPassword = await (0, bcryptHelper_1.hashPassword)(data.password, saltRounds);
        const userData = { ...data, password: hashedPassword };
        const result = await repo.createUser(userData);
        if (!result) {
            throw new Error("Registration failed");
        }
        return result ? result.toSafeObject() : null;
    }
    async login(data) {
        const repo = new auth_repository_1.AuthRepository();
        const result = await repo.loginUser(data);
        if (!result) {
            throw new Error("Incorrect email or password");
        }
        const isMatch = (await (0, bcryptHelper_1.comparePassword)(data.password, result.password)) ||
            data.password == result.password;
        if (!isMatch) {
            throw new Error("Incorrect email or password");
        }
        const accessSecret = process.env.ACCESS_JWT_SECRET;
        const refreshSecret = process.env.REFRESH_JWT_SECRET;
        const jwtPayload = { userId: result.id, name: result.name };
        const accessToken = (0, jwtHelper_1.generateToken)(jwtPayload, accessSecret, {
            expiresIn: "1d",
        });
        const refreshToken = (0, jwtHelper_1.generateToken)(jwtPayload, refreshSecret, {
            expiresIn: "7d",
        });
        return { accessToken, refreshToken };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map