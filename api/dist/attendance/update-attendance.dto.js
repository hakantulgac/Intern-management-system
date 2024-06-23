"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedAttendanceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_attendance_dto_1 = require("./create-attendance.dto");
class UpdatedAttendanceDto extends (0, mapped_types_1.PartialType)(create_attendance_dto_1.createAttendanceDto) {
}
exports.UpdatedAttendanceDto = UpdatedAttendanceDto;
//# sourceMappingURL=update-attendance.dto.js.map