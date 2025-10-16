import { Injectable, signal, computed } from '@angular/core';
import { Cake } from './cakes/cake.model';

export interface CartItem {
  cake: Cake;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  public totalItems = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  });

  public cartItems$ = this.cartItems.asReadonly();

  addToCart(cake: Cake) {
    const existingItem = this.cartItems().find(item => item.cake.id === cake.id);
    if (existingItem) {
      this.cartItems.update(items =>
        items.map(item =>
          item.cake.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      this.cartItems.update(items => [...items, { cake, quantity: 1 }]);
    }
  }
}
