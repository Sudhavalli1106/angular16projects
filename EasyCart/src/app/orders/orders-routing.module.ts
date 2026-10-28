import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path: 'orderhistory', component: OrderHistoryComponent },
  { path: 'orderlist', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
