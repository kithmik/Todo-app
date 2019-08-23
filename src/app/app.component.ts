// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'show-data';
// }
import { Component } from '@angular/core';

import { CarModel } from './car-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
cars = [];

i = 0;

  carModel = new CarModel(this.i, '', '', '', false);

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  saveCar(){
    this.cars.push(this.carModel);
    this.i += 1;
    this.carModel = new CarModel(this.i, '', '', '', false);
  }



// saveClaim(value){
//   this.carsubmit.push(value)

}
  
    

