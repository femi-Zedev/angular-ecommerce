import { CartService } from './../../../services/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCount: number;
  @Input() cartActive: string;
  @Input() prodActive: string;
  @Output() onSearchTyping = new EventEmitter<string>();

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartLength();
  }

  onTyping(searchString): void{
    this.onSearchTyping.emit(searchString);
  }

}
