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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailEntity = void 0;
const intern_entity_1 = require("../intern/intern.entity");
const plan_entity_1 = require("../plan/plan.entity");
const typeorm_1 = require("typeorm");
let DetailEntity = exports.DetailEntity = class DetailEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetailEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => intern_entity_1.InternEntity, intern => intern.id),
    __metadata("design:type", Number)
], DetailEntity.prototype, "intern", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.PlanEntity, plan => plan.id),
    __metadata("design:type", Number)
], DetailEntity.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailEntity.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], DetailEntity.prototype, "done", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetailEntity.prototype, "point", void 0);
exports.DetailEntity = DetailEntity = __decorate([
    (0, typeorm_1.Entity)()
], DetailEntity);
//# sourceMappingURL=detail.entity.js.map