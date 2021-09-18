import { DtoBase } from './DtoBase/dtobase';
import {IsNotEmpty} from "class-validator";

export class ProductDto extends DtoBase{
    constructor() {
        super();    
      }   
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    price: number
}