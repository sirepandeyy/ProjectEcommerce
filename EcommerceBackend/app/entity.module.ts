import { CartRoutes } from './routes/cart.route';

import { CartFacade } from './facade/cartFacade';
import { Cart } from './../submodules/Ecommerce-Platform-Entities/cart';
import { LinkRoutes } from './routes/link.route';
import { LinkFacade } from './facade/linkFacade';
import { Link } from './../submodules/Ecommerce-Platform-Entities/link';

import { OrderItemRoutes } from './routes/orderItem.route';
import { OrderRoutes } from './routes/order.route';
import { ProductRoutes } from './routes/product.route';
import { RoleRoutes } from './routes/role.route';
import { UsersRoutes } from './routes/users.route';
import { OrderItemFacade } from './facade/orderItemfacade';
import { OrderFacade } from './facade/orderFacade';
import { ProductFacade } from './facade/productFacade';
import { RoleFacade } from './facade/roleFacade';
import { UsersFacade } from 'app/facade/usersFacade';
import { OrderItem } from './../submodules/Ecommerce-Platform-Entities/order-item';
import { Order } from './../submodules/Ecommerce-Platform-Entities/order';
import { Product } from './../submodules/Ecommerce-Platform-Entities/product';
import { Role } from './../submodules/Ecommerce-Platform-Entities/role';
import { User } from './../submodules/Ecommerce-Platform-Entities/users';
import { HttpModule, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import RoleService from './appService/rolesService';
import ProductService from './appService/productService';
import OrderService from './appService/orderService';
import UsersService from './appService/usersService';
import OrderItemService from './appService/orderItemService';
import LinkService from './appService/linkService';
import CartService from './appService/cartService';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forFeature([Cart,User,Role,Product,Order,OrderItem,Link]),
  ],
  providers: [CartFacade,CartService, LinkFacade,LinkService, UsersFacade,UsersService,RoleFacade,RoleService,ProductFacade,ProductService,OrderFacade,OrderService,OrderItemFacade,OrderItemService],
  controllers: [CartRoutes, LinkRoutes, UsersRoutes,RoleRoutes,ProductRoutes,OrderRoutes,OrderItemRoutes]
})

export class EntityModule implements NestModule {
  constructor() {
    console.log("Inside Entity Module....");
  }

  configure(consumer: MiddlewareConsumer) {
    console.log("Inside Consumer");
  }
}