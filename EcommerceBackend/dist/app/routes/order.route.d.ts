import { OrderDto } from './../../submodules/Ecommerce-Platform-Dtos/order';
import { OrderFacade } from './../facade/orderFacade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class OrderRoutes {
    private OrderFacade;
    constructor(OrderFacade: OrderFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<OrderDto>>;
    createOrder(body: RequestModel<OrderDto>): Promise<ResponseModel<OrderDto>>;
    updateOrder(body: RequestModel<OrderDto>): Promise<ResponseModel<OrderDto>>;
    deleteOrder(body: RequestModel<OrderDto>): Promise<ResponseModel<OrderDto>>;
}
