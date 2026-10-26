import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../products/product';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly cartItem = signal<CartItem[]>([]);

  readonly tottalItems = computed(() =>
    this.cartItem().reduce((total, item) => total + item.quantity, 0)
  );

  addToCart(product: Product){
    this.cartItem.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if(existingItem){
        return items.map((item) => item.product.id == product.id ? { ...item, quantity: item.quantity + 1} : item);
      }

      return [...items, {product, quantity: 1}];
    });
  }
}
