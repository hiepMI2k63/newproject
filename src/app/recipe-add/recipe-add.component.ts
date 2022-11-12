import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe, RECIPES } from '../recipe/models/recipe';
import { ActivatedRoute, NavigationStart, Router, Event } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit, OnChanges{

  recipes = RECIPES;
  name:string ='';
  description:string ='';
  image_url:string ='';
  flagSave =  true;


      constructor( private route: ActivatedRoute,  private router: Router, private _location: Location)
      {



    }
    ngOnInit(): void {

    }
    ngOnChanges(changes: SimpleChanges): void {
      this.flagSave = false;
      console.log(this.flagSave);
    }

    onSearchChange(searchValue: any): void {
      this.flagSave = false;
      console.log(this.flagSave);

    }

    getCreateRecipe(flag:number)
  {


        if (flag == 1)
        {
           this.description,
           this.name,
           this.image_url
        }

        else{
          this._location.back();
        }

  }

}
