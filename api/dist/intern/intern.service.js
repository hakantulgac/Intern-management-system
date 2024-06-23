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
exports.InternService = void 0;
const common_1 = require("@nestjs/common");
const intern_entity_1 = require("./intern.entity");
const typeorm_1 = require("typeorm");
const nodemailer = require("nodemailer");
const typeorm_2 = require("@nestjs/typeorm");
let InternService = exports.InternService = class InternService {
    constructor(internRepository, connection) {
        this.internRepository = internRepository;
        this.connection = connection;
    }
    create(createInternDto) {
        const intern = new intern_entity_1.InternEntity();
        intern.name = createInternDto.name;
        intern.mail = createInternDto.mail;
        intern.confirmed = createInternDto.confirmed;
        intern.grade = createInternDto.grade;
        intern.school = createInternDto.school;
        intern.department = createInternDto.department;
        intern.field = createInternDto.field;
        intern.completed = createInternDto.completed;
        intern.image = createInternDto.image;
        intern.resume = createInternDto.resume;
        intern.startdate = createInternDto.startdate;
        intern.enddate = createInternDto.enddate;
        return this.internRepository.save(intern);
    }
    putActive(id) {
        this.connection.query(`
            update intern_entity 
            set isactive = ${true}
            where id = ${id}
        `);
    }
    async sendMail(to, subject, body) {
        const transporter = await nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.email,
                pass: process.env.emailPassword,
            },
        });
        await transporter.sendMail({
            from: 'odevicin_@outlook.com',
            to,
            subject,
            text: `
  ${body}  
  
  Lütfen ekteki başvuru formunu doldurup, adli sicil kaydınız(e-devlet), 
öğrenim belgeniz(e-devlet) ve nüfus kayıt örneğiniz(e-devlet) ile birlikte,
sisteme ilk girişinizde ilgili alana yükleyiniz. 
            `,
            attachments: [
                {
                    filename: 'Staj Kabul Formu.pdf',
                    path: 'src/intern/Staj Kabul Formu.pdf'
                }
            ]
        });
    }
    async findAll() {
        const result = await this.connection.query('SELECT * FROM intern_entity');
        return result;
    }
    findInternIdByMail(mail) {
        const result = this.connection.query(`select id,isactive from intern_entity
             where mail = '${mail}'`);
        return result;
    }
    findAllForDetail() {
        const result = this.connection.query('select * from intern_entity');
        console.log(result);
        return result;
    }
    findOne(id) {
        return this.internRepository.findOneById(id);
    }
    updateCompleted(id, completed) {
        const result = completed.value;
        return this.connection.query("update intern_entity set completed = " + result + " where id = " + id);
    }
    update(id, updateInternDto) {
        const intern = new intern_entity_1.InternEntity();
        intern.name = updateInternDto.name;
        intern.mail = updateInternDto.mail;
        intern.confirmed = updateInternDto.confirmed;
        intern.grade = updateInternDto.grade;
        intern.school = updateInternDto.school;
        intern.department = updateInternDto.department;
        intern.field = updateInternDto.field;
        intern.completed = updateInternDto.completed;
        intern.image = updateInternDto.image;
        intern.resume = updateInternDto.resume;
        intern.startdate = updateInternDto.startdate;
        intern.enddate = updateInternDto.enddate;
        intern.id = id;
        return this.internRepository.save(intern);
    }
    remove(id) {
        const deleted = this.internRepository.findOneById(id);
        this.internRepository.delete(id);
        return deleted;
    }
};
exports.InternService = InternService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(intern_entity_1.InternEntity)),
    __param(1, (0, common_1.Inject)(typeorm_1.Connection)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Connection])
], InternService);
//# sourceMappingURL=intern.service.js.map