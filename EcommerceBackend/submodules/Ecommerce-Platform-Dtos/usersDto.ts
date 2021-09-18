import { DtoBase } from "./DtoBase/dtobase";
import {IsNotEmpty,IsEmail} from 'class-validator'

export class UserDto extends DtoBase {
  constructor() {
    super();    
  }   

    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;


}