import { StorageService } from './storage.service';
import { Product } from './../models/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[];
  cartCount: number;
  constructor(private storage: StorageService) {
    if (this.isCartStorageEmpty()){
      this.items = []
    }else{
      this.items = this.storage.get('cart');
    }
  }

  addToCart(product: Product): void{
    const index = this.items.findIndex(
      (item) => item.id === product.id
    );
    if (index >= 0 ){
      window.alert(`Le produit ${product.id} est déjà ajouté`);
      return;
    }
    this.isCartStorageEmpty();
    this.items.push(product);
    this.storage.set('cart', this.items);
    this.getCartLength();
  }

  isCartStorageEmpty(): boolean {
    const res = this.storage.get('cart');
    if (!res || res.length !== 0 ){
      this.storage.set('cart', []);
      return true;
    } else {
      return false;
    }
  }

  removeItem(id: number): void{
    const index = this.items.findIndex(
      (item) => item.id === id
    );
    this.items.splice(index, 1);
    this.storage.set('cart', this.items);
    this.getCartLength();
  }

  getItems(): any {
    if (this.isCartStorageEmpty()){
      return console.log('Panier vide');
    }else{
      return this.storage.get('cart');
    }
  }

  clearCart(): any {
    this.storage.set('cart', []);
  }

  getCartLength(): number{
    this.isCartStorageEmpty();
    const res = this.storage.get('cart');
    return this.cartCount= res.length;
  }
}
