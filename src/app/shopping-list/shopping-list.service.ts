import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingridient.model";

export class ShoppingListService{
    IngredientsChange = new EventEmitter<Ingredient[]>();
    private ingredient:Ingredient[] = [
        new Ingredient('apples',5),
        new Ingredient('apples',5),
        new Ingredient('apples',5),
      ];
//   ingredient: Ingredient[];
    getIngredients(){
        return this.ingredient.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredient.push(ingredient);
        this.IngredientsChange.emit(this.ingredient.slice());
    }
    addIngredients(ingredient: Ingredient[]){
        this.ingredient.push(...ingredient);
        this.IngredientsChange.emit(this.ingredient.slice());
    }
}