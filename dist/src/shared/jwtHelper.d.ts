import { SignOptions } from "jsonwebtoken";
import { jwtPayload } from "../module/auth/Auth";
export declare function generateToken(payload: jwtPayload, secret: string, option: SignOptions): string;
export declare function verifyAccessToken(token: string, secret: string): jwtPayload | null;
export declare function verifyRefreshToken(token: string, secret: string): jwtPayload | null;
//# sourceMappingURL=jwtHelper.d.ts.map