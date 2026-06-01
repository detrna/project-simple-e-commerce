import { CreateVariantDTO, Variant } from "./Variant";

export interface IVariantRepository {
  createVariant(data: CreateVariantDTO): Promise<Variant>;
  getAllByProductId(id: string): Promise<Variant[]>;
  deleteVariant(id: string): Promise<Boolean>;
}
