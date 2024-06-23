import { createUserDto } from './create-user.dto';
declare const UpdatedUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<createUserDto>>;
export declare class UpdatedUserDto extends UpdatedUserDto_base {
    name: string;
    password: string;
    role: string;
    field: string;
}
export {};
