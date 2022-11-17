import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NavComponent } from './nav/nav.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TituloComponent } from './titulo/titulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { HarmonizacaoComponent } from './harmonizacao/harmonizacao.component';
import { DrinksComponent } from './drinks/drinks.component';
import { LoginComponent } from './autenticacao/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [							
    AppComponent,
    ClientesComponent,
    NavComponent,
    TituloComponent,
      IngredientesComponent,
      HarmonizacaoComponent,
      DrinksComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NoopAnimationsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
