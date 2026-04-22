import { IUserRepository } from "./Iuser.repository";
import type { User as PrismaUser } from "../../database/src/generated/prisma/client";
export declare class userRepository implements IUserRepository {
    getUser(id: string): Promise<PrismaUser | null>;
    getAllUser(): Promise<PrismaUser[]>;
}
//# sourceMappingURL=user.repository.d.ts.map