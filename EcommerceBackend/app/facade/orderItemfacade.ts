import { OrderItemDto } from './../../submodules/Ecommerce-Platform-Dtos/orderItemDto';
import { OrderItem } from './../../submodules/Ecommerce-Platform-Entities/order-item';

import { Injectable } from "@nestjs/common";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";
import OrderItemService from 'app/appService/orderItemService';


@Injectable()
export class OrderItemFacade extends FacadeBase<OrderItem,OrderItemDto>{
    constructor(private orderItemService:OrderItemService){
       super(orderItemService)
    }
}