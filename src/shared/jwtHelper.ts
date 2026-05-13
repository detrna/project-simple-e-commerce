import jwt, { SignOptions } from "jsonwebtoken";
import { jwtPayload } from "../module/auth/Auth";

export function generateToken(payload: jwtPayload, secret: string, option: SignOptions): string {
    return jwt.sign(payload, secret, option);
}

export function verifyAccessToken(token: string, secret: string): jwtPayload | null {
    try {
        return jwt.verify(token, secret) as jwtPayload;
    } catch (error) {
        return null;
    }
}

export function verifyRefreshToken(token: string, secret: string): jwtPayload | null {
    try {
        return jwt.verify(token, secret) as jwtPayload;
    } catch (error) {
        return null;
    }
}