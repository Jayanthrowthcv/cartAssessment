import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";

@Component({
  selector: "my-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  name = "Angular";
  cartMessage = ``;
  arrayList: Array<Object> = [];
  buttonEnable = [];
  cartCount = [];
  
  constructor(private service: HomeService) {}

  ngOnInit() {
    this.cartCount = this.service.cartDetails;
    this.service.getMethod().subscribe(res => {
      this.arrayList = res;
    });
    for (let i = 0; i < this.arrayList.length; i++) {}
  }
  addToCart(item) {
    console.log(item);
    let obj = { itemName: item.name, count: 1 ,price : item.price, discount: item.discount ,img :item.img_url};
    this.cartMessage = `${item.name} is added to cart`;
    this.service.cartDetails.push(obj);
  }
}
