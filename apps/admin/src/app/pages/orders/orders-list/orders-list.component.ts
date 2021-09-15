import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrdersService } from '@zummy/orders';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ORDER_STATUS } from '../order-constants';

@Component({
  selector: 'zummy-orders-list',
  templateUrl: './orders-list.component.html',
  styles: [],
})
export class OrdersListComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  orderStatus = ORDER_STATUS;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private router: Router,
    private ordersService: OrdersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._getOrders();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  deleteOrder(orderId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this order?',
      header: 'Delete Order',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ordersService.deleteOrder(orderId).subscribe(
          () => {
            this._getOrders();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Order successfully deleted',
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `Error deleting order - ${error}`,
            });
          }
        );
      },
    });
  }

  showOrder(orderId: string) {
    this.router.navigateByUrl(`orders/${orderId}`);
  }

  private _getOrders() {
    this.ordersService.getOrders().pipe(takeUntil(this.destroy$)).subscribe();
  }
}
