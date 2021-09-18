import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService {
  endpointGet = `${environment.api}/APP_USERS`
  endpointRest = `${environment.api}/APP_USERS_SERVICE/APP_USERS`
 
}
