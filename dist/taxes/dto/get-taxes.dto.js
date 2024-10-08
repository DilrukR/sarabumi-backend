"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTaxClassesOrderByColumn = exports.GetTaxesDto = void 0;
const openapi = require("@nestjs/swagger");
const generic_conditions_dto_1 = require("../../common/dto/generic-conditions.dto");
class GetTaxesDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { text: { required: false, type: () => String }, orderBy: { required: false, enum: require("./get-taxes.dto").QueryTaxClassesOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder } };
    }
}
exports.GetTaxesDto = GetTaxesDto;
var QueryTaxClassesOrderByColumn;
(function (QueryTaxClassesOrderByColumn) {
    QueryTaxClassesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTaxClassesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryTaxClassesOrderByColumn["NAME"] = "NAME";
    QueryTaxClassesOrderByColumn["RATE"] = "RATE";
})(QueryTaxClassesOrderByColumn = exports.QueryTaxClassesOrderByColumn || (exports.QueryTaxClassesOrderByColumn = {}));
