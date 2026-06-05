import { User } from "../user/User";
import { LoginRequest, RegisterRequest } from "./Auth";
import { IAuthRepository } from "./IAuthRepository";
export declare class AuthRepository implements IAuthRepository {
    createUser(data: RegisterRequest): Promise<User | null>;
    loginUser(data: LoginRequest): Promise<User | null>;
}
//# sourceMappingURL=auth.repository.d.ts.map