"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_order_dto_1 = require("./create-order.dto");
class UpdateOrderDto extends (0, mapped_types_1.PartialType)(create_order_dto_1.CreateOrderDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateOrderDto = UpdateOrderDto;
