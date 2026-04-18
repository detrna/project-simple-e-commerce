import { IUserRepository } from "../domain/IUserRepository";
import { User } from "../domain/user";

export class getUserByEmailUseCase {
  constructor(private repo: IUserRepository) {}

  async execute(email: string): Promise<User | null> {
    const user = await this.repo.getUserByEmail(email);
    return user;
  }
}
