import { ProductDto } from './../../submodules/Ecommerce-Platform-Dtos/productDto';
import { Product } from './../../submodules/Ecommerce-Platform-Entities/product';
import { RoleDto } from './../../submodules/Ecommerce-Platform-Dtos/roleDto';
import { Role } from './../../submodules/Ecommerce-Platform-Entities/role';
import { UserDto } from './../../submodules/Ecommerce-Platform-Dtos/usersDto';
import { Injectable } from "@nestjs/common";
import { User } from "submodules/Ecommerce-Platform-Entities/users";
import FacadeBase from "./facadebase";
import UsersAppService from 'app/appService/usersService';
import RoleAppService from 'app/appService/rolesService';
import ProductService from 'app/appService/productService';

@Injectable()
export class ProductFacade extends FacadeBase<Product,ProductDto>{
    constructor(private productService:ProductService){
       super(productService)
    }
}