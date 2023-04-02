import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients:Ingredient[];
  
  constructor(private slService: ShoppingListService){

  }
  ngOnInit(){
    this.Ingredients = this.slService.getIngredients();
    this.slService.IngredientsChange.subscribe(
      (Ingredients: Ingredient[])=>{
        this.Ingredients = Ingredients;
      }
    );
  }
  // onIngredientAdded(ingredient:Ingredient){ rm after built service
  //   this.slService.Ingredients.push(ingredient);
  // }
}
