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
exports.DocsService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const docs_entity_1 = require("./docs.entity");
let DocsService = exports.DocsService = class DocsService {
    constructor(docsRepository, connection) {
        this.docsRepository = docsRepository;
        this.connection = connection;
    }
    create(createDocsDto) {
        const internId = createDocsDto.internid;
        const accForm = createDocsDto.accForm;
        const criRecord = createDocsDto.criRecord;
        const educDoc = createDocsDto.educDoc;
        const idRegister = createDocsDto.idRegister;
        const query = this.connection.query(`
            INSERT INTO docs_entity ("internid", "accForm", "criRecord", "educDoc", "idRegister")
            VALUES (${internId}, '${accForm}', '${criRecord}', '${educDoc}', '${idRegister}')
            ON CONFLICT ("internid") DO UPDATE
            SET "accForm" = EXCLUDED."accForm", "criRecord" = 
            EXCLUDED."criRecord", "educDoc" = EXCLUDED."educDoc", "idRegister" = EXCLUDED."idRegister";
        `);
        return query;
    }
    findAll() {
        return this.connection.query("select * from docs_entity");
    }
    findOne(id) {
        return this.connection.query("select * from docs_entity where internid = " + id);
    }
    finOneByIntern(id) {
        const query = this.connection.query(`
            select * from docs_entity where "internid" = ${id}`);
        return query;
    }
    update(id, updateDocsDto) {
        const docs = new docs_entity_1.DocsEntity();
        docs.internid = updateDocsDto.internid;
        docs.accForm = updateDocsDto.accForm;
        docs.criRecord = updateDocsDto.criRecord;
        docs.educDoc = updateDocsDto.educDoc;
        docs.idRegister = updateDocsDto.idRegister;
        docs.id = id;
        return this.docsRepository.save(docs);
    }
    remove(id) {
        const deleted = this.connection.query(`
            Delete from docs_entity where internid = ${id}
        `);
        return deleted;
    }
};
exports.DocsService = DocsService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docs_entity_1.DocsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Connection])
], DocsService);
//# sourceMappingURL=docs.service.js.map