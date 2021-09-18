import { Page } from "./page";
import { Condition } from "./condition";
export declare enum RequestType {
    EXPLICIT = 0,
    IMPLICIT = 1,
    BOTH = 2
}
export declare class Filter {
    OrderByField: string;
    IsOrderByFieldAsc: boolean;
    Conditions: Array<Condition>;
    PageInfo: Page;
    RequestType: RequestType;
    constructor();
}
