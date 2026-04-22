import { prisma } from "../../shared/prismaHelper";
import { IUserRepository } from "./Iuser.repository";
import type { User as PrismaUser } from "../../database/src/generated/prisma/client";

export class userRepository implements IUserRepository {
  async getUser(id: string): Promise<PrismaUser | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async getAllUser(): Promise<PrismaUser[]> {
    return await prisma.user.findMany();
  }
}
