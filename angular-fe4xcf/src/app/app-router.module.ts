import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }