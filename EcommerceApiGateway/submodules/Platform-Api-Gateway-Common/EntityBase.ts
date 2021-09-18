
import {Entity} from "typeorm";
import {PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class EntityBase {
    //Id:number;

    constructor() {
        this.id = 0;
    }
  
    @PrimaryGeneratedColumn({name:'id'})
    id: number;

}