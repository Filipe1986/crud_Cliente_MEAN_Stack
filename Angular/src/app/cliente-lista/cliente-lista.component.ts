import { Component } from '@angular/core';
import { ClienteServico } from '../cliente-servico.service';


@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html'
})
export class ClienteListaComponent {


  public clientes = [];
  public errorMsg;
  constructor(private _clientesServico: ClienteServico) { }
/*
  ngOnInit() {
    this._clientesServico.getClientes()
      .subscribe(Cliente => this.clientes = Cliente,
                error => this.errorMsg = error);
}*/

  
  ngOnInit() {
    this._clientesServico.getClientes().subscribe(
      {
        next(Cliente) { this.clientes = Cliente;
          console.log( Cliente); //},
      //  error(error){console.log('Erro' + JSON.stringify( error) )
      }
      }
          )

  }



}
