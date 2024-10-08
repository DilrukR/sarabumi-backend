"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.PaymentGatewayType = void 0;
const openapi = require("@nestjs/swagger");
const address_entity_1 = require("../../addresses/entities/address.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const coupon_entity_1 = require("../../coupons/entities/coupon.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
const user_entity_1 = require("../../users/entities/user.entity");
var PaymentGatewayType;
(function (PaymentGatewayType) {
    PaymentGatewayType["STRIPE"] = "stripe";
    PaymentGatewayType["CASH_ON_DELIVERY"] = "cod";
})(PaymentGatewayType = exports.PaymentGatewayType || (exports.PaymentGatewayType = {}));
class Order extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { tracking_number: { required: true, type: () => String }, customer_id: { required: true, type: () => Number }, customer_contact: { required: true, type: () => String }, customer: { required: true, type: () => require("../../users/entities/user.entity").User }, parent_order: { required: false, type: () => require("./order.entity").Order }, children: { required: true, type: () => [require("./order.entity").Order] }, status: { required: true, type: () => require("./order-status.entity").OrderStatus }, amount: { required: true, type: () => Number }, sales_tax: { required: true, type: () => Number }, total: { required: true, type: () => Number }, paid_total: { required: true, type: () => Number }, payment_id: { required: false, type: () => String }, payment_gateway: { required: true, enum: require("./order.entity").PaymentGatewayType }, coupon: { required: false, type: () => require("../../coupons/entities/coupon.entity").Coupon }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, discount: { required: false, type: () => Number }, delivery_fee: { required: true, type: () => Number }, delivery_time: { required: true, type: () => String }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] }, billing_address: { required: true, type: () => require("../../addresses/entities/address.entity").UserAddress }, shipping_address: { required: true, type: () => require("../../addresses/entities/address.entity").UserAddress } };
    }
}
exports.Order = Order;
