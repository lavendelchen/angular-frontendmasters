import { Component, Input } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <p>Name: <b>{{ user.name }}</b>, Email: <b>{{ user.email }}</b></p>
    <!-- add more properties to customize -->
  `,
  styles: ``,
})
export class UserInfoComponent {
  @Input() user: User = {
    id: -1,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  };
}
