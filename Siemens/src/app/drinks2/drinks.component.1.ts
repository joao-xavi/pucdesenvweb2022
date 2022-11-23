import { Component, NgModule, OnInit } from '@angular/core';
import { Drink } from '../models/drink';
import { DrinkService1 } from './drink.service.1';



@Component({
  selector: 'app-card',
  templateUrl: './drinks.component.1.html',
  styleUrls: ['./drinks.component.1.css']
})
export class DrinkComponent1 implements OnInit {

  constructor(private drinkService1 : DrinkService1) {}

  drinks:Drink[] = []

  ngOnInit(){
    this.carregarDrinks();
   }
  
   carregarDrinks(){
    this.drinkService1.getAll().subscribe(
      (drinks: Drink[]) => {
        this.drinks = drinks;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
   }

   searchText: string = '';
   
   onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    //console.log(this.searchText);
   }
}
