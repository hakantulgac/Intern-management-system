import { InternService } from "./intern.service";
import { Request } from 'express';
import { InternEntity } from "./intern.entity";
interface typeValue {
    value: number;
}
export declare class InternController {
    private readonly internService;
    constructor(internService: InternService);
    sendMail(req: Request, info: {
        to: string;
        subject: string;
        object: string;
    }): Promise<string>;
    putActive(req: Request, id: string): void;
    getAllInterns(req: Request): Promise<InternEntity[]>;
    findInternIdByMail(req: Request, mail: string): Promise<{
        id: number;
    }>;
    getAllForDetail(req: Request): Promise<InternEntity[]>;
    getInternById(req: Request, id: string): Promise<InternEntity>;
    createIntern(req: Request, intern: InternEntity): Promise<InternEntity>;
    updateInternCompleted(req: Request, id: string, completed: typeValue): Promise<{
        value: number;
    }>;
    updateIntern(req: Request, id: string, updatedIntern: InternEntity): Promise<InternEntity>;
    deleteIntern(req: Request, id: string): Promise<InternEntity>;
}
export {};
