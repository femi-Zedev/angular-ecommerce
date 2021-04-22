import { CartComponent } from './../../pages/cart/cart.component';
import { ProductListComponent } from './../../pages/product-list/product-list.component';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MainLayoutRoutingModule
  ],
  declarations: [
    ProductListComponent,
    CartComponent
  ]
})
export class MainLayoutModule { }
