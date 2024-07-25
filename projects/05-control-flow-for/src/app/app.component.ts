import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      @for (car of carList; track $index) {
        <!-- This article element represents and entire listing -->
        <article class="listing">
          <div class="image-parent">
            <img class="product-image" src="https://placehold.co/100x100" />
          </div>
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
        </article>
      } @empty {
        <div>
          <h1>No cars?</h1>
          <img src="https://i.imgflip.com/65939r.jpg?a478224" width="500px" />
        </div>
      }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
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
}
