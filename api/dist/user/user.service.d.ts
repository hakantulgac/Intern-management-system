import { Repository, Connection } from 'typeorm';
import { UserEntity } from "./user.entity";
import { createUserDto } from "./create-user.dto";
import { UpdatedUserDto } from "./update-user.dto";
export declare class UserService {
    private readonly userRepository;
    private connection;
    constructor(userRepository: Repository<UserEntity>, connection: Connection);
    login(authInfos: createUserDto): Promise<UserEntity>;
    create(createUserDto: createUserDto): Promise<UserEntity>;
    createField(name: string): Promise<any>;
    deleteField(id: string): Promise<any>;
    findAllFields(): Promise<{
        id: string;
        name: string;
    }>;
    findId(mail: string): Promise<{
        id: string;
    }>;
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdatedUserDto): Promise<UserEntity>;
    remove(name: string): Promise<any>;
}
