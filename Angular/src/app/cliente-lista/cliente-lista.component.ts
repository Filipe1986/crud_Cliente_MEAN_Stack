import { Component, OnChanges } from '@angular/core';
import { ClienteServico } from '../cliente-servico.service';
import {MatDialog,} from '@angular/material/dialog';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
//import {} from '../cliente-pop-up-component/cliente-pop-up-component.component';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html'
})
export class ClienteListaComponent {


  public clientes = [];
  public errorMsg;
  constructor(private _clientesServico: ClienteServico,
              private dialog: MatDialog ) { }
  
    ngOnInit() {
      this._clientesServico.getClientes()
        .subscribe(clientes => this.clientes = clientes,
                  error => this.errorMsg = error);
    }

    onDelete(cpf) {
      console.log(cpf)
      this._clientesServico.deletarCliente(cpf)
        .subscribe(
          response => console.log('Deletado!', response),
          error => console.error('Erro!', error)
        );
    }  

    onEdit(cliente) {
      
      this.dialog.open(cliente);
      /*
      this._clientesServico.atualizaCliente(cliente)

        .subscribe(
          response => console.log('Atualizado!', response),
          error => console.error('Erro!', error)
        );
        */
    }  
  
}
