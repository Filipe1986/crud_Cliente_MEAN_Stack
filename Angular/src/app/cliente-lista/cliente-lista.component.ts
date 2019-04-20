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
  
    ngOnInit() {
      this._clientesServico.getClientes()
        .subscribe(clientes => this.clientes = clientes,
                  error => this.errorMsg = error);
  }
}