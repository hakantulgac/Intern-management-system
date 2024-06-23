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
exports.AttendanceService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const attendance_entity_1 = require("./attendance.entity");
let AttendanceService = exports.AttendanceService = class AttendanceService {
    constructor(attendanceRepository, connection) {
        this.attendanceRepository = attendanceRepository;
        this.connection = connection;
    }
    create(createAttendanceDto) {
        const internId = createAttendanceDto.internid;
        const date = createAttendanceDto.date;
        const value = createAttendanceDto.value;
        const query = this.connection.query(`
            INSERT INTO attendance_entity ("internid", "date", "value")
            VALUES (${internId}, '${date}', ${value})
            ON CONFLICT ("internid", "date") DO UPDATE
            SET "value" = EXCLUDED."value";
        `);
        return query;
    }
    createNote(note, internid, date) {
        const newNote = this.connection.query(`
            update attendance_entity 
            set note = '${note}'
            where internid = ${internid}
            and date =  '${date}'
        `);
        newNote.finally(() => {
            console.log({ internid: internid, note: note, date: date });
            return { internid: internid, note: note, date: date };
        });
        return null;
    }
    async findAll() {
        return await this.connection.query("select * from attendance_entity");
    }
    async findOne(id) {
        return await this.attendanceRepository.findOneById(id);
    }
    async findOneByIntern(id) {
        const query = await this.connection.query(`
            select * from attendance_entity where "internid" = ${id}`);
        return query;
    }
    update(id, updateAttendanceDto) {
        const attendance = new attendance_entity_1.AttendanceEntity();
        attendance.internid = updateAttendanceDto.internid;
        attendance.date = updateAttendanceDto.date;
        attendance.value = updateAttendanceDto.value;
        attendance.id = id;
        return this.attendanceRepository.save(attendance);
    }
    removeAll(id) {
        const deleted = this.connection.query(`
            Delete from attendance_entity where internid = ${id}
        `);
        return deleted;
    }
    remove(id, date) {
        const deleted = this.connection.query(`
            Delete from attendance_entity where internid = ${id}
            and date = '${date}'
        `);
        return deleted;
    }
};
exports.AttendanceService = AttendanceService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendance_entity_1.AttendanceEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Connection])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map