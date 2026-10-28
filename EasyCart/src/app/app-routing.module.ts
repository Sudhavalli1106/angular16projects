import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './forms/tdf/checkout/checkout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ReturnRequestComponent } from './forms/reactive/return-request/return-request.component';
import { ProductlistComponent } from './lifecycle/productlist/productlist.component';


const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule), //load order module dynamically - order module will be lazily loaded/ loaded on demand
  },
  { path: 'product', component: ProductListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'returnrequest', component: ReturnRequestComponent },
  {path:'lifecycle',component:ProductlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
