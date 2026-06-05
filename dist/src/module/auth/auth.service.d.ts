import { UserDTO } from "../user/User";
import { LoginRequest, RegisterRequest } from "./Auth";
export declare class AuthService {
    register(data: RegisterRequest): Promise<UserDTO | null>;
    login(data: LoginRequest): Promise<{
        accessToken: string;
        refreshToken: string;
    } | null>;
}
//# sourceMappingURL=auth.service.d.ts.map