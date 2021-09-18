import { CartDto } from './../../submodules/Ecommerce-Platform-Dtos/cart';
import { Cart } from './../../submodules/Ecommerce-Platform-Entities/cart';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class CartService extends AppService<Cart, CartDto> {
    private readonly CartRepository;
    http: HttpService;
    constructor(CartRepository: Repository<Cart>, http: HttpService);
}
