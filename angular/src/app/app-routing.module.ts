import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './publicpages/home/home.component';
import { ProductComponent } from './publicpages/product/product.component';
import path from 'path';
import { RegistrationComponent } from './publicpages/registration/registration.component';
import { LoginComponent } from './publicpages/login/login.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'product' , component : ProductComponent},
  {path : 'registration', component : RegistrationComponent},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
