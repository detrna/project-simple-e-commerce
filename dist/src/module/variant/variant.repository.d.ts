import { IVariantRepository } from "./Ivariant.repository";
import { CreateVariantDTO, Variant } from "./Variant";
export declare class VariantRepository implements IVariantRepository {
    createVariant(data: CreateVariantDTO): Promise<Variant>;
    getAllByProductId(id: string): Promise<Variant[]>;
    deleteVariant(id: string): Promise<boolean>;
    getById(id: string): Promise<Variant | null>;
}
//# sourceMappingURL=variant.repository.d.ts.map