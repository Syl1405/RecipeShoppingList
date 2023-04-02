import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('A Recipe','A discription',
        'https://diycandy.com/wp-content/uploads/2022/07/This-Mini-Cheesecake-Recipe-is-Easy-Delicious.jpg.webp',
        [ 
            new Ingredient('apple',1),
            new Ingredient('orange',2) ]
        ),
        new Recipe('Another Recipe','Another discription',
        'https://diycandy.com/wp-content/uploads/2022/07/This-Mini-Cheesecake-Recipe-is-Easy-Delicious.jpg.webp',
        [ 
            new Ingredient('banana',1),
            new Ingredient('pineapple',2) ])
      ];
    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}