"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_routes_1 = __importDefault(require("./module/user/user.routes"));
const auth_routes_1 = __importDefault(require("./module/auth/auth.routes"));
const product_routes_1 = __importDefault(require("./module/product/product.routes"));
const variant_routes_1 = __importDefault(require("./module/variant/variant.routes"));
const order_routes_1 = __importDefault(require("./module/order/order.routes"));
const transaction_routes_1 = __importDefault(require("./module/transaction/transaction.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/v1/users", user_routes_1.default);
app.use("/api/v1/auth", auth_routes_1.default);
app.use("/api/v1/products", product_routes_1.default);
app.use("/api/v1/variants", variant_routes_1.default);
app.use("/api/v1/orders", order_routes_1.default);
app.use("/api/v1/transactions", transaction_routes_1.default);
app.get("/api/v1/token", (req, res) => {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];
    if (!token) {
        res.send({ msg: "No cookie provided" });
    }
    const key = process.env.ACCESS_JWT_SECRET;
    const payload = jsonwebtoken_1.default.verify(token, key);
    res.send(payload);
});
exports.default = app;
app.listen(3000, () => {
    console.log("http://localhost:3000");
});
// TO-DO:
// Response schema
// Pagination
// Input Validation
// Dependency injection
// OAuth
// Swap payment from Order to Transaction
//# sourceMappingURL=index.js.map