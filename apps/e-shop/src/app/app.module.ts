import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MessagesComponent } from './shared/messages/messages.component';
import { NavComponent } from './shared/nav/nav.component';
import { ProductsModule } from '@zummy/products';

import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

import { UiModule } from '@zummy/ui';
import { HttpClientModule } from '@angular/common/http';

import { CheckboxModule } from 'primeng/checkbox';

import { OrdersModule } from '@zummy/orders';

import { CartIconComponent } from 'libs/orders/src/lib/components/cart-icon/cart-icon.component';

import { CategoriesBannerComponent } from '../../../../libs/products/src/lib/components/categories-banner/categories-banner.component';

const routes: Routes = [{ path: '', component: HomePageComponent }];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    MessagesComponent,
    NavComponent,
    CategoriesBannerComponent,
    CartIconComponent,
  ],
  imports: [
    BrowserModule,
    OrdersModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsModule,
    UiModule,
    ButtonModule,
    CheckboxModule,
    BadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
