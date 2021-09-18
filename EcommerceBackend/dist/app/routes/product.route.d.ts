import { ProductDto } from './../../submodules/Ecommerce-Platform-Dtos/productDto';
import { ProductFacade } from './../facade/productFacade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class ProductRoutes {
    private productFacade;
    constructor(productFacade: ProductFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<ProductDto>>;
    productById(id: number): Promise<ResponseModel<ProductDto>>;
    createProduct(body: RequestModel<ProductDto>): Promise<ResponseModel<ProductDto>>;
    updateProduct(body: RequestModel<ProductDto>): Promise<ResponseModel<ProductDto>>;
    deleteProduct(body: RequestModel<ProductDto>): Promise<ResponseModel<ProductDto>>;
}
