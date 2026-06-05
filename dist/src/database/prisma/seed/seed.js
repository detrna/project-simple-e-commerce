"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prismaHelper_1 = require("../../../shared/prismaHelper");
const seed_data_1 = __importDefault(require("./seed-data"));
async function dbSeed() {
    try {
        await prismaHelper_1.prisma.$transaction(async (tx) => {
            await tx.user.createMany({ data: seed_data_1.default.users, skipDuplicates: true });
            await tx.store.createMany({ data: seed_data_1.default.stores, skipDuplicates: true });
            await tx.product.createMany({
                data: seed_data_1.default.products,
                skipDuplicates: true,
            });
            await tx.variant.createMany({
                data: seed_data_1.default.variants,
                skipDuplicates: true,
            });
            await tx.cart.createMany({ data: seed_data_1.default.carts, skipDuplicates: true });
            await tx.cart_Variant.createMany({
                data: seed_data_1.default.cartVariants,
                skipDuplicates: true,
            });
            await tx.transaction.createMany({
                data: seed_data_1.default.transactions,
                skipDuplicates: true,
            });
            await tx.order.createMany({ data: seed_data_1.default.orders, skipDuplicates: true });
            await tx.review.createMany({ data: seed_data_1.default.reviews, skipDuplicates: true });
        });
        console.log("✅ Seed success");
    }
    catch (error) {
        console.error("❌ Seed failed:", error);
    }
    finally {
        await prismaHelper_1.prisma.$disconnect();
    }
}
dbSeed();
//# sourceMappingURL=seed.js.map