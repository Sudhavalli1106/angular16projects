import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-end gaming laptop',
      image: 'assets/Images/Laptop.png',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model smartphone',
      image: 'assets/Images/Smartphone.png',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling headphones',
      image: 'assets/Images/headphone.png',
    },
  ];

  addToCart(product: any) {
    console.log('Added to Cart:', product);
  }
}
