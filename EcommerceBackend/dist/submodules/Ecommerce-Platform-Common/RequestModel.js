"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModelQuery = exports.RequestModel = void 0;
const requestModelBase_1 = require("./requestModelBase");
const filter_1 = require("./filter");
const dtobase_1 = require("../Ecommerce-Platform-Dtos/DtoBase/dtobase");
class RequestModel extends requestModelBase_1.RequestModelBase {
    constructor() {
        super(0, "", "");
        this.DataCollection = [];
        this.ErrorCode = 200;
        this.Error = "";
        this.DataCollection = new Array();
        this.SocketId = "";
        this.token = "";
        this.CommunityUrl = "sample_community_url";
        this.CommunityId = 0;
        this.RequestGuid = "sample_guid";
    }
    getData() {
        let t_temp = this.DataCollection != null && this.DataCollection[0] != null
            ? this.DataCollection[0]
            : null;
        return t_temp;
    }
    CreateRequestModel() {
        let requestModel = new RequestModel();
        return requestModel;
    }
    CreateFailureModel(errorCode, error) {
        let requestModel = new RequestModel();
        requestModel.Error = error;
        requestModel.ErrorCode = errorCode;
        return requestModel;
    }
    CreateSuccessModel(tDtos) {
        let requestModel = new RequestModel();
        requestModel.DataCollection = tDtos;
        return requestModel;
    }
}
exports.RequestModel = RequestModel;
class RequestModelQuery {
    constructor() {
        this.Children = [];
        this.Filter = new filter_1.Filter();
    }
}
exports.RequestModelQuery = RequestModelQuery;
//# sourceMappingURL=RequestModel.js.map