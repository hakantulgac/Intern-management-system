import { createAttendanceDto } from './create-attendance.dto';
declare const UpdatedAttendanceDto_base: import("@nestjs/mapped-types").MappedType<Partial<createAttendanceDto>>;
export declare class UpdatedAttendanceDto extends UpdatedAttendanceDto_base {
    internid: number;
    date: string;
    value: boolean;
    note: string;
}
export {};
