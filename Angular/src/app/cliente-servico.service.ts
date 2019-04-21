import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from './cliente';


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
  deletarCliente(cpf) {
    console.log(cpf);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        "cpf": cpf
      },
    };
    return this.http.delete(this._url +'/deletarcliente',  options);
  }


  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
}
}
