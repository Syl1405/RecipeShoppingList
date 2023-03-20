import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients:Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('apples',5),
    new Ingredient('apples',5),
  ];
  onIngredientAdded(ingredient:Ingredient){
    this.Ingredients.push(ingredient);
  }
}
