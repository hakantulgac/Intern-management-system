import { UserService } from './user.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private userService;
    constructor(userService: UserService);
}
export {};
