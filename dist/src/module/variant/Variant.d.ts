export declare class Variant {
    id: string;
    name: string;
    price: number;
    stock: number;
    constructor(id: string, name: string, price: number, stock: number);
}
export interface CreateVariantDTO {
    name: string;
    price: number;
    stock: number;
    productId: string;
    ownerId: string;
}
export interface DeleteVariantDTO {
    variantId: string;
    ownerId: string;
}
//# sourceMappingURL=Variant.d.ts.map