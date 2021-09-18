"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModelBase = void 0;
class RequestModelBase {
    constructor(tenantId, culture, requestId) {
        this.TenantId = tenantId;
        this.CultureInformation = culture;
        this.RequestGuid = requestId;
    }
    RequestModelBase(requestGuid) {
        this.RequestGuid = requestGuid != null ? requestGuid : "";
    }
    getUniqueConsumerIdentifier() {
        return this.UniqueConsumerIdentifier;
    }
    getAccessToken() {
        return this.AccessToken;
    }
    getUserName() {
        return this.UserName;
    }
    getTenantId() {
        return this.TenantId;
    }
    getIsRequestFromBackgroundService() {
        return this.IsRequestFromBackgroundService;
    }
    getversion() {
        return this.version;
    }
    setUniqueConsumerIdentifier(value) {
        this.UniqueConsumerIdentifier = value;
    }
    getRequestGuid() {
        return this.RequestGuid;
    }
    setAccessToken(value) {
        this.AccessToken = value;
    }
    setUserName(value) {
        this.UserName = value;
    }
    setTenantId(value) {
        this.TenantId = value;
    }
    setIsRequestFromBackgroundService(value) {
        this.IsRequestFromBackgroundService = value;
    }
    setversion(value) {
        this.version = value;
    }
}
exports.RequestModelBase = RequestModelBase;
//# sourceMappingURL=requestModelBase.js.map