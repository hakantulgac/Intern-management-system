"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInternDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_intern_dto_1 = require("./create-intern.dto");
class UpdateInternDto extends (0, mapped_types_1.PartialType)(create_intern_dto_1.CreateInternDto) {
}
exports.UpdateInternDto = UpdateInternDto;
//# sourceMappingURL=update-intern.dto.js.map