import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { RouteParamExampleComponent } from './route-param-example/route-param-example.component';
import { ElectronicItemsComponent } from './electronic-items/electronic-items.component';
import { HttpClientModule } from '@angular/common/http';
import { ElectronicItemDetailComponent } from './electronic-item-detail/electronic-item-detail.component';
import { NavbarComponent } from './navbar/navbar.component';  //route param
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    RoutingExampleComponent,
    RouteParamExampleComponent,
    ElectronicItemsComponent,
    ElectronicItemDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
