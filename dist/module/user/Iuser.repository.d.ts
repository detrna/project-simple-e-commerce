import type { User as PrismaUser } from "../../database/src/generated/prisma/client";
export interface IUserRepository {
    getUser(id: string): Promise<PrismaUser | null>;
    getAllUser(): Promise<PrismaUser[]>;
}
//# sourceMappingURL=Iuser.repository.d.ts.map