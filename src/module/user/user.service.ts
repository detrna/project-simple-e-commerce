import { UserDTO } from "./User";
import { UserRepository } from "./user.repository";

export class UserService {
  async getUser(id: string): Promise<UserDTO | null> {
    const repo = new UserRepository();
    const user = await repo.getUser(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user.toSafeObject();
  }

  async getAllUser(): Promise<UserDTO[]> {
      const repo = new UserRepository();
      const users = await repo.getAllUser();
      
      if(users.length === 0) {
        throw new Error("No users found");
      }
      
      return users.map(user => user.toSafeObject());
    
  }
}
