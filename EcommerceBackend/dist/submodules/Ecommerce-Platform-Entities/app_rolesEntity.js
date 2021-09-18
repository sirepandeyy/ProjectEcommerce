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
exports.App_RolesEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const appsEntity_1 = require("./appsEntity");
const rolesEntity_1 = require("./rolesEntity");
let App_RolesEntity = class App_RolesEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "role_id", nullable: true }),
    __metadata("design:type", Number)
], App_RolesEntity.prototype, "role_id", void 0);
__decorate([
    typeorm_1.Column({ name: "app_id", nullable: true }),
    __metadata("design:type", Number)
], App_RolesEntity.prototype, "app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "app_role_permisssions", nullable: true }),
    __metadata("design:type", String)
], App_RolesEntity.prototype, "app_role_permissions", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => appsEntity_1.AppsEntity, (apps) => apps.app_roles),
    __metadata("design:type", Array)
], App_RolesEntity.prototype, "apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => rolesEntity_1.RolesEntity, (roles) => roles.app_roles),
    __metadata("design:type", Array)
], App_RolesEntity.prototype, "roles", void 0);
App_RolesEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], App_RolesEntity);
exports.App_RolesEntity = App_RolesEntity;
//# sourceMappingURL=app_rolesEntity.js.map