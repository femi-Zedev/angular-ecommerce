import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
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
