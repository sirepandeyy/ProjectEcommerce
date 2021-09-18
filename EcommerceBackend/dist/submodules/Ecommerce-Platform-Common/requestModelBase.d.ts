export declare abstract class RequestModelBase {
    protected UniqueConsumerIdentifier: string;
    protected AccessToken: string;
    protected UserName: string;
    protected TenantId: number;
    protected IsRequestFromBackgroundService: boolean;
    protected version: string;
    protected RequestGuid: string;
    protected CultureInformation: string;
    RequestModelBase(requestGuid: string): void;
    constructor(tenantId: number, culture: string, requestId: string);
    getUniqueConsumerIdentifier(): string;
    getAccessToken(): string;
    getUserName(): string;
    getTenantId(): number;
    getIsRequestFromBackgroundService(): boolean;
    getversion(): string;
    setUniqueConsumerIdentifier(value: string): void;
    getRequestGuid(): string;
    setAccessToken(value: string): void;
    setUserName(value: string): void;
    setTenantId(value: number): void;
    setIsRequestFromBackgroundService(value: boolean): void;
    setversion(value: string): void;
}
