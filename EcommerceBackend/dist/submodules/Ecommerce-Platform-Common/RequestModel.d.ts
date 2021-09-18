import { RequestModelBase } from "./requestModelBase";
import { Filter } from "./filter";
import { DtoBase } from "submodules/Ecommerce-Platform-Dtos/DtoBase/dtobase";
export declare class RequestModel<TDto extends DtoBase> extends RequestModelBase {
    DataCollection: TDto[] | null;
    ErrorCode: number;
    Error: string;
    SocketId: string;
    code: string;
    token: string;
    CommunityUrl: string;
    CommunityId: number;
    RequestGuid: string;
    zoomToken: string;
    constructor();
    getData(): TDto | null;
    CreateRequestModel(): RequestModel<TDto>;
    CreateFailureModel(errorCode: number, error: string): RequestModel<TDto>;
    CreateSuccessModel(tDtos: TDto[]): RequestModel<TDto>;
}
export declare class RequestModelQuery {
    RequestGuid: string;
    Children: string[];
    Filter: Filter;
    constructor();
}
