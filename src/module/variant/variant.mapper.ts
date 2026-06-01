import { Variant } from "./Variant";

export class VariantMapper {
  static ToDomain(raw: any): Variant {
    return new Variant(raw.id, raw.name, raw.price, raw.stock);
  }
}
