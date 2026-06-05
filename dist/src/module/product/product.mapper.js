"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
const Product_1 = require("./Product");
class ProductMapper {
    static toDomain(raw) {
        return new Product_1.Product(raw.id, raw.name, raw.category, raw.subCategory, raw.createdAt);
    }
}
exports.ProductMapper = ProductMapper;
//# sourceMappingURL=product.mapper.js.map