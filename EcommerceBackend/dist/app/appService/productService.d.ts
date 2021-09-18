import { ProductDto } from './../../submodules/Ecommerce-Platform-Dtos/productDto';
import { Product } from './../../submodules/Ecommerce-Platform-Entities/product';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class ProductService extends AppService<Product, ProductDto> {
    private readonly productRepository;
    http: HttpService;
    constructor(productRepository: Repository<Product>, http: HttpService);
}
