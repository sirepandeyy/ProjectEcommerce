import { EntityBase } from './EntityBase/entitybase';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order";

@Entity('order_items')
export class OrderItem extends EntityBase{

    @Column()
    product_title: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

    

    @Column({name:"order_id"})
    order_id:number

    @ManyToOne(
    (type) => Order, 
    (order) => order.order_items)
    
    @JoinColumn({name: 'order_id'})
    order: Order;
}