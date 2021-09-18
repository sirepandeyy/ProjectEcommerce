import {RequestModelBase} from "./requestModelBase";
import {Filter} from "./filter";
// import {Condition} from "./condition";
// import { CultureInfo } from "./cultureInfo";
import { DtoBase } from "./DtoBase";
import { Guid } from "./guid";

//************** REQUEST MODEL FOR PUT/POST/DELETE **************************************** */
export class RequestModel<TDto  extends DtoBase> extends RequestModelBase{
   
    public DataCollection: TDto[] | null = [];
    public ErrorCode:number;
    public Error: string;
    
    public SocketId: string;

    public token: string;
    public CommunityUrl: string;
    public RequestGuid: string;


    constructor(){
        //TODO: GENERATE THE TENANT ID, CULTURE AND REQUEST ID INSIDE BASE CLASS
        super(0,'','');
        this.ErrorCode=200;
        this.Error = '';
        this.DataCollection = new Array<TDto>();
        this.SocketId = "";
        this.token = "";
        this.CommunityUrl = "sample_community_url";
        this.RequestGuid = "sample_guid";

       // let filter = new Filter();
       // filter.setConditions(new Array<Condition>());
    };

    // constructor(tenantId:number,culture:string,requestId:string){
    //     super(tenantId,culture,requestId);
    // }
    public getData(): TDto|null{
        let t_temp = this.DataCollection!=null && this.DataCollection[0]!=null?
        this.DataCollection[0] as TDto: null;
        return t_temp;
    };

    

    CreateRequestModel():RequestModel<TDto>{
        let requestModel =  new RequestModel<TDto>();
        return requestModel;
    };

    CreateFailureModel(errorCode:number,error:string):RequestModel<TDto>{
        let requestModel =  new RequestModel<TDto>();
        requestModel.Error = error;
        requestModel.ErrorCode = errorCode;
        return requestModel;
    }

    CreateSuccessModel(tDtos:TDto[]):RequestModel<TDto>{
        //TODO: Return requestModel with dataSet
        let requestModel =  new RequestModel<TDto>();
        requestModel.DataCollection = tDtos;
        return requestModel;
    };
};

//************** REQUEST MODEL FOR QUERY **************************************** */
export class RequestModelQuery{
    public RequestGuid:string;
    public Children: string[] = [];
    public Filter: Filter = new Filter;

    constructor(){
       // this.RequestGuid = new Guid().NewGuid();
    };

    //require('uuid');
    //const uuidv4 = require('uuid/v4');
};

