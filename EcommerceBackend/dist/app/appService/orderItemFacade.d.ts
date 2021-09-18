import { OrderItemDto } from './../../submodules/Ecommerce-Platform-Dtos/orderItemDto';
import { OrderItem } from './../../submodules/Ecommerce-Platform-Entities/order-item';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class OrderItemService extends AppService<OrderItem, OrderItemDto> {
    private readonly orderItemRepository;
    http: HttpService;
    constructor(orderItemRepository: Repository<OrderItem>, http: HttpService);
}
