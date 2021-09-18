import { Cart } from './../../submodules/Ecommerce-Platform-Entities/cart';
import FacadeBase from "./facadebase";
import { CartDto } from 'submodules/Ecommerce-Platform-Dtos/cart';
import CartService from 'app/appService/cartService';
export declare class CartFacade extends FacadeBase<Cart, CartDto> {
    private cartService;
    constructor(cartService: CartService);
}
