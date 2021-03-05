import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { PersonComponent } from './person/person.component';
//import { AddPersonComponent } from './add-person/add-person.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes:Routes=[{
path:"Persons",component:PersonComponent},
{path:"",redirectTo:'Persons',pathMatch:'full'},
{path:"home",component:HomeComponent},
//{path:"add",component:AddPersonComponent},
{path:"Products",component:ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
