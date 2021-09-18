import { DtoBase } from './DtoBase/dtobase';
import {IsNotEmpty,IsEmail} from 'class-validator'
export class RoleDto extends DtoBase{
    
    constructor() {
        super();    
      }   

        @IsNotEmpty()
        name:string
}