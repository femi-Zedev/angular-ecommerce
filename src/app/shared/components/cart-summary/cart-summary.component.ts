import { Product } from './../../../models/product.interface';
import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
total = 0;
subscription: Subscription;
  constructor(private cartService: CartService, private subjectService: SubjectService) {
    this.subscription = this.subjectService.getMessage().subscribe(message => {
      if (message.text === 'qty') {
        console.log('update occurs');
        this.total = this.cartService.getSummary();
      }
    });
   }

  ngOnInit(): void {
    this.total = this.cartService.getSummary();
  }



  onCheckOut(): void {
  }

}
