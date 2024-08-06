import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './publicpages/home/home.component';
import { ProductComponent } from './publicpages/product/product.component';
import { RegistrationComponent } from './publicpages/registration/registration.component';
import { LoginComponent } from './publicpages/login/login.component';
import { NavbarComponent } from './publiccomponent/navbar/navbar.component';
import { CardComponent } from './publiccomponent/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
