import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteServico } from './cliente-servico.service';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    
  ],
  providers: [
    ClienteServico,
    MatDialogModule,
    MatDialog
  ],
  bootstrap: [AppComponent, ClienteFormularioComponent, ClienteListaComponent ],
  entryComponents: [ClienteFormularioComponent]

})
export class AppModule { }
