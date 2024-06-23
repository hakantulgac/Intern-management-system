import { CreatePlanDto } from './create-plan.dto';
declare const UpdatePlanDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePlanDto>>;
export declare class UpdatePlanDto extends UpdatePlanDto_base {
    title: string;
    description: string;
    days: number;
    field: string;
}
export {};
