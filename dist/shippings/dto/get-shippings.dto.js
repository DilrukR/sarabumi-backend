"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryShippingClassesOrderByColumn = exports.GetShippingsDto = void 0;
const openapi = require("@nestjs/swagger");
const generic_conditions_dto_1 = require("../../common/dto/generic-conditions.dto");
class GetShippingsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { text: { required: false, type: () => String }, orderBy: { required: false, enum: require("./get-shippings.dto").QueryShippingClassesOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder } };
    }
}
exports.GetShippingsDto = GetShippingsDto;
var QueryShippingClassesOrderByColumn;
(function (QueryShippingClassesOrderByColumn) {
    QueryShippingClassesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryShippingClassesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryShippingClassesOrderByColumn["NAME"] = "NAME";
    QueryShippingClassesOrderByColumn["AMOUNT"] = "AMOUNT";
})(QueryShippingClassesOrderByColumn = exports.QueryShippingClassesOrderByColumn || (exports.QueryShippingClassesOrderByColumn = {}));
