import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators } from '@angular/forms';
import { Recipe } from './recipe/models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  recipes: Recipe[] = [];
  
  ngOnInit(): void {
    
  }
  constructor( )
  {   
 

   }
  
  title = 'newproject';
  // name = new FormControl('');

  // profileForm = new  FormGroup({
  //   firstName: new FormControl(''),
  //   lastName : new FormControl(''),
  // });

  profileFormv1 = new FormGroup({
    firstName: new FormControl('first name ',[Validators.required]),
    lastName: new FormControl('last  name '),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),

    })
  });
//   updatevalue()
// {
//   this.profileFormv1.patchValue({
//     firstName: 'test',
//     lastName:'test',
//     address: {
//       street: '123 Drew Street'
//     }
     
//   });
// }
  // updateName()
  // {
  //   this.name.setValue('Hiep')
  // }
  onSubmit()
  {
    console.log("say hi");
    
  }
}
