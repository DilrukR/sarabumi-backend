"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCategoriesAlongChildrenOrderByColumn = exports.GetCategoriesAlongChildrenDto = void 0;
const openapi = require("@nestjs/swagger");
const generic_conditions_dto_1 = require("../../common/dto/generic-conditions.dto");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
class GetCategoriesAlongChildrenDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-categories-along-children.dto").QueryCategoriesAlongChildrenOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, hasType: { required: false, type: () => String } };
    }
}
exports.GetCategoriesAlongChildrenDto = GetCategoriesAlongChildrenDto;
var QueryCategoriesAlongChildrenOrderByColumn;
(function (QueryCategoriesAlongChildrenOrderByColumn) {
    QueryCategoriesAlongChildrenOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryCategoriesAlongChildrenOrderByColumn["NAME"] = "NAME";
    QueryCategoriesAlongChildrenOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryCategoriesAlongChildrenOrderByColumn = exports.QueryCategoriesAlongChildrenOrderByColumn || (exports.QueryCategoriesAlongChildrenOrderByColumn = {}));
