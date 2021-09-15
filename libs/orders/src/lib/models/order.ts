import { OrderItem } from './order-item';
import { User } from '@zummy/users';

export class Order {
  id!: string;
  orderItems!: OrderItem[];
  shippingAddress1?: string;
  shippingAddress2?: string;
  city?: string;
  zip?: string;
  state?: string;
  phone?: string;
  status?: string;
  totalPrice?: string;
  user!: User;
  dateOrdered?: string;
}
