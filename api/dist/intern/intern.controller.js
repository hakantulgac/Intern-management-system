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
exports.InternController = void 0;
const common_1 = require("@nestjs/common");
const intern_service_1 = require("./intern.service");
const intern_entity_1 = require("./intern.entity");
let InternController = exports.InternController = class InternController {
    constructor(internService) {
        this.internService = internService;
    }
    async sendMail(req, info) {
        try {
            await this.internService.sendMail(info.to, info.subject, info.object);
            return 'E-posta gönderildi!';
        }
        catch (error) {
            return 'E-posta gönderilemedi!';
        }
    }
    putActive(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                this.internService.putActive(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    async getAllInterns(req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return await this.internService.findAll();
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    findInternIdByMail(req, mail) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.internService.findInternIdByMail(mail);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    getAllForDetail(req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.internService.findAllForDetail();
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    getInternById(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.internService.findOne(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    createIntern(req, intern) {
        return this.internService.create(intern);
    }
    updateInternCompleted(req, id, completed) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.internService.updateCompleted(+id, completed);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    updateIntern(req, id, updatedIntern) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.internService.update(+id, updatedIntern);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    deleteIntern(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.internService.remove(+id);
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
    (0, common_1.Post)("sendmail"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InternController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Put)('active/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], InternController.prototype, "putActive", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InternController.prototype, "getAllInterns", null);
__decorate([
    (0, common_1.Get)('mail/:mail'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('mail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InternController.prototype, "findInternIdByMail", null);
__decorate([
    (0, common_1.Get)("plan"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InternController.prototype, "getAllForDetail", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InternController.prototype, "getInternById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, intern_entity_1.InternEntity]),
    __metadata("design:returntype", void 0)
], InternController.prototype, "createIntern", null);
__decorate([
    (0, common_1.Put)("completed/:id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], InternController.prototype, "updateInternCompleted", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, intern_entity_1.InternEntity]),
    __metadata("design:returntype", void 0)
], InternController.prototype, "updateIntern", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], InternController.prototype, "deleteIntern", null);
exports.InternController = InternController = __decorate([
    (0, common_1.Controller)('interns'),
    __metadata("design:paramtypes", [intern_service_1.InternService])
], InternController);
//# sourceMappingURL=intern.controller.js.map