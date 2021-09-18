import {Guid} from "./guid";
import {CultureInfo} from "./cultureInfo";

export abstract class RequestModelBase{

	private UniqueConsumerIdentifier!: string;
    private AccessToken!: string;
    private UserName!: string;
    private TenantId!: number;
    private IsRequestFromBackgroundService!: boolean;
    private version!: string;
    public RequestGuid!: string;
    private CultureInformation!: string;

    // private guid_obj = new Guid();
    // private culture_obj = new CultureInfo();

    RequestModelBase(requestGuid:string){
        this.RequestGuid = requestGuid!=null?requestGuid:"";
    }

	constructor(tenantId:number,culture:string,requestId:string){
		this.TenantId = tenantId;
		this.CultureInformation = culture;
		this.RequestGuid = requestId;
	}

	public getUniqueConsumerIdentifier(): string {
		return this.UniqueConsumerIdentifier;
	}

	public getAccessToken(): string {
		return this.AccessToken;
	}

	public getUserName(): string {
		return this.UserName;
	}

	public getTenantId(): number {
		return this.TenantId;
	}

	public getIsRequestFromBackgroundService(): boolean {
		return this.IsRequestFromBackgroundService;
	}

	public getversion(): string {
		return this.version;
	}

	public setUniqueConsumerIdentifier(value: string) {
		this.UniqueConsumerIdentifier = value;
	}

	public setAccessToken(value: string) {
		this.AccessToken = value;
	}

	public setUserName(value: string) {
		this.UserName = value;
	}

	public setTenantId(value: number) {
		this.TenantId = value;
	}

	public setIsRequestFromBackgroundService(value: boolean) {
		this.IsRequestFromBackgroundService = value;
	}

	public setversion(value: string) {
		this.version = value;
    }
    
    


}
