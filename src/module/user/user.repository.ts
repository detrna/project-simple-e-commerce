import { prisma } from "../../shared/prismaHelper";
import { IUserRepository } from "./Iuser.repository";
import { User } from "./User";
import { UserMapper } from "./user.mapper";

export class UserRepository implements IUserRepository {
  async getUser(id: string): Promise<User | null> {
    try {
      const rows = await prisma.user.findUnique({
        where: { id },
      });

      if (!rows) {
        return null;
      }

      return UserMapper.toDomain(rows)
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Failed to fetch user");
    }
  }

  async getAllUser(): Promise<User[]> {
    try {
      const rows = await prisma.user.findMany();

      return rows.map(UserMapper.toDomain);

    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const row = await prisma.user.findUnique({
        where: { email },
      });
      return row ? UserMapper.toDomain(row) : null;
    } catch (error) {
      console.error("Error fetching user by email:", error);
      throw new Error("Failed to fetch user by email");
    }
  }
}
