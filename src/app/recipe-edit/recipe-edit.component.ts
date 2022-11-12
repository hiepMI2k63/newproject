import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event } from '@angular/router';
import { Recipe, RECIPES } from '../recipe/models/recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  name:string ='';
  image_url:string = '';
  description:string = '';
  recipe: Recipe | undefined;
  recipes = RECIPES;

  constructor( private route: ActivatedRoute,  private router: Router, private _location: Location )
   {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        this.recipes.find(p => p.id == id )
        this.recipe = this.recipes.find(p => p.id ==id);
    }

    });

  };

  ngOnInit(): void {

    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.recipes.find(p => p.id == id )
    this.recipe = this.recipes.find(p => p.id ==id);
    console.log(this.recipe);


  }
  deleteRecipe()
  {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let index = this.recipes.findIndex(p => p.id ==id);
    this.recipes.splice(index, 1);
    this._location.back();
  }
  getCreateRecipe()
  {}

}
