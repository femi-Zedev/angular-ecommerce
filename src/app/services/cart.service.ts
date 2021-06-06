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
      this.items = [];
    }else{
      this.items = this.storage.get('cart');
    }
  }


  addToCart(product: Product): void{
    const prodInCart = this.items.find ( (item) => { return item.id === product.id  });
    if (prodInCart){
      window.alert(`${product.title} est déjà ajouté`);
      return;
    }
    this.isCartStorageEmpty();
    product.quantity = 1;
    this.items.push(product);
    this.storage.set('cart', this.items);
    this.getCartLength();
  }

  updateProductQuantity(prod: Product, qty: number): void {
    const index = this.items.findIndex(
      (item) => item.id === prod.id
    );
    this.items[index].quantity = qty;
    this.storage.set('cart', this.items);
    this.getCartLength();
  }

  isCartStorageEmpty(): boolean {
    const res = this.storage.get('cart');
    if (!res ){
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

  getSummary(): number {
    let total = 0;
    this.items.forEach( (prod: Product) => {
      const interAmount = prod.quantity * parseInt(prod.price, 10);
      total += interAmount;
    });
    return total;
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
    return this.cartCount = res.length;
  }

}
