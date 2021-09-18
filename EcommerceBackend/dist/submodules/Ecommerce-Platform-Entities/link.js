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
exports.Link = void 0;
const entitybase_1 = require("./EntityBase/entitybase");
const typeorm_1 = require("typeorm");
const product_1 = require("./product");
const users_1 = require("./users");
let Link = class Link extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Link.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], Link.prototype, "user_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => users_1.User, (Users) => Users.Id),
    typeorm_1.JoinColumn({ name: "user_id" }),
    __metadata("design:type", users_1.User)
], Link.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("int", { name: 'product_id', array: true }),
    __metadata("design:type", Array)
], Link.prototype, "product_id", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => product_1.Product, (products) => products.Id),
    typeorm_1.JoinTable({ name: "product_id" }),
    __metadata("design:type", Array)
], Link.prototype, "products", void 0);
__decorate([
    typeorm_1.JoinColumn({
        referencedColumnName: 'code',
        name: 'code'
    }),
    __metadata("design:type", Array)
], Link.prototype, "orders", void 0);
Link = __decorate([
    typeorm_1.Entity('links')
], Link);
exports.Link = Link;
//# sourceMappingURL=link.js.map