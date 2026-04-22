import { prisma } from "../../shared/prismaHelper";
import { User } from "../user/User";
import { LoginRequest, RegisterRequest } from "./Auth";
import { IAuthRepository } from "./IAuthRepository";

export class authRepository implements IAuthRepository {
  async createUser(data: RegisterRequest): Promise<User | null> {
    const result = await prisma.user.create({ data: data });

    if (!result) return null;

    return new User(
      result.id,
      result.name,
      result.password,
      result.email,
      result.createdAt,
    );
  }
}
