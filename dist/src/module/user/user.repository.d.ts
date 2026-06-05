import { IUserRepository } from "./Iuser.repository";
import { User } from "./User";
export declare class UserRepository implements IUserRepository {
    getUser(id: string): Promise<User | null>;
    getAllUser(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User | null>;
}
//# sourceMappingURL=user.repository.d.ts.map