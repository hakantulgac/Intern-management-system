import { PlanService } from "./plan.service";
import { Request } from 'express';
import { PlanEntity } from "./plan.entity";
export declare class PlanController {
    private readonly planService;
    constructor(planService: PlanService);
    getAll(req: Request): Promise<PlanEntity[]>;
    getAllForIntern(req: Request): Promise<PlanEntity[]>;
    create(req: Request, plan: PlanEntity): Promise<PlanEntity>;
    findOne(req: Request, id: string): Promise<PlanEntity>;
    update(req: Request, id: string, updatedUser: PlanEntity): Promise<PlanEntity>;
    remove(req: Request, id: string): Promise<PlanEntity>;
}
