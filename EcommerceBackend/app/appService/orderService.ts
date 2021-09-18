import { OrderDto } from '../../submodules/Ecommerce-Platform-Dtos/order';
import { Order } from '../../submodules/Ecommerce-Platform-Entities/order';
import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/order.mapper')

@Injectable()
export default class OrderService extends AppService<Order,OrderDto>{
    constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>,public http:HttpService) {
        super(http,orderRepository,Order,Order,OrderDto,dto.ordersentityJson, dto.ordersdtoJson,dto.ordersentityToDtoJson, dto.ordersdtoToEntityJson);
             
    }

} 