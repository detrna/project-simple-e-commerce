import { PrismaClient } from "../../infrastructure/database/src/generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
export const prisma = new PrismaClient({ adapter });
