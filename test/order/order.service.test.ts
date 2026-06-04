import { describe, expect, it } from "vitest";
import { OrderService } from "../../src/module/order/order.service";
import { afterEach, beforeEach } from "node:test";
import { prisma } from "../../src/shared/prismaHelper";
import { CreateOrderDTO } from "../../src/module/order/Order";
import { OrderRepository } from "../../src/module/order/order.repository";

const orderRepo = new OrderRepository();
const userId = "user-1";
