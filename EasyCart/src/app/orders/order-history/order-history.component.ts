import { Component } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  orders = [
    { id: 101, product: 'Wireless Earbuds', price: 59.99, status: 'Delivered' },
    { id: 102, product: 'Smartphone Case', price: 19.99, status: 'Shipped' },
    { id: 103, product: 'Laptop Stand', price: 39.99, status: 'Processing' },
  ];
}
