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
exports.PlanController = void 0;
const common_1 = require("@nestjs/common");
const plan_service_1 = require("./plan.service");
const plan_entity_1 = require("./plan.entity");
let PlanController = exports.PlanController = class PlanController {
    constructor(planService) {
        this.planService = planService;
    }
    getAll(req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.planService.findAll();
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    getAllForIntern(req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.planService.findAllForIntern();
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    create(req, plan) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.planService.create(plan);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    findOne(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.planService.findOne(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    update(req, id, updatedUser) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.planService.update(+id, updatedUser);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    remove(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.planService.remove(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("intern"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getAllForIntern", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, plan_entity_1.PlanEntity]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, plan_entity_1.PlanEntity]),
    __metadata("design:returntype", void 0)
], PlanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PlanController.prototype, "remove", null);
exports.PlanController = PlanController = __decorate([
    (0, common_1.Controller)("plans"),
    __metadata("design:paramtypes", [plan_service_1.PlanService])
], PlanController);
//# sourceMappingURL=plan.controller.js.map