import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService extends RestService{
  endpointGet = `${environment.api}/ORDER_ITEMS`
  endpointRest = `${environment.api}/ORDERS_ITEMS_SERVICE/ORDER_ITEMS`
}
