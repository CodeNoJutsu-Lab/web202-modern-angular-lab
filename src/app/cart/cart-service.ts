import { Injectable, signal } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly cartItem = signal<Product[]>([]);

  addToCart(product: Product){
    console.log("Added to cart: ", product.name);
    this.cartItem.update((items) => [...items, product]);
  }
}
