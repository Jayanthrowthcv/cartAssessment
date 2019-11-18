import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-carticon',
  templateUrl: './carticon.html',
  styleUrls: [ './carticon.less' ]
})
export class CarticonComponent  {
  faCart = faShoppingCart;
}