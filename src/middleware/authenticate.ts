import { NextFunction, Response, Request } from "express";
import { verifyAccessToken } from "../shared/jwtHelper";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  const accessToken = authHeader.split(" ")[1];

  try {
    const decoded = verifyAccessToken(
      accessToken,
      process.env.ACCESS_JWT_SECRET!,
    );
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token." });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token." });
  }
}
