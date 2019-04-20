import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from './cliente';



@Injectable()
export class ClienteServico {

  private _url: string = "http://localhost:8000/api/clientes";

  constructor(private http:HttpClient) { }

  getClientes(): Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
}
}
