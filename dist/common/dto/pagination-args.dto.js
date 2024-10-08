"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationArgs = void 0;
const openapi = require("@nestjs/swagger");
class PaginationArgs {
    constructor() {
        this.limit = 15;
        this.page = 1;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: false, type: () => Number, default: 15 }, page: { required: false, type: () => Number, default: 1 } };
    }
}
exports.PaginationArgs = PaginationArgs;
