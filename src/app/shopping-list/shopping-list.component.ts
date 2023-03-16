import { Component } from '@angular/core';
import { ingridents } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingridents:ingridents[] = [
    new ingridents('apples',5),
    new ingridents('apples',5),
    new ingridents('apples',5),
  ];
}
