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
exports.DocsController = void 0;
const common_1 = require("@nestjs/common");
const docs_service_1 = require("./docs.service");
const docs_entity_1 = require("./docs.entity");
let DocsController = exports.DocsController = class DocsController {
    constructor(docsService) {
        this.docsService = docsService;
    }
    createUser(req, docs) {
        try {
            const cookie = req.cookies['jwt'];
            if (cookie) {
                return this.docsService.create(docs);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    findAll(req) {
        try {
            const cookie = req.cookies['jwt'];
            if (cookie) {
                return this.docsService.findAll();
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
                return this.docsService.findOne(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    findOneByIntern(req, id) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.docsService.finOneByIntern(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    update(req, id, updatedDocs) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.docsService.update(+id, updatedDocs);
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
                return this.docsService.remove(+id);
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
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, docs_entity_1.DocsEntity]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DocsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('intern/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DocsController.prototype, "findOneByIntern", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, docs_entity_1.DocsEntity]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "remove", null);
exports.DocsController = DocsController = __decorate([
    (0, common_1.Controller)('docs'),
    __metadata("design:paramtypes", [docs_service_1.DocsService])
], DocsController);
//# sourceMappingURL=docs.controller.js.map