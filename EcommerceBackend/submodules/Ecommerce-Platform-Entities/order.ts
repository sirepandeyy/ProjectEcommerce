import { EntityBase } from './EntityBase/entitybase';
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OrderItem} from "./order-item";
import {Exclude, Expose} from "class-transformer";
import { User } from './users';
import { Link } from './link';

@Entity('orders')
export class Order extends EntityBase{
 
    @Column()
    @Exclude()
    name: string;

    @Column()
    email: string;

    @Column()
    user_id: number;


    @OneToMany(
    (type) => OrderItem, 
    orderItem => orderItem.order
    )
    order_items: OrderItem[];

    @ManyToOne(() => User,
     user => user.orders, {
        createForeignKeyConstraints: false
    })
    @JoinColumn({
        name: 'user_id'
    })
    user: User;

  




}