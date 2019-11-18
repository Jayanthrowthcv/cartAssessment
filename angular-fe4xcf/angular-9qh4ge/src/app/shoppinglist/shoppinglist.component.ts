import { Component, OnInit } from "@angular/core";
import { ShoppingService } from "./shoppinglist.service";
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: "my-shop",
  templateUrl: "./shoppinglist.html",
  styleUrls: ["./shoppinglist.less"]
})
export class ShoppingComponent implements OnInit {
  shopItems: Array<any> = [];
  images = [];
  rupee = faRupeeSign;
  constructor(private service: ShoppingService) {
    
  }
  ngOnInit() {
    this.service.getMethod().subscribe(res => {
      this.shopItems = res;
      console.log(this.shopItems);
      this.images = this.shopItems.map((x,index) => {
        return x.img_url.replace("http","https");
      });
      console.log(this.images);
    });

  }
}
