import { takeCoverage } from "node:v8";
import { pagination } from "../../middleware/pagination";
import { prisma } from "../../shared/prismaHelper";
import { IOrderRepository } from "./Iorder.repository";
import { CreateOrderDTO, Order } from "./Order";

export class OrderRepository implements IOrderRepository {
  async getMyOrders(data: {
    userId: string;
    pagination: pagination;
  }): Promise<Order[]> {
    try {
      const rows = await prisma.order.findMany({
        where: { userId: data.userId },
        take: data.pagination.limit,
        cursor: data.pagination.cursor
          ? { id: data.pagination.cursor }
          : undefined,
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        skip: data.pagination.cursor ? 1 : 0,
      });
      console.log(data.userId, data.pagination.limit, data.pagination.cursor);

      return rows;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  createOrder(data: CreateOrderDTO): Promise<Order> {
    try {
      const result = prisma.order.create({ data });
      return result;
    } catch (e) {
      throw e;
    }
  }
  getOrderById(id: string): Promise<Order | null> {
    try {
      const result = prisma.order.findUnique({ where: { id: id } });
      return result;
    } catch (e) {
      throw e;
    }
  }
  payOrder(id: string): Promise<Order> {
    try {
      const result = prisma.order.update({
        where: { id: id },
        data: { payment: true },
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
  getOrdersByStoreId(id: string): Promise<Order[]> {
    try {
      const rows = prisma.order.findMany({
        where: { variant: { product: { storeId: id } } },
      });
      return rows;
    } catch (e) {
      throw e;
    }
  }
  getOrdersByIds(ids: string[]): Promise<Order[]> {
    try {
      const rows = prisma.order.findMany({ where: { id: { in: ids } } });
      return rows;
    } catch (e) {
      throw e;
    }
  }
}
