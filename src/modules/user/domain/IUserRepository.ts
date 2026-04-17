import { User } from "./user";

export interface IUserRepository {
  //   getAllUser(): Promise<User[]>;
  //   getUserById(id: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  //   deleteUser(id: string): Promise<void>;
}
