"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const intern_module_1 = require("./intern/intern.module");
const docs_module_1 = require("./docs/docs.module");
const plan_module_1 = require("./plan/plan.module");
const detail_module_1 = require("./internDetail/detail.module");
const attendance_module_1 = require("./attendance/attendance.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/user.entity");
const docs_entity_1 = require("./docs/docs.entity");
const plan_entity_1 = require("./plan/plan.entity");
const intern_entity_1 = require("./intern/intern.entity");
const detail_entity_1 = require("./internDetail/detail.entity");
const attendance_entity_1 = require("./attendance/attendance.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'db_intern_management',
                entities: [user_entity_1.UserEntity, plan_entity_1.PlanEntity, intern_entity_1.InternEntity, detail_entity_1.DetailEntity, attendance_entity_1.AttendanceEntity, docs_entity_1.DocsEntity],
                synchronize: true,
                logging: true
            }),
            user_module_1.UserModule,
            intern_module_1.InternModule,
            plan_module_1.PlanModule,
            detail_module_1.DetailModule,
            attendance_module_1.AttendanceModule,
            docs_module_1.DocsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map