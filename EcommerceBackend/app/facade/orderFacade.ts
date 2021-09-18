import { OrderDto } from './../../submodules/Ecommerce-Platform-Dtos/order';
import { Order } from './../../submodules/Ecommerce-Platform-Entities/order';
import { ProductDto } from './../../submodules/Ecommerce-Platform-Dtos/productDto';
import { Product } from './../../submodules/Ecommerce-Platform-Entities/product';
import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { Role } from './../../submodules/Ecommerce-Platform-Entities/role';
import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { Injectable } from "@nestjs/common";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";
import OrderService from 'app/appService/orderService';

@Injectable()
export class OrderFacade extends FacadeBase<Order,OrderDto>{
    constructor(private orderService:OrderService){
       super(orderService)
    }
}