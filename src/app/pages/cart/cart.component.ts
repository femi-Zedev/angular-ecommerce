import { CartService } from './../../services/cart.service';
import { StorageService } from './../../services/storage.service';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  searchResult: Product[] = [];
  buttonRemove = 'Supprimer';
  cartProducts: Product[];

  public lottieConfig: AnimationOptions = {
    path: 'assets/images/animations/empty-cart.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
};
  private animation: AnimationItem;

  constructor(
    private cartService: CartService,
    private storage: StorageService,
    private ngZone: NgZone
  ) {

  }

  ngOnInit(): void {
    this.cartProducts = this.storage.get('cart');
  }

  searchProduct(e): void{
    console.log(e);
  }

  removeItem(id): void{
    this.cartService.removeItem(id);
    this.cartProducts = this.storage.get('cart');
  }

  ngOnDestroy(): void{
    // const cart = this.cartService.getItems();
    // this.storage.set('cart', cart);
  }

  handleAnimation(animation: AnimationItem): void{
    console.log(animation);
    this.animation = animation;
  }

  pause(): void{
    this.ngZone.runOutsideAngular(() => { this.animation.pause(); } );
  }

  play(): void{
    this.ngZone.runOutsideAngular(() => { this.animation.play(); } );
  }


}
