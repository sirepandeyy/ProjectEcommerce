import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NavComponent } from './nav/nav.component';
import { BackendProductsComponent } from './backend-products/backend-products.component';
import { FrontendProductsComponent } from './frontend-products/frontend-products.component';
import { HeaderComponent } from './header/header.component';
import { SecureComponent } from './secure/secure.component';



@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    BackendProductsComponent,
    FrontendProductsComponent,
    HeaderComponent,
    SecureComponent
  ],
  imports: [
    CommonModule
    ,RouterModule
  ]
})
export class MainModule { }
