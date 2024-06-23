import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { Response, Request } from 'express';
import { JwtService } from "@nestjs/jwt";
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: UserEntity, response: Response): Promise<{
        jwt: string;
        id: number;
        name: string;
        role: string;
        field: string;
    }>;
    createField(field: {
        name: string;
    }, req: Request): Promise<any>;
    deleteField(id: string, req: Request): Promise<any>;
    getAllFields(): Promise<{
        id: string;
        name: string;
    }>;
    auth(req: Request): Promise<{
        id: number;
        name: string;
        role: string;
        field: string;
    }>;
    logout(response: Response): {
        message: string;
    };
    getId(req: Request, mail: string): Promise<{
        id: string;
    }>;
    getAllUsers(req: Request): Promise<UserEntity[]>;
    createUser(req: Request, user: UserEntity): Promise<{
        id: number;
        name: string;
        role: string;
        field: string;
    }>;
    findOne(req: Request, id: string): Promise<UserEntity>;
    update(req: Request, id: string, updatedUser: UserEntity): Promise<UserEntity>;
    remove(req: Request, name: string): Promise<any>;
}
