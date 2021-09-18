import { DtoBase } from './DtoBase/dtobase';
export class LinkDto extends DtoBase{
    constructor() {
        super();    
      }  
    code: string;

    user_id:number
}