import {Component} from '@angular/core';
import {PassengerI} from './passenger';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {

 passengers: PassengerI[] = [{
   id:1,
   fullname:'krati',
   checkedIn:true

 }
   
 ]
 
 
  }
