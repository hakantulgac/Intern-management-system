import { DocsService } from './docs.service';
import { Request } from 'express';
import { DocsEntity } from './docs.entity';
export declare class DocsController {
    private readonly docsService;
    constructor(docsService: DocsService);
    createUser(req: Request, docs: DocsEntity): Promise<DocsEntity>;
    findAll(req: Request): Promise<DocsEntity[]>;
    findOne(req: Request, id: string): Promise<DocsEntity>;
    findOneByIntern(req: Request, id: string): Promise<DocsEntity[]>;
    update(req: Request, id: string, updatedDocs: DocsEntity): Promise<DocsEntity>;
    remove(req: Request, id: string): Promise<any>;
}
