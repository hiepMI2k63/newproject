import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event } from '@angular/router';
import { Recipe, RECIPEV1, RECIPES } from '../recipe/models/recipe';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  pageTitle = 'edit';
  name?:string;
  description?:string;
  image_url?:string;
  recipe?: Recipe;
  recipes = RECIPES;
  recipeForm!: FormGroup;


  saveRecipe() {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let index = this.recipes.findIndex(p => p.id ==id);

    let tempt = {
      id: parseInt(this.route.snapshot.paramMap.get('id')!, 10),
      name : this.getrecipeName.value,
      image_url: this.getrecipeImage_url.value,
      description: this.getrecipeDescription.value,
    }
    console.log(tempt);
    this.recipes[index] = tempt;
    console.log(this.recipes);
    
    
    this.router.navigate(['/recipe/',parseInt(this.route.snapshot.paramMap.get('id')!, 10)]);
    }

  back() {    this.router.navigate(['/message']);}

  constructor( private route: ActivatedRoute,  private router: Router, private _location: Location, @Inject(DOCUMENT) private document: Document ) {};

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        const id = + params['id'];
        this.recipe  =  this.recipes.find(p => p.id ==id);
      }
    );
    
    this.recipeForm =  new FormGroup({
      recipeName: new FormControl(this.recipe?.name, [Validators.required]),
      recipeImage_url: new FormControl(this.recipe?.image_url,[Validators.required]),
      recipeDescription: new FormControl(this.recipe?.description,[Validators.required]),

  })
  }
  get getrecipeName(){ return this.recipeForm.get('recipeName')!;}
  get getrecipeImage_url(){ return this.recipeForm.get('recipeImage_url')!;}
  get getrecipeDescription(){ return this.recipeForm.get('recipeDescription')!;}

  deleteRecipe()
  {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let index = this.recipes.findIndex(p => p.id ==id);
    this.recipes.splice(index, 1);
    this._location.back();
  }

}
