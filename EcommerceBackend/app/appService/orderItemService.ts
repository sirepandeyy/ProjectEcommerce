import { OrderItemDto } from '../../submodules/Ecommerce-Platform-Dtos/orderItemDto';
import { OrderItem } from '../../submodules/Ecommerce-Platform-Entities/order-item';

import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/orderItem.mapper')

@Injectable()
export default class OrderItemService extends AppService<OrderItem,OrderItemDto>{
    constructor(@InjectRepository(OrderItem) private readonly orderItemRepository: Repository<OrderItem>,public http:HttpService) {
        super(http,orderItemRepository,OrderItem,OrderItem,OrderItemDto,dto.orderitemsentityJson, dto.orderitemsdtoJson,dto.orderitemsentityToDtoJson, dto.orderitemsdtoToEntityJson);
             
    }

} 