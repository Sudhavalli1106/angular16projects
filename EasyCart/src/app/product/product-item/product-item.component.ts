import { Component, EventEmitter, Input, Output } from '@angular/core';
//EventEmitter - allows to create user-defined event
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any; // Receiving data from parent
  @Output() addToCart = new EventEmitter<any>(); // Event emitter to notify parent

  onAddToCart() {
    console.log("inside onaddtocart() in chile")
    this.addToCart.emit(this.product); // Emit selected product to parent
  }
}


/*
Flow Explanation
1️⃣ Parent-to-Child Communication (@Input())
ProductListComponent (Parent) sends each product as an @Input() to ProductItemComponent (Child).
This allows the child component to display product details.
2️⃣ Child-to-Parent Communication (@Output())
ProductItemComponent (Child) has a button "Add to Cart".
When clicked, it emits an event (@Output()) to the ProductListComponent (Parent).
Parent receives the event and processes the selected product (e.g., adding it to the cart).
*/