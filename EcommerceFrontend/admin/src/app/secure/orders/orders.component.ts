import { OrderItem } from './../../interfaces/order-item';
import { OrderItemService } from './../../services/order-item.service';
import {Component, OnInit} from '@angular/core';
import {Order} from '../../interfaces/order';
import {OrderService} from '../../services/order.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],

  animations: [
    trigger('tableState', [
      state('show', style({
        maxHeight: '200px'
      })),
      state('hide', style({
        maxHeight: 0
      })),
      transition('show => hide', animate('1000ms ease-in')),
      transition('hide => show', animate('1000ms ease-out')),
    ])
  ]
})
export class OrdersComponent implements OnInit {
 
  orders: Order[] = [];
  orderItems:OrderItem[] = []
  selected: number;
  show = false; 

  constructor(private orderService: OrderService,private orderItemService:OrderItemService) {
  }

  ngOnInit(): void {
    this.load2()
    this.load1();

  }

  load1(): void {
    this.orderService.all().subscribe(
      (res: any) => {
        this.orders = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }

  load2():void{
    this.orderItemService.all().subscribe(
      (res: any) => {
        this.orderItems = res.DataCollection;
        console.log(res.DataCollection)
      }
    );
  }


  

  select(id: number): void {
    this.selected = this.selected === id ? 0 : id;
    console.log(this.selected)
  }

  itemState(id: number): string {
    return this.selected === id ? 'show' : 'hide';
  }


}
