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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./user.entity");
const jwt_1 = require("@nestjs/jwt");
let UserController = exports.UserController = class UserController {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(user, response) {
        try {
            const result = await this.userService.login(user);
            const check = result
                && result.password == user.password
                && result.role == user.role;
            if (check) {
                const jwt = await this.jwtService.signAsync({ id: result.id });
                response.cookie("jwt", jwt, { httpOnly: true });
                const { password, ...rest } = result;
                return { ...rest, jwt: jwt };
            }
            else {
                return Promise.reject({ message: "error" });
            }
        }
        catch (e) {
            return Promise.reject({ message: "error" });
        }
    }
    createField(field, req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.userService.createField(field.name);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    deleteField(id, req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.userService.deleteField(id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    getAllFields() {
        return this.userService.findAllFields();
    }
    async auth(req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            let data;
            if (cookie) {
                data = await this.jwtService.verifyAsync(cookie);
            }
            else {
                data = await this.jwtService.verifyAsync(String(local));
            }
            const user = await this.userService.findOne(data['id']);
            const { password, ...rest } = user;
            if (user || local) {
                return rest;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    logout(response) {
        response.clearCookie('jwt');
        return { message: "success" };
    }
    getId(req, mail) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.userService.findId(mail);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    getAllUsers(req) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.userService.findAll();
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    async createUser(req, user) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                this.userService.create(user);
                const { password, ...rest } = user;
                return rest;
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
                return this.userService.findOne(+id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    async update(req, id, updatedUser) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.userService.update(+id, updatedUser);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    async remove(req, name) {
        try {
            const cookie = req.cookies['jwt'];
            const local = req.headers["jwt"];
            if (cookie || local) {
                return this.userService.remove(name);
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
    (0, common_1.Post)("/login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("field"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createField", null);
__decorate([
    (0, common_1.Delete)("field/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteField", null);
__decorate([
    (0, common_1.Get)("field"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllFields", null);
__decorate([
    (0, common_1.Get)("auth"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "auth", null);
__decorate([
    (0, common_1.Post)("logout"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)("/mail/:mail"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('mail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getId", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":name"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService, jwt_1.JwtService])
], UserController);
//# sourceMappingURL=user.controller.js.map