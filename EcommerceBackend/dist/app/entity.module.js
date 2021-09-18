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
exports.EntityModule = void 0;
const cart_route_1 = require("./routes/cart.route");
const cartFacade_1 = require("./facade/cartFacade");
const cart_1 = require("./../submodules/Ecommerce-Platform-Entities/cart");
const link_route_1 = require("./routes/link.route");
const linkFacade_1 = require("./facade/linkFacade");
const link_1 = require("./../submodules/Ecommerce-Platform-Entities/link");
const orderItem_route_1 = require("./routes/orderItem.route");
const order_route_1 = require("./routes/order.route");
const product_route_1 = require("./routes/product.route");
const role_route_1 = require("./routes/role.route");
const users_route_1 = require("./routes/users.route");
const orderItemfacade_1 = require("./facade/orderItemfacade");
const orderFacade_1 = require("./facade/orderFacade");
const productFacade_1 = require("./facade/productFacade");
const roleFacade_1 = require("./facade/roleFacade");
const usersFacade_1 = require("./facade/usersFacade");
const order_item_1 = require("./../submodules/Ecommerce-Platform-Entities/order-item");
const order_1 = require("./../submodules/Ecommerce-Platform-Entities/order");
const product_1 = require("./../submodules/Ecommerce-Platform-Entities/product");
const role_1 = require("./../submodules/Ecommerce-Platform-Entities/role");
const users_1 = require("./../submodules/Ecommerce-Platform-Entities/users");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rolesService_1 = require("./appService/rolesService");
const productService_1 = require("./appService/productService");
const orderService_1 = require("./appService/orderService");
const usersService_1 = require("./appService/usersService");
const orderItemService_1 = require("./appService/orderItemService");
const linkService_1 = require("./appService/linkService");
const cartService_1 = require("./appService/cartService");
let EntityModule = class EntityModule {
    constructor() {
        console.log("Inside Entity Module....");
    }
    configure(consumer) {
        console.log("Inside Consumer");
    }
};
EntityModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([cart_1.Cart, users_1.User, role_1.Role, product_1.Product, order_1.Order, order_item_1.OrderItem, link_1.Link]),
        ],
        providers: [cartFacade_1.CartFacade, cartService_1.default, linkFacade_1.LinkFacade, linkService_1.default, usersFacade_1.UsersFacade, usersService_1.default, roleFacade_1.RoleFacade, rolesService_1.default, productFacade_1.ProductFacade, productService_1.default, orderFacade_1.OrderFacade, orderService_1.default, orderItemfacade_1.OrderItemFacade, orderItemService_1.default],
        controllers: [cart_route_1.CartRoutes, link_route_1.LinkRoutes, users_route_1.UsersRoutes, role_route_1.RoleRoutes, product_route_1.ProductRoutes, order_route_1.OrderRoutes, orderItem_route_1.OrderItemRoutes]
    }),
    __metadata("design:paramtypes", [])
], EntityModule);
exports.EntityModule = EntityModule;
//# sourceMappingURL=entity.module.js.map