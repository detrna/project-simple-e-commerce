import { User } from "../user/User";
import { LoginRequest, RegisterRequest } from "./Auth";

export interface IAuthRepository {
  createUser(data: RegisterRequest): Promise<User | null>;
  loginUser(data: LoginRequest): Promise<User | null>;
}
