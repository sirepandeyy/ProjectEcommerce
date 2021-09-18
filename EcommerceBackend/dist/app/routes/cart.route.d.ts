import { CartFacade } from './../facade/cartFacade';
import { CartDto } from './../../submodules/Ecommerce-Platform-Dtos/cart';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class CartRoutes {
    private cartFacade;
    constructor(cartFacade: CartFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<CartDto>>;
    createCart(body: RequestModel<CartDto>): Promise<ResponseModel<CartDto>>;
    updateCart(body: RequestModel<CartDto>): Promise<ResponseModel<CartDto>>;
    deleteCart(body: RequestModel<CartDto>): Promise<ResponseModel<CartDto>>;
}
