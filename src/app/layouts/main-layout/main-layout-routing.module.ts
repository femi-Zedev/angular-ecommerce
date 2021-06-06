import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { ProductListComponent } from 'src/app/pages/product-list/product-list.component';

const mainRoutes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: 'product-list'
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
