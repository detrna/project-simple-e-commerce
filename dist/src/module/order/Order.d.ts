export interface Order {
    id: string;
    quantity: number;
    payment: boolean;
    shipment: Shipment;
    fee: number;
    transactionId: string | null;
    variantId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
type Shipment = "WAITING_OWNER" | "WAITING_COURIER" | "ON_THE_WAY" | "DELIVERED";
export interface CreateOrderDTO {
    id?: string;
    variantId: string;
    quantity: number;
    userId: string;
}
export {};
//# sourceMappingURL=Order.d.ts.map