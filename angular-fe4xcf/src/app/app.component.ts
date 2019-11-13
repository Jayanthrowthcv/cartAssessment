import { Component ,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  cartMessage:any;
  arrayList:Array<Object>=[];
  constructor( private router:Router){
    this.router.navigate(['/Home']);
  }
  ngOnInit(){
  }
}
