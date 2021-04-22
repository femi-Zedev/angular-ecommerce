import { CartService } from './../../services/cart.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  searchResult: Product[] = [];
  buttonRemove = 'Supprimer';
  cartProducts: Product[];

  constructor(
    private cartService: CartService,
    private storage: StorageService
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

}
