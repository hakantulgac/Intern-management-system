import { createDocsDto } from './create-docs.dto';
declare const UpdatedDocsDto_base: import("@nestjs/mapped-types").MappedType<Partial<createDocsDto>>;
export declare class UpdatedDocsDto extends UpdatedDocsDto_base {
    internid: number;
    accForm: string;
    criRecord: string;
    educDoc: string;
    idRegister: string;
}
export {};
