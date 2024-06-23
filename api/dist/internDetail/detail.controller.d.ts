import { DetailService } from "./detail.service";
import { Request } from 'express';
import { DetailEntity } from "./detail.entity";
export declare class DetailController {
    private readonly detailService;
    constructor(detailService: DetailService);
    getAllDetails(req: Request): Promise<DetailEntity[]>;
    getDetailById(req: Request, id: string): Promise<DetailEntity[]>;
    createInternDetail(req: Request, detail: DetailEntity): Promise<DetailEntity>;
    createPlanDetail(req: Request, detail: DetailEntity): Promise<DetailEntity>;
    updateDetail(req: Request, id: string, updatedDetail: DetailEntity): Promise<DetailEntity>;
    deleteDetail(req: Request, id: string): Promise<any>;
}
