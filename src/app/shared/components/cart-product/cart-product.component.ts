import { SubjectService } from './../../../services/subject.service';
import { Product } from './../../../models/product.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  @Input() product: Product;
  @Output() removeClicked = new EventEmitter();
  amount: number;
  constructor(private cartService: CartService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.amount = parseInt(this.product.price, 10);
  }

  removeItem(id: number): void{
    this.removeClicked.emit(id);
  }

  quantityChange(value): void{
    this.product.quantity = value;
    this.cartService.updateProductQuantity(this.product, value);
    this.subjectService.sendMessage('qty');
    this.amount = parseInt(this.product.price, 10) * value;
  }

}
