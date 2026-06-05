"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
const jwtHelper_1 = require("../shared/jwtHelper");
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }
    const accessToken = authHeader.split(" ")[1];
    try {
        const decoded = (0, jwtHelper_1.verifyAccessToken)(accessToken, process.env.ACCESS_JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid token." });
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ error: "Invalid token." });
    }
}
//# sourceMappingURL=authenticate.js.map