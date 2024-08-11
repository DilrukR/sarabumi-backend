"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const orders_json_1 = __importDefault(require("./orders.json"));
const order_statuses_json_1 = __importDefault(require("./order-statuses.json"));
const class_transformer_1 = require("class-transformer");
const order_entity_1 = require("./entities/order.entity");
const order_status_entity_1 = require("./entities/order-status.entity");
const paginate_1 = require("../common/pagination/paginate");
const orders = (0, class_transformer_1.plainToClass)(order_entity_1.Order, orders_json_1.default);
const orderStatus = (0, class_transformer_1.plainToClass)(order_status_entity_1.OrderStatus, order_statuses_json_1.default);
let OrdersService = class OrdersService {
    constructor() {
        this.orders = orders;
        this.orderStatus = orderStatus;
    }
    create(createOrderInput) {
        return this.orders[0];
    }
    getOrders({ limit, page, customer_id, tracking_number, search, shop_id, }) {
        var _a;
        if (!page)
            page = 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.orders;
        if (shop_id && shop_id !== 'undefined') {
            data = (_a = this.orders) === null || _a === void 0 ? void 0 : _a.filter((p) => { var _a; return ((_a = p === null || p === void 0 ? void 0 : p.shop) === null || _a === void 0 ? void 0 : _a.id) === Number(shop_id); });
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/orders?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getOrderById(id) {
        return this.orders.find((p) => p.id === Number(id));
    }
    getOrderByTrackingNumber(tracking_number) {
        const parentOrder = this.orders.find((p) => p.tracking_number === tracking_number);
        if (!parentOrder) {
            return this.orders[0];
        }
        return parentOrder;
    }
    getOrderStatuses({ limit, page, search, orderBy, }) {
        if (!page || page.toString() === 'undefined')
            page = 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const data = this.orderStatus;
        // if (shop_id) {
        //   data = this.orders?.filter((p) => p?.shop?.id === shop_id);
        // }
        const results = data.slice(startIndex, endIndex);
        const url = `/order-status?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getOrderStatus(slug) {
        return this.orderStatus.find((p) => p.name === slug);
    }
    update(id, updateOrderInput) {
        return this.orders[0];
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
    verifyCheckout(input) {
        return {
            total_tax: 0,
            shipping_charge: 0,
            unavailable_products: [],
        };
    }
    createOrderStatus(createOrderStatusInput) {
        return this.orderStatus[0];
    }
    updateOrderStatus(updateOrderStatusInput) {
        return this.orderStatus[0];
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
exports.OrdersService = OrdersService;
