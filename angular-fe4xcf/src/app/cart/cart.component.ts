import { Component ,OnInit } from '@angular/core';
import { HomeService } from "../home/home.service";
import {Router} from '@angular/router';

@Component({
  selector: 'my-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.css' ]
})
export class CartComponent implements OnInit {
  name = 'Angular';
  cartMessage:any = "Item Added";
  cartList:Array<Object>=[];
  totalPrice =0 ;
  totalDiscount = 0;
  constructor( private service:HomeService , private router:Router){
    
  }
  ngOnInit(){
    this.cartList = this.service.cartDetails;
    this.cartList.forEach(x=>{
      this.totalDiscount += x.discount;
      this.totalPrice += x.price;
    })
  }
  goToHome(){
    this.router.navigate(['/Home']);
  }
}
