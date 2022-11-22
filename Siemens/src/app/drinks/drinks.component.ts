import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Drink } from '../models/drink';
import { DrinkService } from './drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  public drinkForm!: FormGroup;
  public titulo = 'Drinks';
  public drinkSelected: Drink;
  public modeSave = 'post';
  public addDrink = false;


  public drinks: Drink[];

  constructor(private fb: FormBuilder, private drinkService: DrinkService) 
  {
    this.Form();
  }

 ngOnInit(){
  this.carregarDrinks();
 }

 carregarDrinks(){
  this.drinkService.getAll().subscribe(
    (drinks: Drink[]) => {
      this.drinks = drinks;
    },
    (erro: any) => {
      console.error(erro);
    }
  );
 }

  Form() {
    this.drinkForm = this.fb.group({
      id: [''],
      nome: [''],
      descricao: [''],
      categoria: [''],
      imagem: [''],

    });
  }
  
  createDrink(drink: Drink) {
    this.drinkService.post(drink).subscribe(
      (drink) => {
        console.log(drink);
        this.carregarDrinks();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  saveDrink(drink: Drink) {
    this.drinkService.put(drink.id, drink).subscribe(
      (drink) => {
        console.log(drink);
        this.carregarDrinks();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  async deleteDrink(drink: Drink) {
    this.drinkService.delete(drink.id).subscribe(
      (drink) => {
        console.log(drink);
        this.carregarDrinks();
      },
      (erro: any) => {
        console.log(erro)
      }
    );
  }

  drinkSubmit() {
    this.saveDrink(this.drinkForm.value);
  }

  drinkAdd() {
    this.createDrink(this.drinkForm.value);
  }

  drinkSelect(drink: Drink) {
    this.modeSave = 'put';
    this.drinkSelected = drink;
    this.drinkForm.patchValue(drink);
  }

  async drinkDelete(drink: Drink) {
    this.deleteDrink(drink);
    this.drinkForm.patchValue(drink);
  }

  voltar() {
    this.drinkSelected = null;
  }

  voltarAdd() {
    this.addDrink = null;
  }

  addDrinksTela() {
    this.modeSave = 'post';
    this.addDrink = true;
    this.drinkSelected = null;
  }

  
}
