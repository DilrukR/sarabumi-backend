"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const address_entity_1 = require("../../addresses/entities/address.entity");
const core_entity_1 = require("../../common/entities/core.entity");
// import { Order } from 'src/orders/entities/order.entity';
const shop_entity_1 = require("../../shops/entities/shop.entity");
class User extends core_entity_1.CoreEntity {
    constructor() {
        super(...arguments);
        this.is_active = true;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: false, type: () => String }, shop_id: { required: false, type: () => Number }, profile: { required: false, type: () => require("./profile.entity").Profile }, shops: { required: false, type: () => [require("../../shops/entities/shop.entity").Shop] }, managed_shop: { required: false, type: () => require("../../shops/entities/shop.entity").Shop }, is_active: { required: false, type: () => Boolean, default: true }, address: { required: false, type: () => [require("../../addresses/entities/address.entity").Address] } };
    }
}
exports.User = User;
