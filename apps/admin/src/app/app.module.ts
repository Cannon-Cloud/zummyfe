import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AuthGuard, JwtInterceptor } from '@zummy/users';

//Providers Import
import { CategoriesService } from '@zummy/products';
import { UsersModule } from '@zummy/users';
import { ConfirmationService, MessageService } from 'primeng/api';

//UX Component
import { UxModule } from './ux/ux.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

//Custom Components
import { ShellComponent } from './shared/shell/shell.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { OrdersDetailComponent } from './pages/orders/orders-detail/orders-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'categories',
        component: CategoriesListComponent,
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent,
      },
      {
        path: 'categories/form/:id',
        component: CategoriesFormComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/form',
        component: ProductFormComponent,
      },
      {
        path: 'products/form/:id',
        component: ProductFormComponent,
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: 'users/form',
        component: UsersFormComponent,
      },
      {
        path: 'users/form/:id',
        component: UsersFormComponent,
      },
      {
        path: 'orders',
        component: OrdersListComponent,
      },
      {
        path: 'orders/:id',
        component: OrdersDetailComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SidebarComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    ProductListComponent,
    ProductFormComponent,
    UsersFormComponent,
    UsersListComponent,
    OrdersListComponent,
    OrdersDetailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    UxModule,
  ],
  providers: [
    CategoriesService,
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
