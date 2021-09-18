import { RequestModel } from "../../submodules/Ecommerce-Platform-Common/RequestModel";
import { ResponseModel } from "../../submodules/Ecommerce-Platform-Common/ResponseModel";
import { DtoBase } from "submodules/Ecommerce-Platform-Dtos/DtoBase/dtobase";
import { EntityBase } from "submodules/Ecommerce-Platform-Entities/EntityBase/entitybase";
import AppService from "submodules/Ecommerce-Platform-Service/AppServiceBase";
export default class FacadeBase<TEntity extends EntityBase, TDto extends DtoBase> {
    private service;
    private appService;
    constructor(service: AppService<TEntity, TDto>);
    getAll(): Promise<ResponseModel<TDto>>;
    getByIds(ids: number[]): Promise<ResponseModel<TDto>>;
    create(body: RequestModel<TDto>): Promise<ResponseModel<TDto>>;
    update(body: RequestModel<TDto>): Promise<ResponseModel<TDto>>;
    deleteById(body: RequestModel<TDto>): Promise<ResponseModel<TDto>>;
}
