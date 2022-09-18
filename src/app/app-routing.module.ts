import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { EditarComponent } from './Components/editar/editar.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo:"home"},

  {path:"home", component:HomeComponent},
  {path:"agregar", component:AgregarComponent},
  {path:"editar/:id", component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
