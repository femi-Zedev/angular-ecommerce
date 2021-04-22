import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() buttonText: string;
  @Input() btnClass: string;
  @Output() buttonClicked = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(prod): void{
    this.buttonClicked.emit(prod);
  }

}
