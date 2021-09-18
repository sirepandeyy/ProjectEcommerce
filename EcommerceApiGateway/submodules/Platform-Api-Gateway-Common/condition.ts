import {ConditionalOperation} from "./conditionOperation";
import {FieldOperaton} from "./fieldOperation";

export class Condition{

    public FieldName!: string;
    public FieldValue:any;
    public IsCaseInSensitiveSearch!:boolean;
    public OperatorSymbol!: FieldOperaton;
    public ConditionalSymbol!: ConditionalOperation;
    public TypeName!: string;

    Condition(filedName:string,fieldValue:any,operatorSymbol:FieldOperaton,conditionalSymbol:ConditionalOperation,isCaseInSensitiveSearch:boolean=false){
        
        this.FieldName = filedName;
        this.FieldValue = fieldValue;
        this.OperatorSymbol = operatorSymbol;
        this.ConditionalSymbol = conditionalSymbol;
        this.IsCaseInSensitiveSearch = isCaseInSensitiveSearch;

    }
}

