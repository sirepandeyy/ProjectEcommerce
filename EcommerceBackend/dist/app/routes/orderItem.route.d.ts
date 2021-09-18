import { OrderItemDto } from './../../submodules/Ecommerce-Platform-Dtos/orderItemDto';
import { OrderItemFacade } from './../facade/orderItemfacade';
import { ResponseModel } from '../../submodules/Ecommerce-Platform-Common/ResponseModel';
import { RequestModel } from '../../submodules/Ecommerce-Platform-Common/RequestModel';
export declare class OrderItemRoutes {
    private OrderItemFacade;
    constructor(OrderItemFacade: OrderItemFacade);
    private sns_sqs;
    private topicArray;
    private serviceName;
    onModuleInit(): void;
    allUsers(): Promise<ResponseModel<OrderItemDto>>;
    createOrderItem(body: RequestModel<OrderItemDto>): Promise<ResponseModel<OrderItemDto>>;
    updateOrderItem(body: RequestModel<OrderItemDto>): Promise<ResponseModel<OrderItemDto>>;
    deleteOrderItem(body: RequestModel<OrderItemDto>): Promise<ResponseModel<OrderItemDto>>;
}
