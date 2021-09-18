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
exports.Tenant_User_App_AlertsEntity = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const tenant_user_appsEntity_1 = require("./tenant_user_appsEntity");
let Tenant_User_App_AlertsEntity = class Tenant_User_App_AlertsEntity extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ name: "alert_type", nullable: true }),
    __metadata("design:type", String)
], Tenant_User_App_AlertsEntity.prototype, "alert_type", void 0);
__decorate([
    typeorm_1.Column({ name: "alert_name", nullable: true }),
    __metadata("design:type", String)
], Tenant_User_App_AlertsEntity.prototype, "alert_name", void 0);
__decorate([
    typeorm_1.Column({ name: "alert_desc", nullable: true }),
    __metadata("design:type", String)
], Tenant_User_App_AlertsEntity.prototype, "alert_desc", void 0);
__decorate([
    typeorm_1.Column({ name: "from_date_time", nullable: true }),
    __metadata("design:type", Date)
], Tenant_User_App_AlertsEntity.prototype, "from_date_time", void 0);
__decorate([
    typeorm_1.Column({ name: "alert_duration_type", nullable: true }),
    __metadata("design:type", String)
], Tenant_User_App_AlertsEntity.prototype, "alert_duration_type", void 0);
__decorate([
    typeorm_1.Column({ name: "subscription_date", nullable: true }),
    __metadata("design:type", Date)
], Tenant_User_App_AlertsEntity.prototype, "subscription_date", void 0);
__decorate([
    typeorm_1.Column({ name: "has_unsubscribed", nullable: true }),
    __metadata("design:type", Boolean)
], Tenant_User_App_AlertsEntity.prototype, "has_unsubscribed", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_user_app_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_User_App_AlertsEntity.prototype, "tenant_user_app_id", void 0);
__decorate([
    typeorm_1.Column({ name: "tenant_user_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_User_App_AlertsEntity.prototype, "tenant_user_id", void 0);
__decorate([
    typeorm_1.Column({ name: "user_id", nullable: true }),
    __metadata("design:type", Number)
], Tenant_User_App_AlertsEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => tenant_user_appsEntity_1.Tenant_User_AppsEntity, (tenant_user_apps) => tenant_user_apps.tenant_user_app_alerts),
    __metadata("design:type", Array)
], Tenant_User_App_AlertsEntity.prototype, "tenant_user_apps", void 0);
Tenant_User_App_AlertsEntity = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(["Id"])
], Tenant_User_App_AlertsEntity);
exports.Tenant_User_App_AlertsEntity = Tenant_User_App_AlertsEntity;
//# sourceMappingURL=tenant_user_app_alertsEntity.js.map