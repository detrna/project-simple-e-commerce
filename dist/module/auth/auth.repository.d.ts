import { User } from "../user/User";
import { RegisterRequest } from "./Auth";
import { IAuthRepository } from "./IAuthRepository";
export declare class authRepository implements IAuthRepository {
    createUser(data: RegisterRequest): Promise<User | null>;
}
//# sourceMappingURL=auth.repository.d.ts.map