import { Injectable, signal, computed } from '@angular/core';
import { Cake } from './cake';

export interface CartItem {
  cake: Cake;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartItem[]>([]);

  totalItems = computed(() => this.cart().reduce((acc, item) => acc + item.quantity, 0));
  totalPrice = computed(() => this.cart().reduce((acc, item) => acc + item.cake.price * item.quantity, 0));

  addToCart(cake: Cake) {
    const existingItem = this.cart().find(item => item.cake.id === cake.id);
    if (existingItem) {
      this.cart.update(cart => 
        cart.map(item => 
          item.cake.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      this.cart.update(cart => [...cart, { cake, quantity: 1 }]);
    }
  }

  removeFromCart(cakeId: number) {
    this.cart.update(cart => cart.filter(item => item.cake.id !== cakeId));
  }

  updateQuantity(cakeId: number, quantity: number) {
    this.cart.update(cart => 
      cart.map(item => 
        item.cake.id === cakeId ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  }

  clearCart() {
    this.cart.set([]);
  }
}
