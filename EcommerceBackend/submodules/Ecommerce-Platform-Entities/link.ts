import { EntityBase } from './EntityBase/entitybase';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Order } from "./order";
import { Product } from "./product";
import { User } from "./users";


@Entity('links')
export class Link extends EntityBase{
    
    
    @Column({unique: true})
    code: string;


       @Column({name: 'user_id'})
       user_id:number

    

     @ManyToOne(
        (type) => User,
        (Users) => Users.Id,
      )
      @JoinColumn({name: "user_id"})
      user: User;

      @Column("int",{name: 'product_id',array:true})
      product_id:number[]


    @ManyToMany(
    (type) => Product,
    (products)=>products.Id
    )
    @JoinTable({name:"product_id"})
    products: Product[];

    @JoinColumn({
        referencedColumnName: 'code',
        name: 'code'
    })
    orders: Order[];
}
