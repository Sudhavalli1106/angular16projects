import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from '../store/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Smartphone', image: 'assets/Images/Smartphone.png', price: 699 },
    { id: 2, name: 'Laptop', image: 'assets/Images/Laptop.png', price: 1299 },
    { id: 3, name: 'Headphones', image: 'assets/Images/headphone.png', price: 199 },
  ];

  constructor(private appstore: Store) {}

  addToCart(product: any) {
    this.appstore.dispatch(addToCart({ product }));
  }
}
