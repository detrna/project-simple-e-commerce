import { Product } from "./Product"

export class ProductMapper{
    static toDomain(raw: any): Product{
        return new Product(
            raw.id,
            raw.name,
            raw.category,
            raw.subCategory,
            raw.createdAt
        )
    }
}