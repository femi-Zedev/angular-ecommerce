import { CartComponent } from './../../pages/cart/cart.component';
import { ProductListComponent } from './../../pages/product-list/product-list.component';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory(){
  return player;
}


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainLayoutRoutingModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  declarations: [
    ProductListComponent,
    CartComponent
  ]
})
export class MainLayoutModule { }
