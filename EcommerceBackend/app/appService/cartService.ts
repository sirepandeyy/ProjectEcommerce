import { CartDto } from './../../submodules/Ecommerce-Platform-Dtos/cart';
import { Cart } from './../../submodules/Ecommerce-Platform-Entities/cart';
import { ProductDto } from './../../submodules/Ecommerce-Platform-Dtos/productDto';
import { Product } from './../../submodules/Ecommerce-Platform-Entities/product';
import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { Role } from './../../submodules/Ecommerce-Platform-Entities/role';
import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
let dto = require('../../submodules/Ecommerce-Platform-Mappings/cart.mapper')

@Injectable()
export default class CartService extends AppService<Cart,CartDto>{
    constructor(@InjectRepository(Cart) private readonly CartRepository: Repository<Cart>,public http:HttpService) {
        super(http,CartRepository,Cart,Cart,CartDto,dto.cartsentityJson, dto.cartsdtoJson,dto.cartsentityToDtoJson, dto.cartsdtoToEntityJson);
             
    }

} 