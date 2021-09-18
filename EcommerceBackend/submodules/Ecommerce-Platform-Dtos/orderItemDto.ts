import { DtoBase } from './DtoBase/dtobase';
export class OrderItemDto extends DtoBase{
 
    constructor() {
        super();    
      }   

    product_title: string;
    price: number;
    quantity: number;
      
}