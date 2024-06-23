import { InternEntity } from "./intern.entity";
import { Repository, Connection } from 'typeorm';
import { CreateInternDto } from "./create-intern.dto";
import { UpdateInternDto } from "./update-intern.dto";
export declare class InternService {
    private readonly internRepository;
    private connection?;
    constructor(internRepository: Repository<InternEntity>, connection?: Connection);
    create(createInternDto: CreateInternDto): Promise<InternEntity>;
    putActive(id: number): void;
    sendMail(to: string, subject: string, body: string): Promise<void>;
    findAll(): Promise<InternEntity[]>;
    findInternIdByMail(mail: string): Promise<{
        id: number;
    }>;
    findAllForDetail(): Promise<InternEntity[]>;
    findOne(id: number): Promise<InternEntity>;
    updateCompleted(id: number, completed: {
        value: number;
    }): Promise<{
        value: number;
    }>;
    update(id: number, updateInternDto: UpdateInternDto): Promise<InternEntity>;
    remove(id: number): Promise<InternEntity>;
}
