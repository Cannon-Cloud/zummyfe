import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CategoriesService,
  Category,
  Product,
  ProductsService,
} from '@zummy/products';

@Component({
  selector: 'zummy-product-list',
  templateUrl: './product-list.component.html',
  styles: [],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage!: boolean;

  constructor(
    private prodService: ProductsService,
    private catService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params.categoryid
        ? this._getProducts([params.categoryid])
        : this._getProducts();
      params.categoryid
        ? (this.isCategoryPage = true)
        : (this.isCategoryPage = false);
    });
    this._getCategories();
  }

  private _getProducts(categoriesFilter?: string[]) {
    this.prodService.getProducts(categoriesFilter).subscribe((resProducts) => {
      this.products = resProducts;
    });
  }

  private _getCategories() {
    this.catService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }

  categoryFilter() {
    const selectedCategories = this.categories
      .filter((cats) => {
        return cats.checked;
      })
      .map((category) => {
        return category.id;
      });
    this._getProducts(selectedCategories);
  }
}
