import { OrderItemDto } from './../../submodules/Ecommerce-Platform-Dtos/orderItemDto';
import { OrderItem } from './../../submodules/Ecommerce-Platform-Entities/order-item';
import FacadeBase from "./facadebase";
import OrderItemService from 'app/appService/orderItemService';
export declare class OrderItemFacade extends FacadeBase<OrderItem, OrderItemDto> {
    private orderItemService;
    constructor(orderItemService: OrderItemService);
}
