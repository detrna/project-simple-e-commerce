"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function hashPassword(password, salt) {
    const hashed = await bcrypt_1.default.hash(password, salt);
    return hashed;
}
async function comparePassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt_1.default.compare(plainPassword, hashedPassword);
    return isMatch;
}
//# sourceMappingURL=bcryptHelper.js.map