import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ClienteFormularioComponent]
})
export class AppModule { }
