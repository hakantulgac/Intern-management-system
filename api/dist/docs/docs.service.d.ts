import { Repository, Connection } from 'typeorm';
import { DocsEntity } from "./docs.entity";
import { createDocsDto } from "./create-docs.dto";
import { UpdatedDocsDto } from "./update-docs.dto";
export declare class DocsService {
    private readonly docsRepository;
    private connection;
    constructor(docsRepository: Repository<DocsEntity>, connection: Connection);
    create(createDocsDto: createDocsDto): Promise<DocsEntity>;
    findAll(): Promise<DocsEntity[]>;
    findOne(id: number): Promise<any>;
    finOneByIntern(id: number): Promise<DocsEntity[]>;
    update(id: number, updateDocsDto: UpdatedDocsDto): Promise<DocsEntity>;
    remove(id: number): Promise<any>;
}
