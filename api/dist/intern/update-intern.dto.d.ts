import { CreateInternDto } from './create-intern.dto';
declare const UpdateInternDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateInternDto>>;
export declare class UpdateInternDto extends UpdateInternDto_base {
    name: string;
    mail: string;
    confirmed: boolean;
    grade: number;
    school: string;
    department: string;
    field: string;
    completed: number;
    image: string;
    resume: string;
    startdate: string;
    enddate: string;
}
export {};
