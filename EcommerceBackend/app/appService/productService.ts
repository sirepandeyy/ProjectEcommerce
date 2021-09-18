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
let dto = require('../../submodules/Ecommerce-Platform-Mappings/product.mapper')

@Injectable()
export default class ProductService extends AppService<Product,ProductDto>{
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>,public http:HttpService) {
        super(http,productRepository,Product,Product,ProductDto,dto.productsentityJson, dto.productsdtoJson,dto.productsentityToDtoJson, dto.productsdtoToEntityJson);
             
    }

} 