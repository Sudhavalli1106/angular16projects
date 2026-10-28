import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99 },
    { id: 2, name: 'Smart Watch', price: 149.99 },
    { id: 3, name: 'Gaming Mouse', price: 49.99 },
  ];

  cart: any[] = [];

  handleAddToCart(product: any) {
    console.log("inside parent handleaddtocart()")
    this.cart.push(product);
    console.log('Cart:', this.cart); // Display cart items in console
  }
}
