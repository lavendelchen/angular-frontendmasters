import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved Cars:
      @for (car of savedCarList; track $index) {
        <section class="details">
          <p class="title">{{car.make}} {{car.model}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>{{car.year}}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>{{car.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>{{car.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>{{car.price}}</span>
          </p>
        </section>
      } @empty {
        <div>
          <h1>No cars?</h1>
          <img src="https://i.imgflip.com/65939r.jpg?a478224" width="500px" height="100px"/>
        </div>
      }
    </h1>
    <section class="container">
      @for (car of carList; track $index) {
        <app-listing [car]="car" (carSaved)="saveCar($event)"/>
      } @empty {
        <div>
          <h1>No cars?</h1>
          <img src="https://i.imgflip.com/65939r.jpg?a478224" width="500px" />
        </div>
      }
    </section>
  `,
  styleUrl: "../styles.css",
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  saveCar(car: Car) {
    this.savedCarList.push(car)
    console.log(this.savedCarList)
  }
}
