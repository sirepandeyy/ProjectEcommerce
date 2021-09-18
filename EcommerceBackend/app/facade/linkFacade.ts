import { Link } from './../../submodules/Ecommerce-Platform-Entities/link';
import { LinkDto } from './../../submodules/Ecommerce-Platform-Dtos/link';
import { OrderDto } from './../../submodules/Ecommerce-Platform-Dtos/order';
import { Order } from './../../submodules/Ecommerce-Platform-Entities/order';
import { Injectable } from "@nestjs/common";
import FacadeBase from "./facadebase";
import OrderService from 'app/appService/orderService';
import LinkService from 'app/appService/linkService';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class LinkFacade extends FacadeBase<Link,LinkDto>{
    
    constructor(private linkService:LinkService){
        
       super(linkService)
    }
 
}