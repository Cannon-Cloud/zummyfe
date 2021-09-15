import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiURLOrders = environment.apiURL + 'orders';
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURLOrders);
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiURLOrders}/${orderId}`);
  }

  updateOrder(
    orderStatus: { status: string },
    orderId: string
  ): Observable<Order> {
    return this.http.put<Order>(`${this.apiURLOrders}/${orderId}`, orderStatus);
  }

  getOrderCount(): any {
    return this.http.get(`${this.apiURLOrders}/get/count`);
  }

  getTotalSales(): any {
    return this.http.get(`${this.apiURLOrders}/get/totalsales`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiURLOrders, order);
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLOrders}/${orderId}`);
  }
}
