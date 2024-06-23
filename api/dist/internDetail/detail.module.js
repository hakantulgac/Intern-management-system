"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailModule = void 0;
const common_1 = require("@nestjs/common");
const detail_controller_1 = require("./detail.controller");
const detail_service_1 = require("./detail.service");
const typeorm_1 = require("@nestjs/typeorm");
const detail_entity_1 = require("./detail.entity");
const intern_entity_1 = require("../intern/intern.entity");
const plan_entity_1 = require("../plan/plan.entity");
let DetailModule = exports.DetailModule = class DetailModule {
};
exports.DetailModule = DetailModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([detail_entity_1.DetailEntity, intern_entity_1.InternEntity, plan_entity_1.PlanEntity])],
        controllers: [detail_controller_1.DetailController],
        providers: [detail_service_1.DetailService]
    })
], DetailModule);
//# sourceMappingURL=detail.module.js.map