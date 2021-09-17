import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '@zummy/products';

@Component({
  selector: 'zummy-product-page',
  templateUrl: './product-page.component.html',
  styles: [],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  quantity!: number;

  constructor(
    private prodService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.productid) {
        this._getProduct(params.productid);
      }
    });
  }

  addProductToCart() {
    console.log('addtocart');
  }

  private _getProduct(id: string) {
    this.prodService.getProduct(id).subscribe((resProduct) => {
      return (this.product = resProduct);
    });
  }
}
