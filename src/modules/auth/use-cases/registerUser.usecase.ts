import { IAuthRepository } from "../domain/interfaces/IAuthRepository";
import { User } from "../../user/domain/user";
import { randomUUID } from "node:crypto";
import { bcryptHelper } from "../infrastructure/utils/bcryptHelper";
import { UserAPI } from "../../user/public/UserAPI";

export class RegisterUser {
  constructor(
    private authRepository: IAuthRepository,
    private userAPI: UserAPI,
  ) {}

  async registerUser({
    name,
    email,
    password,
    confirm,
  }: {
    name: string;
    email: string;
    password: string;
    confirm: string;
  }): Promise<User> {
    if (password !== confirm) {
    }

    const existingUser = await this.userAPI.getUserByEmail(email);

    if (!existingUser) {
    }

    const hasher = new bcryptHelper();
    const hashed = await hasher.hash(password);

    const user = new User(randomUUID(), name, email, hashed);
    const savedUser = await this.authRepository.register(user);
    return savedUser;
  }
}
