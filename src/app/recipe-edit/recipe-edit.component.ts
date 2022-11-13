import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event } from '@angular/router';
import { Recipe, RECIPEV1, RECIPES } from '../recipe/models/recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private originalRecipe?: Recipe;
  pageTitle = 'edit';
  name?:string;
  description?:string;
  image_url?:string;

  recipe?: Recipe;
  recipes = RECIPEV1;


  saveRecipe()
  {

    for (let index = 0; index < RECIPES.length; index++) {
      RECIPES[index] = RECIPEV1[index];

    }
    this._location.back();


  }

  addBook( a:any)
  {

    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let index = this.recipes.findIndex(p => p.id ==id);
    this.recipes[index].description = a.description;
    this.recipes[index].name = a.name;
    this.recipes[index].image_url = a.image_url;


  }

  constructor( private route: ActivatedRoute,  private router: Router, private _location: Location )
   {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let index = this.recipes.findIndex(p => p.id ==id);

    this.name = this.recipes[index].name;
    this.description = this.recipes[index].description;
    this.image_url =  this.recipes[index].image_url;
    console.log('dasdfasdf',this.image_url);

    // this.router.events.subscribe((event: Event) => {

    //   if (event instanceof NavigationStart) {
    //     const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    //     this.recipes.find(p => p.id == id )
    //     this.recipe = this.recipes.find(p => p.id ==id);

    // }

    // });

  };

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let index = this.recipes.findIndex(p => p.id ==id);

    this.name = this.recipes[index].name;
    this.description = this.recipes[index].description;
    this.image_url =  this.recipes[index].image_url;
    console.log('dasdfasdf',this.image_url);
    this.route.params.subscribe(
      params => {
        const id = + params['id'];
        this.getRecipe(id);
        console.log(id);

      }
    );

  }
  getRecipe(id: number): void{
    this.name = this.recipe?.name;
    this.description = this.recipe?.description;
    this.image_url =  this.recipe?.image_url;
    this.originalRecipe = this.recipe  =  this.recipes.find(p => p.id ==id);

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
