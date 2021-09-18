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
exports.Order = void 0;
const entitybase_1 = require("./EntityBase/entitybase");
const typeorm_1 = require("typeorm");
const order_item_1 = require("./order-item");
const class_transformer_1 = require("class-transformer");
const users_1 = require("./users");
const link_1 = require("./link");
let Order = class Order extends entitybase_1.EntityBase {
};
__decorate([
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Order.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Order.prototype, "user_id", void 0);
__decorate([
    typeorm_1.OneToMany((type) => order_item_1.OrderItem, orderItem => orderItem.order),
    __metadata("design:type", Array)
], Order.prototype, "order_items", void 0);
__decorate([
    typeorm_1.ManyToOne(() => users_1.User, user => user.orders, {
        createForeignKeyConstraints: false
    }),
    typeorm_1.JoinColumn({
        name: 'user_id'
    }),
    __metadata("design:type", users_1.User)
], Order.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => link_1.Link, link => link.orders, {
        createForeignKeyConstraints: false
    }),
    typeorm_1.JoinColumn({
        referencedColumnName: 'code',
        name: 'code'
    }),
    __metadata("design:type", link_1.Link)
], Order.prototype, "link", void 0);
Order = __decorate([
    typeorm_1.Entity('orders')
], Order);
exports.Order = Order;
//# sourceMappingURL=order.js.map