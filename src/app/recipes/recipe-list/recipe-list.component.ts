import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('A Recipe','A discription','https://diycandy.com/wp-content/uploads/2022/07/This-Mini-Cheesecake-Recipe-is-Easy-Delicious.jpg.webp'),
    new Recipe('A Recipe','A discription','https://diycandy.com/wp-content/uploads/2022/07/This-Mini-Cheesecake-Recipe-is-Easy-Delicious.jpg.webp')
  ];
}
