import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>(); remove listener after adding service
  recipes:Recipe[];
  
  constructor(private recipeSevice: RecipeService){

  }
  
  ngOnInit(){
    this.recipes = this.recipeSevice.getRecipes();
  }
  
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }  remove listener after adding service
}
