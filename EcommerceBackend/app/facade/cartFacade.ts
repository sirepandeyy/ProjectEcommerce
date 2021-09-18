import { Cart } from './../../submodules/Ecommerce-Platform-Entities/cart';
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
import { CartDto } from 'submodules/Ecommerce-Platform-Dtos/cart';
import CartService from 'app/appService/cartService';

@Injectable()
export class CartFacade extends FacadeBase<Cart,CartDto>{
    constructor(private cartService:CartService){
       super(cartService)
    }
}