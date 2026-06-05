"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setCookie;
require("dotenv/config");
function setCookie(res, name, value, options) {
    res.cookie(name, value, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        ...options
    });
}
//# sourceMappingURL=cookieHelper.js.map