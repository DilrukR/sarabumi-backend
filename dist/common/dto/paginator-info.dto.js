"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatorInfo = void 0;
const openapi = require("@nestjs/swagger");
class PaginatorInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { count: { required: true, type: () => Number }, currentPage: { required: true, type: () => Number }, firstItem: { required: true, type: () => Number }, lastItem: { required: true, type: () => Number }, lastPage: { required: true, type: () => Number }, perPage: { required: true, type: () => Number }, total: { required: true, type: () => Number }, 'first_page_url': { required: true, type: () => String }, 'last_page_url': { required: true, type: () => String }, 'next_page_url': { required: true, type: () => String }, 'prev_page_url': { required: true, type: () => String } };
    }
}
exports.PaginatorInfo = PaginatorInfo;
