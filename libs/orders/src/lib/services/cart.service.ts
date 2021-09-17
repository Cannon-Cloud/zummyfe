import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem, CartItemDetailed } from '../models/cart';

export const CART_KEY = 'cart';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());

  constructor() {}

  initCartLocalStorage() {
    const cart: Cart = this.getCart();
    if (!cart) {
      const intialCart = {
        items: [],
      };
      const intialCartJson = JSON.stringify(intialCart);
      localStorage.setItem(CART_KEY, intialCartJson);
    }
  }

  // emptyCart() {
  //   const intialCart = {
  //     items: [],
  //   };
  //   const intialCartJson = JSON.stringify(intialCart);
  //   localStorage.setItem(CART_KEY, intialCartJson);
  //   this.cart$.next(intialCart);
  // }

  getCart() {
    const stringCart = localStorage.getItem(CART_KEY);
    if (stringCart) {
      const cart = JSON.parse(stringCart);
      return cart;
    }
  }

  setCartItem(cartItem: CartItem): Cart {
    const cart = this.getCart();
    const cartItemExists = cart.items?.find(
      (item: { productId: string | undefined }) =>
        item.productId === cartItem.productId
    );
    if (cartItemExists) {
      cart.items?.map(
        (item: { productId: string | undefined; quantity: number }) => {
          if (item.productId === cartItem.productId) {
            item.quantity = item.quantity + cartItem.quantity;
            return item;
          }
        }
      );
    } else {
      cart?.items?.push(cartItem);
    }

    const cartJson = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJson);
    this.cart$.next(cart);
    return cart;
  }

  // deleteCartItem(productId: string) {
  //   const cart = this.getCart();
  //   const newCart = cart.items.filter((item) => item.productId !== productId);

  //   cart.items = newCart;

  //   const cartJsonString = JSON.stringify(cart);
  //   localStorage.setItem(CART_KEY, cartJsonString);

  //   this.cart$.next(cart);
  // }
}
