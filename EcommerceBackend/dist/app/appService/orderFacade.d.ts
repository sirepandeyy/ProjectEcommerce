import { OrderDto } from './../../submodules/Ecommerce-Platform-Dtos/order';
import { Order } from './../../submodules/Ecommerce-Platform-Entities/order';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class OrderService extends AppService<Order, OrderDto> {
    private readonly orderRepository;
    http: HttpService;
    constructor(orderRepository: Repository<Order>, http: HttpService);
}
