import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCart } from '../store/product.selector'
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  cart$ = this.store.select(selectCart);

  constructor(private store: Store) {}
}
