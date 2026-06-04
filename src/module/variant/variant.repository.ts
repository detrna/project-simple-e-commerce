import { prisma } from "../../shared/prismaHelper";
import { IVariantRepository } from "./Ivariant.repository";
import { CreateVariantDTO, Variant } from "./Variant";
import { VariantMapper } from "./variant.mapper";

export class VariantRepository implements IVariantRepository {
  async createVariant(data: CreateVariantDTO): Promise<Variant> {
    try {
      const result = await prisma.variant.create({
        data: {
          name: data.name,
          price: data.price,
          stock: data.stock,
          productId: data.productId,
        },
      });
      return VariantMapper.ToDomain(result);
    } catch (e) {
      console.error(e);
      throw new Error("Couldn't create database");
    }
  }

  async getAllByProductId(id: string): Promise<Variant[]> {
    try {
      const rows = await prisma.variant.findMany({ where: { productId: id } });
      return rows.map((variant) => VariantMapper.ToDomain(variant));
    } catch (e) {
      console.error(e);
      throw new Error("Couldn't fetch variants by product id");
    }
  }

  async deleteVariant(id: string): Promise<boolean> {
    try {
      const result = await prisma.variant.delete({ where: { id: id } });
      return true;
    } catch (e) {
      console.error(e);
      throw new Error("Couldn't delete variant");
    }
  }

  async getById(id: string): Promise<Variant | null> {
    try {
      const rows = await prisma.variant.findUnique({ where: { id: id } });
      return rows;
    } catch (e) {
      throw e;
    }
  }
}
