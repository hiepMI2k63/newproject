import { Component, OnInit } from '@angular/core';
import { Recipe, RECIPES } from './models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {

    this.recipes = RECIPES;

  }

}
