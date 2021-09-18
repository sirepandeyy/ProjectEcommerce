import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService {
  endpointGet = `${environment.api}/ORDERS`
  endpointRest = `${environment.api}/ORDERS_SERVICE/ORDERS`
}
