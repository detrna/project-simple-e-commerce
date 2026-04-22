"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const user_routes_1 = __importDefault(require("./module/user/user.routes"));
const auth_routes_1 = __importDefault(require("./module/auth/auth.routes"));
app.use("/api/v1/users", user_routes_1.default);
app.use("/api/v1/auth", auth_routes_1.default);
app.listen(3000, () => {
    console.log("http://localhost:3000");
});
//# sourceMappingURL=index.js.map