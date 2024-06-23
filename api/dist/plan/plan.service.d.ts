import { PlanEntity } from "./plan.entity";
import { Repository, Connection } from 'typeorm';
import { CreatePlanDto } from "./create-plan.dto";
import { UpdatePlanDto } from "./update-plan.dto";
export declare class PlanService {
    private readonly planRepository;
    private connection;
    constructor(planRepository: Repository<PlanEntity>, connection: Connection);
    create(createPlanDto: CreatePlanDto): Promise<PlanEntity>;
    findAll(): Promise<PlanEntity[]>;
    findAllForIntern(): Promise<PlanEntity[]>;
    findOne(id: number): Promise<PlanEntity>;
    update(id: number, updatePlanDto: UpdatePlanDto): Promise<PlanEntity>;
    remove(id: number): Promise<PlanEntity>;
}
