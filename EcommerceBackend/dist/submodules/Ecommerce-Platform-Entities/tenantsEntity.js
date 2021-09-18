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
exports.TenantsEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const clientsEntity_1 = require("./clientsEntity");
const tenant_appsEntity_1 = require("./tenant_appsEntity");
const tenant_usersEntity_1 = require("./tenant_usersEntity");
let TenantsEntity = class TenantsEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "tanant_name", nullable: true }),
    __metadata("design:type", String)
], TenantsEntity.prototype, "tenant_name", void 0);
__decorate([
    typeorm_1.Column({ name: "description", nullable: true }),
    __metadata("design:type", String)
], TenantsEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: "alias", nullable: true }),
    __metadata("design:type", String)
], TenantsEntity.prototype, "alias", void 0);
__decorate([
    typeorm_1.Column({ name: "published_from", nullable: true }),
    __metadata("design:type", Date)
], TenantsEntity.prototype, "published_from", void 0);
__decorate([
    typeorm_1.Column({ name: "published_till", nullable: true }),
    __metadata("design:type", Date)
], TenantsEntity.prototype, "published_till", void 0);
__decorate([
    typeorm_1.Column({ name: "is_complete", nullable: true }),
    __metadata("design:type", Boolean)
], TenantsEntity.prototype, "is_complete", void 0);
__decorate([
    typeorm_1.Column({ name: "site_image_url_path", nullable: true }),
    __metadata("design:type", String)
], TenantsEntity.prototype, "site_image_url_path", void 0);
__decorate([
    typeorm_1.Column({ name: "status_id", nullable: true }),
    __metadata("design:type", Number)
], TenantsEntity.prototype, "status_id", void 0);
__decorate([
    typeorm_1.Column({ name: "client_Id", nullable: true }),
    __metadata("design:type", Number)
], TenantsEntity.prototype, "client_Id", void 0);
__decorate([
    typeorm_1.Column({ name: "identity_providers_details", nullable: true, type: "json" }),
    __metadata("design:type", Object)
], TenantsEntity.prototype, "identity_providers_details", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_admin_email", nullable: true }),
    __metadata("design:type", String)
], TenantsEntity.prototype, "tenant_admin_email", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_usersEntity_1.Tenant_UsersEntity, (tenant_users) => tenant_users.tenant_id),
    __metadata("design:type", Array)
], TenantsEntity.prototype, "tenant_users", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_appsEntity_1.Tenant_AppsEntity, (tenant_apps) => tenant_apps.tenant_id),
    __metadata("design:type", Array)
], TenantsEntity.prototype, "tenant_apps", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => clientsEntity_1.ClientsEntity, (ClientsEntity) => ClientsEntity.Id),
    typeorm_1.JoinColumn({ name: "client_Id" }),
    __metadata("design:type", clientsEntity_1.ClientsEntity)
], TenantsEntity.prototype, "clients", void 0);
TenantsEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], TenantsEntity);
exports.TenantsEntity = TenantsEntity;
//# sourceMappingURL=tenantsEntity.js.map