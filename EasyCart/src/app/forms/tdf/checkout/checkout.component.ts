import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutData = {
    name: '',
    email: '',
    address: '',
    payment: '',
  };

  submitted = false; // ✅ Initially, nothing is shown
  onSubmit() {
    this.submitted = true; // ✅ Show details after clicking the button
    console.log('Order Placed!', this.checkoutData);
    alert('Order Placed Successfully!');
  }
}
