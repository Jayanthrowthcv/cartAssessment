import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.less' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private router:Router){
    this.router.navigate(['/Home']);
  }
}
