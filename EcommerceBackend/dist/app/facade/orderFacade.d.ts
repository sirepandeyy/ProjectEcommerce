import { OrderDto } from './../../submodules/Ecommerce-Platform-Dtos/order';
import { Order } from './../../submodules/Ecommerce-Platform-Entities/order';
import FacadeBase from "./facadebase";
import OrderService from 'app/appService/orderService';
export declare class OrderFacade extends FacadeBase<Order, OrderDto> {
    private orderService;
    constructor(orderService: OrderService);
}
