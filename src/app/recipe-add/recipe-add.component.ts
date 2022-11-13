import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe, RECIPES } from '../recipe/models/recipe';
import { ActivatedRoute, NavigationStart, Router, Event } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit{

  recipes = RECIPES;
  name:string ='';
  description:string ='';
  image_url:string ='';
  recipe?:Recipe;
  flagSave =  true;


      constructor( private route: ActivatedRoute,  private router: Router, private _location: Location)
      {    }
    ngOnInit(): void {    }
    saveRecipe(){

      //
      //this.recipe?.id = 1; error
      this.recipe = {
       id:1, name: this.name,
      image_url:'https://www.portugalist.com/wp-content/uploads/prego.jpg',
      description: this.description,

     }
     this.recipes.push(this.recipe);
     console.log(this.recipes);

    }

}
