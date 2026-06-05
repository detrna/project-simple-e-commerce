"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const User_1 = require("./User");
class UserMapper {
    static toDomain(raw) {
        return new User_1.User(raw.id, raw.name, raw.email, raw.password, raw.createdAt);
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map