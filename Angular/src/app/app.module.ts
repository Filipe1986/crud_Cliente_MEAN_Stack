import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteServico } from './cliente-servico.service';
//Injeção de dependência de directive ou component na declarations
@NgModule({
  declarations: [
    AppComponent,
    ClienteFormularioComponent,
    ClienteListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClienteServico
  ],
  bootstrap: [AppComponent, ClienteFormularioComponent, ClienteListaComponent  ]
})
export class AppModule { }
