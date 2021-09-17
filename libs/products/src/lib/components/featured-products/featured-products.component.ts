import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@zummy/products';

@Component({
  selector: 'zummy-featured-products',
  templateUrl: './featured-products.component.html',
  styles: [],
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private prodService: ProductsService) {}

  ngOnInit(): void {
    this._getFeaturedProducts();
  }

  private _getFeaturedProducts() {
    this.prodService.getFeaturedProducts(4).subscribe((prods) => {
      this.featuredProducts = prods;
    });
  }
}
