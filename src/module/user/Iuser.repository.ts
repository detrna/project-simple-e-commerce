import { User } from "./User";


export interface IUserRepository {
  getUser(id: string): Promise<User | null>;
  getAllUser(): Promise<User[]>;
  getUserByEmail(email: string): Promise<User | null>;
}
