import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from './cliente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})
export class ClienteServico {

  private _url: string = "http://localhost:8000/api";

  constructor(private http:HttpClient) { }

  getClientes(): Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this._url+'/clientes');
  }

  novoCliente(cliente) {
    return this.http.post<any>(this._url +'/novocliente', cliente);
  }


  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
}
}
