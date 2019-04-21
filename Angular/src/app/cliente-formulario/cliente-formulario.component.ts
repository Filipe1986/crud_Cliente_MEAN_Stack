import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder } from '@angular/forms';
import { ClienteServico } from '../cliente-servico.service';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
})
export class ClienteFormularioComponent implements OnInit {

  clientenFormulario: FormGroup;

  constructor(private fb: FormBuilder, private _clienteServico: ClienteServico) { }


  ngOnInit() {
    this.clientenFormulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: [''],
      nascimento: [''],
      cpf: [''],
      telefone: '',
      subscribe: [false],
    });


  }
  onSubmit() {
    console.log(this.clientenFormulario.value);
    this._clienteServico.novoCliente(this.clientenFormulario.value)
      .subscribe(
        response => console.log('Sucesso!', response),
        error => console.error('Erro!', error)
      );
  }
}
