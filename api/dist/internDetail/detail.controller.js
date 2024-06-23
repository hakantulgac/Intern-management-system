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
exports.DetailController = void 0;
const common_1 = require("@nestjs/common");
const detail_service_1 = require("./detail.service");
const detail_entity_1 = require("./detail.entity");
let DetailController = exports.DetailController = class DetailController {
    constructor(detailService) {
        this.detailService = detailService;
    }
    getAllDetails(req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (local || cookie) {
                return this.detailService.findAll();
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    getDetailById(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.detailService.findOneIntern(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    createInternDetail(req, detail) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.detailService.createInternDetail(detail);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    createPlanDetail(req, detail) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.detailService.createPlanDetail(detail);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    updateDetail(req, id, updatedDetail) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.detailService.update(+id, updatedDetail);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    deleteDetail(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.detailService.remove(+id);
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
], DetailController.prototype, "getAllDetails", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DetailController.prototype, "getDetailById", null);
__decorate([
    (0, common_1.Post)("intern"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, detail_entity_1.DetailEntity]),
    __metadata("design:returntype", void 0)
], DetailController.prototype, "createInternDetail", null);
__decorate([
    (0, common_1.Post)("plan"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, detail_entity_1.DetailEntity]),
    __metadata("design:returntype", void 0)
], DetailController.prototype, "createPlanDetail", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, detail_entity_1.DetailEntity]),
    __metadata("design:returntype", void 0)
], DetailController.prototype, "updateDetail", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DetailController.prototype, "deleteDetail", null);
exports.DetailController = DetailController = __decorate([
    (0, common_1.Controller)("details"),
    __metadata("design:paramtypes", [detail_service_1.DetailService])
], DetailController);
//# sourceMappingURL=detail.controller.js.map