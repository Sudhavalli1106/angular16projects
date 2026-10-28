import { Component } from '@angular/core';

@Component({
  selector: 'app-product-pipes',
  templateUrl: './product-pipes.component.html',
  styleUrls: ['./product-pipes.component.css'],
})
export class ProductPipesComponent {
  product = {
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    discount: 0.1, // 10% discount
    releaseDate: new Date(2024, 1, 15),
    description:
      'These are high-quality wireless Bluetooth headphones with noise cancellation and long battery life.',
  };
}
