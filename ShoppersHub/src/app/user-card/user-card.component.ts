import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  users = [
    {
      id: 1,
      name: 'John Doe',
      profilePicture: 'assets/Images/Laptop.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      profilePicture: 'assets/Images/Laptop.png',
    },
    {
      id: 3,
      name: 'Sam Wilson',
      profilePicture: 'assets/Images/Laptop.png',
    },
  ];

  viewDetails(user: any) {
    console.log('Viewing details for:', user);
  }
}
