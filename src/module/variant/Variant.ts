export class Variant {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public stock: number,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
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
