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
exports.PlanService = void 0;
const common_1 = require("@nestjs/common");
const plan_entity_1 = require("./plan.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PlanService = exports.PlanService = class PlanService {
    constructor(planRepository, connection) {
        this.planRepository = planRepository;
        this.connection = connection;
    }
    create(createPlanDto) {
        const plan = new plan_entity_1.PlanEntity();
        plan.title = createPlanDto.title;
        plan.description = createPlanDto.description;
        plan.days = createPlanDto.days;
        plan.field = createPlanDto.field;
        return this.planRepository.save(plan);
    }
    findAll() {
        const result = this.connection.query("select * from plan_entity");
        return result;
    }
    findAllForIntern() {
        const result = this.connection.query('select * from plan_entity');
        console.log(result);
        return result;
    }
    findOne(id) {
        return this.planRepository.findOneById(id);
    }
    update(id, updatePlanDto) {
        const plan = new plan_entity_1.PlanEntity();
        plan.title = updatePlanDto.title;
        plan.description = updatePlanDto.description;
        plan.days = updatePlanDto.days;
        plan.field = updatePlanDto.field;
        plan.id = id;
        return this.planRepository.save(plan);
    }
    remove(id) {
        this.connection.query('delete from detail_entity where "planId" = ' + id);
        const deleted = this.planRepository.findOneById(id);
        this.planRepository.delete(id);
        return deleted;
    }
};
exports.PlanService = PlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plan_entity_1.PlanEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Connection])
], PlanService);
//# sourceMappingURL=plan.service.js.map