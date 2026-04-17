import { IAuthRepository } from "../domain/IAuthRepository";
import { User } from "../../user/domain/user";
import { randomUUID } from "node:crypto";
import { IUserRepository } from "../../user/domain/IUserRepository";
import { bcryptHelper } from "../infrastructure/bcryptHelper";

export class RegisterUser {
  constructor(
    private authRepository: IAuthRepository,
    private userRepository: IUserRepository,
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

    const existingUser = await this.userRepository.getUserByEmail(email);

    if (!existingUser) {
    }

    const hasher = new bcryptHelper();
    const hashed = await hasher.hash(password);

    const user = new User(randomUUID(), name, email, hashed);
    const savedUser = await this.authRepository.register(user);
    return savedUser;
  }
}
