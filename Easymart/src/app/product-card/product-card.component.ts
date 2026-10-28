import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  product = {
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'assets/images/headphone.png',
    inStock: true,
  };

  // Two-Way Binding
  quantity: number = 1;

  // Event Binding
  addToCart() {
    alert(`${this.product.name} added to cart! Quantity: ${this.quantity}`);
  }
}
