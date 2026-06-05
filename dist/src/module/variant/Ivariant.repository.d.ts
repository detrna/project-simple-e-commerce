import { CreateVariantDTO, Variant } from "./Variant";
export interface IVariantRepository {
    createVariant(data: CreateVariantDTO): Promise<Variant>;
    getAllByProductId(id: string): Promise<Variant[]>;
    deleteVariant(id: string): Promise<Boolean>;
    getById(id: string): Promise<Variant | null>;
}
//# sourceMappingURL=Ivariant.repository.d.ts.map