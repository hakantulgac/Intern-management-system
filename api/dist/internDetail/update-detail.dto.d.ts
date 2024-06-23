import { CreateDetailDto } from './create-detail.dto';
declare const UpdateDetailDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDetailDto>>;
export declare class UpdateDetailDto extends UpdateDetailDto_base {
    intern: number;
    plan: number;
    startDate: string;
    endDate: string;
    done: boolean;
    point: number;
}
export {};
