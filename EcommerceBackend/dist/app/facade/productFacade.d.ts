import { ProductDto } from './../../submodules/Ecommerce-Platform-Dtos/productDto';
import { Product } from './../../submodules/Ecommerce-Platform-Entities/product';
import FacadeBase from "./facadebase";
import ProductService from 'app/appService/productService';
export declare class ProductFacade extends FacadeBase<Product, ProductDto> {
    private productService;
    constructor(productService: ProductService);
}
