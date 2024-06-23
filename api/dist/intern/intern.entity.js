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
exports.InternEntity = void 0;
const typeorm_1 = require("typeorm");
let InternEntity = exports.InternEntity = class InternEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InternEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InternEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], InternEntity.prototype, "mail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], InternEntity.prototype, "confirmed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InternEntity.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InternEntity.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InternEntity.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InternEntity.prototype, "field", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'numeric' }),
    __metadata("design:type", Number)
], InternEntity.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], InternEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], InternEntity.prototype, "resume", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InternEntity.prototype, "startdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InternEntity.prototype, "enddate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], InternEntity.prototype, "isactive", void 0);
exports.InternEntity = InternEntity = __decorate([
    (0, typeorm_1.Entity)()
], InternEntity);
//# sourceMappingURL=intern.entity.js.map