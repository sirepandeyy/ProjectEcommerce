import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {io} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpointGet(): string;
  abstract get endpointRest(): string;
 
   socket = io('https://localhost:4000');
  
   constructor(protected http: HttpClient) {
      //FIRST ACTION hapens wheN the page opens firSt time , this is one time activity 
      console.log("qdwqd")
      this.socket.on('connection', function (socket:any) {
        console.log('socket has been connected');
        console.log(socket)
    });

    //this iS a custom event regoistered at sErver side
    this.socket.on('testerEvent', function (data) { document.write(data.description) });


    //Thi seven Is caLled whEn  the server sends the data back to the client
    this.socket.on('successResponseFromServer', function (data:any) {
        //evalaute the requestGuid from the dictionary and then match and then show themessgae in console
    
        console.log(data);
        //for find you can use 'Filter' 
        //remove the item from the dictionary /array
    });

    this.socket.on('errorResponseFromServer', function (data) {
        //evalaute the requestGuid from the dictionary and then match and then show themessgae in console
        console.log(data);
        //for find you can use 'Filter' 
        //remove the item from the dictionary /array
    });

    //this is the event which is called when the server register the socket id and sends back the socket id
    this.socket.on('socketIdFromServer', function (data) {
        console.log(data)
        sessionStorage.setItem('socket_id', data.socket_id);
    });
  }

  all(): Observable<any> {
    return this.http.get(`${this.endpointGet}`);
  }

  create(data:any): Observable<any> {
    data.SocketId = sessionStorage.getItem('socket_id')
    return this.http.post(this.endpointRest, data);
  }

  get(id: number): Observable<any> {
    
    return this.http.get(`${this.endpointGet}/${id}`);
  }

  update(id: number, data:any): Observable<any> {
    data.SocketId = sessionStorage.getItem('socket_id')
    return this.http.put(`${this.endpointRest}/${id}`, data);
  }

  delete(id:number ,data:any): Observable<void> {
    data.SocketId = sessionStorage.getItem('socket_id')
    return this.http.request<any>('DELETE', `${this.endpointRest}/${id}`, {body: data});
  }
}