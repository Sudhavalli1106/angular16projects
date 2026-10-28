import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent {
  products = [
    { id: 1, name: 'Laptop', price: 899.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Headphones', price: 129.99 },
  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart = [...this.cart, product]; // Creates a new array reference
    console.log('Product added to cart:', product);
  }
}
