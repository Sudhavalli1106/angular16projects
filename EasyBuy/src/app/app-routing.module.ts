import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicItemsComponent } from './electronic-items/electronic-items.component';
import { ElectronicItemDetailComponent } from './electronic-item-detail/electronic-item-detail.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { RouteParamExampleComponent } from './route-param-example/route-param-example.component';

const routes: Routes = [
  //Simple routing
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },

  //Route & Route param with link
  {path:'routedemo',component:RoutingExampleComponent},
  {path:'routeparamdemo',component:RouteParamExampleComponent},

  //Route param
  { path: 'electronic-items', component: ElectronicItemsComponent },
  { path: 'electronic-items/:id', component: ElectronicItemDetailComponent }, // ✅ Route with param
  //{ path: '**', redirectTo: 'electronic-items' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
