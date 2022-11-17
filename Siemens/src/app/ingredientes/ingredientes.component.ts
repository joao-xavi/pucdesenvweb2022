import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ingredientes } from '../models/ingredientes';
import { IngredientesService } from './ingredientes.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  public ingredientesForm!: FormGroup;
  public titulo = 'Ingredientes';
  public ingredientesSelected: Ingredientes;
  public modeSave = 'post';

  public ingredientes: Ingredientes[];

  constructor(private fb: FormBuilder, private ingredientesService: IngredientesService) 
  {
    this.Form();
  }

 ngOnInit(){
  this.carregarIngredientes();
 }

 carregarIngredientes(){
  this.ingredientesService.getAll().subscribe(
    (ingredientes: Ingredientes[]) => {
      this.ingredientes = ingredientes;
    },
    (erro: any) => {
      console.error(erro);
    }
  );
 }

  Form() {
    this.ingredientesForm = this.fb.group({
      id: [''],
      nome: [''],
      login: [''],
    });
  }
  
  createIngredientes(ingredientes: Ingredientes) {
    this.ingredientesService.post(ingredientes).subscribe(
      (ingredientes) => {
        console.log(ingredientes);
        this.carregarIngredientes();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  saveIngredientes(ingredientes: Ingredientes) {
    this.ingredientesService.put(ingredientes.id, ingredientes).subscribe(
      (ingredientes) => {
        console.log(ingredientes);
        this.carregarIngredientes();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  async deleteIngredientes(ingredientes: Ingredientes) {
    this.ingredientesService.delete(ingredientes.id).subscribe(
      (ingredientes) => {
        console.log(ingredientes);
        this.carregarIngredientes();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  ingredientesSubmit() {
    this.saveIngredientes(this.ingredientesForm.value);
  }

  ingredientesSelect(ingredientes: Ingredientes) {
    this.modeSave = 'put';
    this.ingredientesSelected = ingredientes;
    this.ingredientesForm.patchValue(ingredientes);
  }

  async ingredientesDelete(ingredientes: Ingredientes) {
    this.deleteIngredientes(ingredientes);
    this.ingredientesForm.patchValue(ingredientes);
  }

  voltar() {
    this.ingredientesSelected = null;
  }

  
}
