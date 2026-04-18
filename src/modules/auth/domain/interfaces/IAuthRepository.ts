import { User } from "../../../user/domain/user";

export interface IAuthRepository {
  register(user: User): Promise<any>;
}
