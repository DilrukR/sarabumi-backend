"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTypeDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_type_dto_1 = require("./create-type.dto");
class UpdateTypeDto extends (0, mapped_types_1.PartialType)(create_type_dto_1.CreateTypeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateTypeDto = UpdateTypeDto;
