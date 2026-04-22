import { User } from "../user/User";
import { RegisterRequest } from "./Auth";
import { authRepository } from "./auth.repository";

export class authService {
  async register(data: RegisterRequest): Promise<User | null> {
    const repo = new authRepository();
    const result = await repo.createUser(data);
    return result;
  }
}
