export declare const Category: {
    readonly ELECTRONICS: "ELECTRONICS";
    readonly BOOKS: "BOOKS";
    readonly FASHION: "FASHION";
};
export type Category = (typeof Category)[keyof typeof Category];
export declare const Subcategory: {
    readonly PHONE: "PHONE";
    readonly LAPTOP: "LAPTOP";
    readonly TV: "TV";
    readonly NOVEL: "NOVEL";
    readonly PSYCHOLOGY: "PSYCHOLOGY";
    readonly HEALTH: "HEALTH";
    readonly SHIRT: "SHIRT";
    readonly JACKET: "JACKET";
    readonly TROUSER: "TROUSER";
};
export type Subcategory = (typeof Subcategory)[keyof typeof Subcategory];
export declare const Shipment: {
    readonly WAITING_OWNER: "WAITING_OWNER";
    readonly WAITING_COURIER: "WAITING_COURIER";
    readonly ON_THE_WAY: "ON_THE_WAY";
    readonly DELIVERED: "DELIVERED";
};
export type Shipment = (typeof Shipment)[keyof typeof Shipment];
//# sourceMappingURL=enums.d.ts.map