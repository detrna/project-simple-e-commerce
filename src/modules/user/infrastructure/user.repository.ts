import { prisma } from "../../../core/utils/prismaHelper";
import { IUserRepository } from "../domain/IUserRepository";

export class userRepository implements IUserRepository {
  async getUserByEmail(email: string): Promise<any> {
    const result = await prisma.user.findUnique({
      where: { email: email },
    });

    return result;
  }
}
