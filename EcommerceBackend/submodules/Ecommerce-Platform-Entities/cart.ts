import { Link } from './link';
import { EntityBase } from './EntityBase/entitybase';
import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('carts')
export class Cart extends EntityBase{

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    price: number;

}