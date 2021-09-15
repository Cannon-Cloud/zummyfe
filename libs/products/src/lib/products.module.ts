import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductsSearchComponent,
    ProductItemComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductPageComponent,
    ProductListComponent,
  ],
  exports: [
    ProductsSearchComponent,
    ProductItemComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductPageComponent,
    ProductListComponent,
  ],
})
export class ProductsModule {}
