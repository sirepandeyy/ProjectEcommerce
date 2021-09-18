import { ConditionalOperation } from "./conditionOperation";
import { FieldOperaton } from "./fieldOperation";
export declare class Condition {
    FieldName: string;
    FieldValue: any;
    IsCaseInSensitiveSearch: boolean;
    OperatorSymbol: FieldOperaton;
    ConditionalSymbol: ConditionalOperation;
    TypeName: string;
    constructor();
}
