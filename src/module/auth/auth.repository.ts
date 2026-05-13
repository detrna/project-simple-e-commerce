import { prisma } from "../../shared/prismaHelper";
import { User } from "../user/User";
import { UserMapper } from "../user/user.mapper";
import { LoginRequest, RegisterRequest } from "./Auth";
import { IAuthRepository } from "./IAuthRepository";

export class AuthRepository implements IAuthRepository {
  async createUser(data: RegisterRequest): Promise<User | null> {
    const result = await prisma.user.create({ data: {
      name: data.name,
      email: data.email,
      password: data.password
    } });

    if (!result) return null;

    return UserMapper.toDomain(result);
  }

  async loginUser(data: LoginRequest): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!result) return null;

    return UserMapper.toDomain(result);
  }
}
