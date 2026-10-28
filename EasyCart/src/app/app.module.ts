import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CheckoutComponent } from './forms/tdf/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReturnRequestComponent } from './forms/reactive/return-request/return-request.component';
import { CartComponent } from './lifecycle/cart/cart.component';
import { ProductlistComponent } from './lifecycle/productlist/productlist.component';

console.log("app module got loaded")

@NgModule({
  declarations: [
    //loaded on the fresh request
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    CheckoutComponent,
    ReturnRequestComponent,
    CartComponent,
    ProductlistComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
