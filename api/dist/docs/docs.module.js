"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsModule = void 0;
const modules_1 = require("@nestjs/common/decorators/modules");
const docs_controller_1 = require("./docs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const docs_service_1 = require("./docs.service");
const docs_entity_1 = require("./docs.entity");
let DocsModule = exports.DocsModule = class DocsModule {
};
exports.DocsModule = DocsModule = __decorate([
    (0, modules_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docs_entity_1.DocsEntity])],
        controllers: [docs_controller_1.DocsController],
        providers: [docs_service_1.DocsService],
    })
], DocsModule);
//# sourceMappingURL=docs.module.js.map