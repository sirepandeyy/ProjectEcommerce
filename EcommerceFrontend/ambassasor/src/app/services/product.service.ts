import { RestService } from './rest.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestService{

  
  endpointGet = `${environment.api}/PRODUCTS`
  endpointRest = `${environment.api}/PRODUCTS_SERVICE/PRODUCTS`
}
