import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path:'recipe', component:RecipeComponent}
  ,
  { path:'about', component:AboutComponent}
  ,
  { path:'recipe/:id', component:RecipeDetailComponent}
  // ,
  //  { path:'recipe', redirectTo:'', pathMatch:'full'}
  ,
  { path:'edit/:id', component:RecipeEditComponent },

  {path:'add', component:RecipeAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
