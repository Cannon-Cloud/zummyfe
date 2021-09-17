import { Component, OnInit } from '@angular/core';
import { CartService } from '@zummy/orders';

@Component({
  selector: 'zummy-cart-icon',
  templateUrl: './cart-icon.component.html',
  styles: [],
})
export class CartIconComponent implements OnInit {
  cartCount = 0;
  cartStringCount = '';
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      if (cart.items) {
        this.cartCount = cart.items.length;
        this.cartStringCount = this.cartCount.toString();
      } else {
        this.cartCount = 0;
        this.cartStringCount = this.cartCount.toString();
      }
    });
  }
}
