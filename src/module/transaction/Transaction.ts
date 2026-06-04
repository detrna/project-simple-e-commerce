import { Order } from "../../database/src/generated/prisma/client";

export interface Transaction {
  id: string;
  order: Order[];
  createdAt: Date;
}
