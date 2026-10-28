import { Component } from '@angular/core';

@Component({
  selector: 'app-product-directives',
  templateUrl: './product-directives.component.html',
  styleUrls: ['./product-directives.component.css'],
})
export class ProductDirectivesComponent {
  products = [
    { name: 'Smartphone', price: 799, stock: 10 },
    { name: 'Laptop', price: 1299, stock: 0 },
    { name: 'Headphones', price: 199, stock: 25 },
   
  ];
}
