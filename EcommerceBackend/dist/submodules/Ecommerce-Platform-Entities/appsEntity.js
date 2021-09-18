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
exports.AppsEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const app_messagesEntity_1 = require("./app_messagesEntity");
const app_rolesEntity_1 = require("./app_rolesEntity");
const featuresEntity_1 = require("./featuresEntity");
const tenant_appsEntity_1 = require("./tenant_appsEntity");
let AppsEntity = class AppsEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "app_name", nullable: true }),
    __metadata("design:type", String)
], AppsEntity.prototype, "app_name", void 0);
__decorate([
    typeorm_1.Column({ name: "app_description", nullable: true }),
    __metadata("design:type", String)
], AppsEntity.prototype, "app_description", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_messagesEntity_1.App_MessagesEntity, (app_message) => app_message.app_id),
    __metadata("design:type", Array)
], AppsEntity.prototype, "app_message", void 0);
__decorate([
    typeorm_1.OneToMany((type) => featuresEntity_1.FeaturesEntity, (features) => features.app_id),
    __metadata("design:type", Array)
], AppsEntity.prototype, "features", void 0);
__decorate([
    typeorm_1.OneToMany((type) => app_rolesEntity_1.App_RolesEntity, (app_roles) => app_roles.app_id),
    __metadata("design:type", Array)
], AppsEntity.prototype, "app_roles", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tenant_appsEntity_1.Tenant_AppsEntity, (tenant_apps) => tenant_apps.app_id),
    __metadata("design:type", Array)
], AppsEntity.prototype, "tenant_apps", void 0);
AppsEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], AppsEntity);
exports.AppsEntity = AppsEntity;
//# sourceMappingURL=appsEntity.js.map