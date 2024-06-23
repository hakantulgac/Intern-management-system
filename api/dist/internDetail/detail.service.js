"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const detail_entity_1 = require("./detail.entity");
const intern_entity_1 = require("../intern/intern.entity");
const plan_entity_1 = require("../plan/plan.entity");
let DetailService = exports.DetailService = class DetailService {
    constructor(detailRepository, internRepository, planRepository, connection) {
        this.detailRepository = detailRepository;
        this.internRepository = internRepository;
        this.planRepository = planRepository;
        this.connection = connection;
    }
    findAll() {
        return this.detailRepository.find({ relations: ['intern', 'plan'] });
    }
    findOneIntern(id) {
        return this.detailRepository
            .createQueryBuilder('detail')
            .leftJoinAndSelect('detail.intern', 'intern')
            .leftJoinAndSelect('detail.plan', 'plan')
            .where('detail.intern.id = :id', { id })
            .getMany();
    }
    async createPlanDetail(createdDetailDto) {
        if (createdDetailDto !== null) {
            const plan = await this.planRepository.findOne({
                where: { title: String(createdDetailDto.plan) },
                order: { id: 'DESC' }
            });
            const detail = new detail_entity_1.DetailEntity();
            detail.intern = createdDetailDto.intern;
            detail.plan = plan.id;
            detail.startDate = createdDetailDto.startDate;
            detail.endDate = createdDetailDto.endDate;
            detail.done = createdDetailDto.done;
            detail.point = createdDetailDto.point;
            return this.detailRepository.save(detail);
        }
    }
    async createInternDetail(createdDetailDto) {
        if (createdDetailDto !== null) {
            const intern = await this.internRepository.findOne({
                where: { name: String(createdDetailDto.intern) },
                order: { id: 'DESC' }
            });
            const detail = new detail_entity_1.DetailEntity();
            detail.intern = intern.id;
            detail.plan = createdDetailDto.plan;
            detail.startDate = createdDetailDto.startDate;
            detail.endDate = createdDetailDto.endDate;
            detail.done = createdDetailDto.done;
            detail.point = createdDetailDto.point;
            return this.detailRepository.save(detail);
        }
    }
    async update(id, updateDetailDto) {
        this.connection.query("update detail_entity set point = " + 0 + " where done = " + false);
        const detail = new detail_entity_1.DetailEntity();
        detail.intern = updateDetailDto.intern;
        detail.plan = updateDetailDto.plan;
        detail.startDate = updateDetailDto.startDate;
        detail.endDate = updateDetailDto.endDate;
        detail.done = updateDetailDto.done;
        detail.point = updateDetailDto.point;
        detail.id = id;
        const result = this.detailRepository.save(detail);
        return result;
    }
    remove(id) {
        this.connection.query('delete from detail_entity where "internId" = ' + id);
        const deleted = this.connection.query('delete from intern_entity where "id" = ' + id);
        return deleted;
    }
};
exports.DetailService = DetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(detail_entity_1.DetailEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(intern_entity_1.InternEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(plan_entity_1.PlanEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Connection])
], DetailService);
//# sourceMappingURL=detail.service.js.map