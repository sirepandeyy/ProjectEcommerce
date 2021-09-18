import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Link } from '../interfaces/link';

@Injectable({
  providedIn: 'root'
})
export class LinkService  {
  
  constructor(private http: HttpClient) {
  }
  endpointGet = `${environment.api}/LINKS`

  get(id: number): Observable<any> {    
    console.log(id)
    return this.http.get(`https://localhost:4000/products/${id}`)
  }

  createPost(data:any): Observable<any> {
    data.SocketId = sessionStorage.getItem('socket_id')
    return this.http.post('https://localhost:4000/CARTS_SERVICE/CARTS', data);
  }
}
