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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const entitybase_1 = require("./EntityBase/entitybase");
const class_transformer_1 = require("class-transformer");
const role_1 = require("./role");
const order_1 = require("./order");
let User = class User extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ name: 'role_id' }),
    __metadata("design:type", Number)
], User.prototype, "role_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => role_1.Role, (Roles) => Roles.Id),
    typeorm_1.JoinColumn({ name: "role_id" }),
    __metadata("design:type", Array)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_1.Order, order => order.user, {
        createForeignKeyConstraints: false
    }),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
User = __decorate([
    typeorm_1.Entity("users")
], User);
exports.User = User;
//# sourceMappingURL=users.js.map