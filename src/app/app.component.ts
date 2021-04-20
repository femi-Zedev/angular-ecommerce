import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'e-commerce';
  products: Product[] = [];
  searchResult: Product[] = [];

  constructor(private prodService: ProductService) { }

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
}
