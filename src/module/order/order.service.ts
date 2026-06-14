import { pagination } from "../../middleware/pagination";
import { BadRequestError, UnauthorizedError } from "../../shared/AppError";
import { redis } from "../../shared/redisHelper";
import { Store } from "../store/Store";
import { StoreRepository } from "../store/store.repository";
import { Variant } from "../variant/Variant";
import { VariantRepository } from "../variant/variant.repository";
import { IOrderRepository } from "./Iorder.repository";
import { CreateOrderDTO, Order } from "./Order";

export class OrderService {
  constructor(private OrderRepository: IOrderRepository) {
    this.OrderRepository = OrderRepository;
  }

  async getMyOrders(data: {
    userId: string;
    pagination: pagination;
  }): Promise<Order[]> {
    const result: Order[] = await this.OrderRepository.getMyOrders(data);

    if (result.length !== 0) {
      redis.setPaginated({
        entityName: "order",
        userId: data.userId,
        pagination: data.pagination,
        value: result,
      });
    }

    return result;
  }

  async createOrder(data: CreateOrderDTO): Promise<Order> {
    const variantRepository = new VariantRepository();
    const existingVariant: Variant | null = await variantRepository.getById(
      data.variantId,
    );

    if (!existingVariant) {
      throw new Error("Couldn't found this product's variant");
    }

    const result: Order = await this.OrderRepository.createOrder(data);

    if (!result) {
      throw new Error("Failed to create order");
    }

    return result;
  }

  async payOrder(data: { userId: string; orderId: string }): Promise<Order> {
    const existingOrder: Order | null = await this.OrderRepository.getOrderById(
      data.orderId,
    );

    if (existingOrder?.userId !== data.userId) {
      throw new UnauthorizedError("This user didn't own the order");
    }

    const result: Order = await this.OrderRepository.payOrder(data.orderId);

    if (!result) {
      throw new Error("Failed to make a payment to the order");
    }

    return result;
  }

  async getOrderByStoreId(data: {
    storeId: string;
    userId: string;
    pagination: pagination;
  }) {
    const storeRepo = new StoreRepository();
    const store: Store | null = await storeRepo.getStore(data.storeId);

    if (!store) {
      throw new BadRequestError("the requested store didn't exist");
    }

    if (store.userId !== data.userId) {
      throw new UnauthorizedError("the user didn't own this store");
    }

    const result: Order[] = await this.OrderRepository.getOrdersByStoreId(data);

    return result;
  }

  async getOrderById(id: string) {
    const result: Order | null = await this.OrderRepository.getOrderById(id);

    if (!result) {
      throw new BadRequestError("Order didn't exist");
    }

    redis.set({ entityName: "order", key: result.id, value: result });

    return result;
  }
}
