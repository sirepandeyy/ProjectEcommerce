import { LinkFacade } from './../facade/linkFacade';
import { LinkDto } from './../../submodules/Ecommerce-Platform-Dtos/link';
import { Link } from './../../submodules/Ecommerce-Platform-Entities/link';
import { OrderDto } from '../../submodules/Ecommerce-Platform-Dtos/order';
import { Order } from '../../submodules/Ecommerce-Platform-Entities/order';
import { Body, HttpService, Injectable, Req } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/link.mapper')

@Injectable()
export default class LinkService extends AppService<Link,LinkDto>{

    constructor(@InjectRepository(Link) private readonly linkRepository: Repository<Link>,public http:HttpService) {
        super(http,linkRepository,Link,Link,LinkDto,dto.linksentityJson, dto.linksdtoJson,dto.linksentityToDtoJson, dto.linksdtoToEntityJson);
             
    }

   

} 