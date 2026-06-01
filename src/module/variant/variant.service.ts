import { CreateVariantDTO, DeleteVariantDTO } from "./Variant";
import { VariantRepository } from "./variant.repository";
import { StoreRepository } from "../store/store.repository";

export class VariantService {
  public repo: VariantRepository = new VariantRepository();

  async create(data: CreateVariantDTO) {
    const storeRepo = new StoreRepository();
    const productOwner = await storeRepo.getStoreByUID(data.ownerId);

    if (!productOwner) {
      throw new Error("This user didn't own this product");
    }

    const result = await this.repo.createVariant(data);

    return result;
  }

  async getByProductId(id: string) {
    const result = await this.repo.getAllByProductId(id);

    if (result.length == 0) {
      throw new Error("Error: No variants found from this product");
    }

    return result;
  }

  async delete(data: DeleteVariantDTO) {
    const storeRepo = new StoreRepository();
    const productOwner = await storeRepo.getStoreByUID(data.ownerId);

    if (!productOwner) {
      throw new Error("This user didn't own this product");
    }

    const result = await this.repo.deleteVariant(data.variantId);

    return result;
  }
}
