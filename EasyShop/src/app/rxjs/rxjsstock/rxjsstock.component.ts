import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjsstock',
  templateUrl: './rxjsstock.component.html',
  styleUrls: ['./rxjsstock.component.css'],
})
export class RxjsstockComponent implements OnInit, OnDestroy {
  stockPrice: number = 100;
  stockSubscription!: Subscription;

  ngOnInit() {
    // Step 1: Create an Observable that emits a new price every 2 seconds
    const stockObservable: Observable<number> = interval(2000).pipe(
      map(() => this.getRandomPrice())
    );

    // Step 2: Subscribe to the Observable
    this.stockSubscription = stockObservable.subscribe((price) => {
      this.stockPrice = price;
    });
  }

  // Step 3: Generate a random stock price
  getRandomPrice(): number {
    return Math.floor(90 + Math.random() * 20); // Generates a price between $90-$110
  }

  // Step 4: Unsubscribe when the component is destroyed
  ngOnDestroy() {
    if (this.stockSubscription) {
      this.stockSubscription.unsubscribe();
    }
  }
}

