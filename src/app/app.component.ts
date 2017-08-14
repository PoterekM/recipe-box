import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pie Box!';
  recipes: Recipe[] = [
    new Recipe('Pancakes', 'flour, eggs, baking soda, water', 'mix it in a bowl and fry it up, bb!'),
    new Recipe('eggs', 'eggs, oil, salt, pepper', 'mix it in a fish and fry it up, bb!'),
    new Recipe('Pork lion', 'pork, lion, butter, brown sugar, sugggah', 'enter the wild. if you win you get to eat.'),
  ];
}

export class Recipe {
  constructor(public name: string, public ingredients: string, public directions: string) { }
}
