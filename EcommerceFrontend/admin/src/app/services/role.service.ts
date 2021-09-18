import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestService {
  endpointGet = `${environment.api}/APP_ROLES`
  endpointRest = `${environment.api}/APP_ROLES_SERVICE/APP_ROLES`
}
