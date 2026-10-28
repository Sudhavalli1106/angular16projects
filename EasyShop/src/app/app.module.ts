import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RxjsstockComponent } from './rxjs/rxjsstock/rxjsstock.component'
 import { OrdersModule } from './orders/orders.module';
import { DemoModule } from './demo/demo.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    RxjsstockComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrdersModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
