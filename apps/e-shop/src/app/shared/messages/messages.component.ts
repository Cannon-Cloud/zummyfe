import { Component, OnInit } from '@angular/core';
import { CartService } from '@zummy/orders';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'zummy-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.messageService.add({
        severity: 'custom',
        summary: 'Updated',
        detail: 'Cart Updated!',
        icon: 'pi-shopping-cart',
      });
    });
  }
}
