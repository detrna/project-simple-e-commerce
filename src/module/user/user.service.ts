import { UserDTO } from "./User";
import { UserRepository } from "./user.repository";

export class UserService {
  async getUser(params: any): Promise<UserDTO | null> {
    const repo = new UserRepository();
    const user = await repo.getUser(params.id);
    if (!user) {
      throw new Error("User not found");
    }
    return user.toSafeObject();
  }

  async getAllUser(): Promise<UserDTO[]> {
    try {

      const repo = new UserRepository();
      const users = await repo.getAllUser();
      
      if(users.length === 0) {
        throw new Error("error");
      }
      
      return users.map(user => user.toSafeObject());
    } catch(e){
      throw new Error("query error")
    }
  }
}
