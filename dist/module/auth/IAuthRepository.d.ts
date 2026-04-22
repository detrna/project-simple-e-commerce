import { User } from "../user/User";
import { RegisterRequest } from "./Auth";
export interface IAuthRepository {
    createUser(data: RegisterRequest): Promise<User | null>;
}
//# sourceMappingURL=IAuthRepository.d.ts.map