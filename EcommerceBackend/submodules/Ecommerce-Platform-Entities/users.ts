import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";

import { Exclude } from "class-transformer";
import { Role } from "./role";
import { Order } from "./order";

@Entity("users")
export class User extends EntityBase
{
    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column({unique:true})
    email:string;

    @Column()
    @Exclude()
    password:string;

    @Column({name:'role_id'})
    role_id:number;
    
    @ManyToOne(
        (type) => Role,
        (Roles) => Roles.Id,
      )
      @JoinColumn({name: "role_id"})
      role: Role[];

     @OneToMany(() => Order, 
     order => order.user, 
     {
        createForeignKeyConstraints: false
    })
    orders: Order[];
   
}