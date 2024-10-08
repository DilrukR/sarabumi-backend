"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class OrderStatus extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, color: { required: true, type: () => String }, serial: { required: true, type: () => Number } };
    }
}
exports.OrderStatus = OrderStatus;
