import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HarmonizacaoComponent } from './harmonizacao/harmonizacao.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { LoginComponent } from './autenticacao/login/login.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'harmonizacao', component: HarmonizacaoComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'login', component: LoginComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
