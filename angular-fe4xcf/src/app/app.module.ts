import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from "./app-router.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { HomeService } from "./home/home.service";
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component"

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule ,AppRoutingModule],
  declarations: [AppComponent , CartComponent , HomeComponent],
  bootstrap: [AppComponent],
  providers: [HomeService]
})
export class AppModule {}
