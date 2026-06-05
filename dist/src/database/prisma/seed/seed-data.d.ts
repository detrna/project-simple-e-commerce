import "dotenv/config";
declare const seed: {
    users: {
        id: string;
        name: string;
        email: string;
        password: string;
    }[];
    stores: {
        id: string;
        address: string;
        email: string;
        name: string;
        userId: string;
    }[];
    products: ({
        id: string;
        name: string;
        category: "ELECTRONICS";
        subcategory: "PHONE";
        storeId: string;
    } | {
        id: string;
        name: string;
        category: "ELECTRONICS";
        subcategory: "LAPTOP";
        storeId: string;
    } | {
        id: string;
        name: string;
        category: "FASHION";
        subcategory: "SHIRT";
        storeId: string;
    })[];
    variants: {
        id: string;
        name: string;
        price: number;
        stock: number;
        productId: string;
    }[];
    carts: {
        id: string;
        userId: string;
    }[];
    cartVariants: {
        id: string;
        cartId: string;
        variantId: string;
        quantity: number;
    }[];
    transactions: {
        id: string;
    }[];
    orders: ({
        id: string;
        quantity: number;
        fee: number;
        userId: string;
        variantId: string;
        transactionId: string;
        payment: boolean;
        shipment: "WAITING_OWNER";
    } | {
        id: string;
        quantity: number;
        fee: number;
        userId: string;
        variantId: string;
        transactionId: string;
        payment: boolean;
        shipment: "ON_THE_WAY";
    } | {
        id: string;
        quantity: number;
        fee: number;
        userId: string;
        variantId: string;
        transactionId: string;
        payment: boolean;
        shipment: "WAITING_COURIER";
    })[];
    reviews: {
        id: string;
        score: number;
        content: string;
        orderId: string;
    }[];
};
export default seed;
//# sourceMappingURL=seed-data.d.ts.map