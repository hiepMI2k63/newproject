import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { Recipe, RECIPES } from '../recipe/models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe | undefined;
  recipes = RECIPES;

  constructor( private route: ActivatedRoute,  private router: Router, private _location: Location )
   {
        router.events.pipe(
          filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
      ).subscribe((e: RouterEvent) => {
        
        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        this.recipe = this.recipes.find(p => p.id ==id);
        
      });
      
  };

  ngOnInit(): void {}

  deleteRecipe()
  {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let index = this.recipes.findIndex(p => p.id ==id);
    this.recipes.splice(index, 1);
    this._location.back();
  }

}
