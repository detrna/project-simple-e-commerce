"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantMapper = void 0;
const Variant_1 = require("./Variant");
class VariantMapper {
    static ToDomain(raw) {
        return new Variant_1.Variant(raw.id, raw.name, raw.price, raw.stock);
    }
}
exports.VariantMapper = VariantMapper;
//# sourceMappingURL=variant.mapper.js.map