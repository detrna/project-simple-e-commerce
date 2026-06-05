import { CreateVariantDTO, DeleteVariantDTO } from "./Variant";
import { VariantRepository } from "./variant.repository";
export declare class VariantService {
    repo: VariantRepository;
    create(data: CreateVariantDTO): Promise<import("./Variant").Variant>;
    getByProductId(id: string): Promise<import("./Variant").Variant[]>;
    delete(data: DeleteVariantDTO): Promise<boolean>;
}
//# sourceMappingURL=variant.service.d.ts.map