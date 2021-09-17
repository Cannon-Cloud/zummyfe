import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@zummy/products';

@Component({
  selector: 'zummy-product-item',
  templateUrl: './product-item.component.html',
  styles: [],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}
}
