import type { User as PrismaUser } from "../../database/src/generated/prisma/client";
export declare class userService {
    getUser(reqBody: any): Promise<PrismaUser | null>;
    getAllUser(): Promise<PrismaUser[]>;
}
//# sourceMappingURL=user.service.d.ts.map