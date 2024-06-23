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
exports.UserService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, connection) {
        this.userRepository = userRepository;
        this.connection = connection;
    }
    async login(authInfos) {
        return this.userRepository.findOne({ where: { name: String(authInfos.name) } });
    }
    create(createUserDto) {
        const user = new user_entity_1.UserEntity();
        user.name = createUserDto.name;
        user.password = createUserDto.password;
        user.role = createUserDto.role;
        user.field = createUserDto.field;
        return this.userRepository.save(user);
    }
    createField(name) {
        const newField = this.connection.query(`insert into fields (name) values ('${name}')`);
        return newField;
    }
    deleteField(id) {
        const deletedField = this.connection.query(`delete from fields where id = ${id}`);
        return deletedField;
    }
    findAllFields() {
        const fields = this.connection.query(`select * from fields`);
        return fields;
    }
    findId(mail) {
        return this.connection.query(`select id from user_entity where name = '${mail}'`);
    }
    findAll() {
        return this.connection.query("select * from user_entity");
    }
    findOne(id) {
        return this.userRepository.findOneById(id);
    }
    update(id, updateUserDto) {
        const user = new user_entity_1.UserEntity();
        user.name = updateUserDto.name;
        user.password = updateUserDto.password;
        user.id = id;
        return this.userRepository.save(user);
    }
    remove(name) {
        const deleted = this.connection.query(`delete from user_entity where name = '${name}'`);
        return deleted;
    }
};
exports.UserService = UserService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], UserService);
//# sourceMappingURL=user.service.js.map