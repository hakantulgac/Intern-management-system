import { Repository, Connection } from 'typeorm';
import { DetailEntity } from './detail.entity';
import { CreateDetailDto } from './create-detail.dto';
import { UpdateDetailDto } from './update-detail.dto';
import { InternEntity } from '../intern/intern.entity';
import { PlanEntity } from '../plan/plan.entity';
export declare class DetailService {
    private readonly detailRepository;
    private readonly internRepository;
    private readonly planRepository;
    private connection;
    constructor(detailRepository: Repository<DetailEntity>, internRepository: Repository<InternEntity>, planRepository: Repository<PlanEntity>, connection: Connection);
    findAll(): Promise<DetailEntity[]>;
    findOneIntern(id: number): Promise<DetailEntity[]>;
    createPlanDetail(createdDetailDto: CreateDetailDto): Promise<DetailEntity>;
    createInternDetail(createdDetailDto: CreateDetailDto): Promise<DetailEntity>;
    update(id: number, updateDetailDto: UpdateDetailDto): Promise<DetailEntity>;
    remove(id: number): Promise<any>;
}
