import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/product.reducer';

@NgModule({
  declarations: [AppComponent, ProductListComponent, AddToCartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ product: productReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
