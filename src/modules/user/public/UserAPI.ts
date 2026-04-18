import { UserRepository } from "../infrastructure/user.repository";

export class UserAPI {
  async getUserByEmail(data: any): Promise<any> {
    const repo = new UserRepository();
    const user = await repo.getUserByEmail(data.email);
    return user;
  }
}
