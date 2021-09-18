import {Page} from "./page";
import {Condition} from "./condition";

export class Filter{

    public OrderByField: string;
    public IsOrderByFieldAsc: boolean;
    public Conditions: Array<Condition>;
    public PageInfo:Page;
    // static Conditions: any;

    constructor(){
      this.OrderByField = "";
      this.IsOrderByFieldAsc = false;
      this.Conditions = [];
      this.PageInfo = new Page;
    }

    // public getConditions(): Array<Condition> {
		//   return this.Conditions;
	  // }

	  // public setConditions(value: Array<Condition>) {
		//   this.Conditions = value;
    // }

    // public getPageInfo(): Page {
    //   return this.PageInfo;
    // }

    // public setPageInfo(value: Page) {
    //   this.PageInfo = value;
    // }

    // public getOrderByField(): string {
    //   return this.OrderByField;
    // }

    // public setOrderByField(value: string) {
    //   this.OrderByField = value;
    // }

    // public getIsOrderByFieldAsc(): boolean {
    //   return this.IsOrderByFieldAsc;
    // }

    // public setIsOrderByFieldAsc(value: boolean) {
    //   this.IsOrderByFieldAsc = value;
    // }
    
    
}