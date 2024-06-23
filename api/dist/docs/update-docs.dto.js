"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedDocsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_docs_dto_1 = require("./create-docs.dto");
class UpdatedDocsDto extends (0, mapped_types_1.PartialType)(create_docs_dto_1.createDocsDto) {
}
exports.UpdatedDocsDto = UpdatedDocsDto;
//# sourceMappingURL=update-docs.dto.js.map