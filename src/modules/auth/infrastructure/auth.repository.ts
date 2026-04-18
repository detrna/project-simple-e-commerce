import { prisma } from "../../../core/utils/prismaHelper";
import { User } from "../../user/domain/user";
import { IAuthRepository } from "../domain/interfaces/IAuthRepository";

export class authRepository implements IAuthRepository {
  async register(data: User): Promise<any> {
    const result = await prisma.user.create({ data });
    return result;
  }
}
