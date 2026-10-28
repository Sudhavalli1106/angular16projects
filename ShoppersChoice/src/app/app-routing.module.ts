import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: AddToCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
