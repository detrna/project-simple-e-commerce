import { VariantRepository } from "../variant/variant.repository";
import { IOrderRepository } from "./Iorder.repository";
import { CreateOrderDTO } from "./Order";

export class OrderService {
  constructor(private OrderRepository: IOrderRepository) {
    this.OrderRepository = OrderRepository;
  }

  async getMyOrders(id: string) {
    const result = await this.OrderRepository.getMyOrders(id);

    if (result.length == 0) {
      throw new Error("This user has yet to have any orders");
    }

    return result;
  }

  async createOrder(data: CreateOrderDTO) {
    const variantRepository = new VariantRepository();
    const existingVariant = await variantRepository.getById(data.variantId);

    if (!existingVariant) {
      throw new Error("Couldn't found this product's variant");
    }

    const result = await this.OrderRepository.createOrder(data);

    if (!result) {
      throw new Error("Failed to create order");
    }

    return result;
  }

  async payOrder(data: { userId: string; orderId: string }) {
    const existingOrder = await this.OrderRepository.getOrderById(data.orderId);

    if (existingOrder?.userId !== data.userId) {
      throw new Error("This user didn't own this order");
    }

    const result = await this.OrderRepository.payOrder(data.orderId);

    if (!result) {
      throw new Error("Failed to make a payment to the order");
    }

    return result;
  }

  async getOrderByStoreId(id: string) {
    const result = await this.OrderRepository.getOrdersByStoreId(id);

    if (result.length == 0) {
      throw new Error("This store has yet to receive any order");
    }

    return result;
  }

  async getOrderById(id: string) {
    const result = await this.OrderRepository.getOrderById(id);

    if (!result) {
      throw new Error("Order not found");
    }

    return result;
  }
}
