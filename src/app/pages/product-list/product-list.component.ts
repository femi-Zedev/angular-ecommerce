import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'e-commerce';
  buttonAdd = 'Ajouter';
  products: Product[] = [];
  searchResult: Product[] = [];
  cartLength: number;

  constructor(
    private prodService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void{
    this.prodService.getProducts().subscribe( (res) => {
      this.products = res;
    });
  }

  searchProduct(searchString): void{
    this.searchResult = this.products.filter((item: Product) => {
      return item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    });
  }

  addProduct(prod: Product): void{
    this.cartService.addToCart(prod);
  }


}
