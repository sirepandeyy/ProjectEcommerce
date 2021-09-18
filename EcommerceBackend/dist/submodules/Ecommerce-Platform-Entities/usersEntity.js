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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const feature_permissionsEntity_1 = require("./feature_permissionsEntity");
const tenant_usersEntity_1 = require("./tenant_usersEntity");
let UsersEntity = class UsersEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "login_name", nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "login_name", void 0);
__decorate([
    typeorm_1.Column({ name: "birth_date", nullable: true }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "birth_date", void 0);
__decorate([
    typeorm_1.Column({ name: "date_of_joining", nullable: true }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "date_of_joining", void 0);
__decorate([
    typeorm_1.Column({ name: "first_name", nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column({ name: "last_name", nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column({ name: "email", nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: "phone", nullable: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ name: "marital_status", nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "marital_status", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_usersEntity_1.Tenant_UsersEntity, (tenant_users) => tenant_users.user_id),
    __metadata("design:type", Array)
], UsersEntity.prototype, "tenant_users", void 0);
__decorate([
    typeorm_1.OneToMany((type) => feature_permissionsEntity_1.Feature_PermissionsEntity, (feature_permissions) => feature_permissions.user_id),
    __metadata("design:type", Array)
], UsersEntity.prototype, "feature_permissions", void 0);
UsersEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=usersEntity.js.map