import type { User as PrismaUser } from "../../database/src/generated/prisma/client";
import { userRepository } from "./user.repository";

export class userService {
  async getUser(reqBody: any): Promise<PrismaUser | null> {
    const repo = new userRepository();
    return await repo.getUser(reqBody.id);
  }

  async getAllUser(): Promise<PrismaUser[]> {
    const repo = new userRepository();
    return await repo.getAllUser();
  }
}
