import { Component, OnInit } from '@angular/core';
import { OrdersService } from '@zummy/orders';
import { ProductsService } from '@zummy/products';
import { UsersService } from '@zummy/users';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'zummy-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/ban-types
  productCount = {};
  orderCount = {};
  userCount = {};
  totalSales = {};
  constructor(
    private productService: ProductsService,
    private orderService: OrdersService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this._getOrderCount();
    this._getProductCount();
    this._getUserCount();
    // this._getTotalSales();
  }

  private _getProductCount() {
    this.productService.getProductCount().subscribe((count: any) => {
      this.productCount = count.productCount;
    });
  }

  private _getOrderCount() {
    this.orderService.getOrderCount().subscribe((count: any) => {
      this.orderCount = count.orderCount;
    });
  }

  private _getUserCount() {
    this.userService.getUserCount().subscribe((count: any) => {
      this.userCount = count.userCount;
    });
  }

  private _getTotalSales() {
    this.orderService.getTotalSales().subscribe((sales: any) => {
      this.totalSales = sales.totalsales;
      console.log(this.totalSales);
    });
  }
}
