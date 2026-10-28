import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnChanges, OnInit, OnDestroy {
  @Input() cartItems: any[] = [];
  totalPrice: number = 0;
  interval: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItems']) {
      this.calculateTotal();
      console.log('Cart updated! New items:', this.cartItems);
    }
  }

  ngOnInit() {
    console.log('CartComponent Initialized');
    this.interval = setInterval(() => {
      console.log('Refreshing total price every 5 seconds...');
      this.calculateTotal();
    }, 5000);
  }

  ngOnDestroy() {
    console.log('CartComponent Destroyed');
    clearInterval(this.interval);
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}