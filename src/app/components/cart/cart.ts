import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  private cartService = inject(CartService);

  cartItems = this.cartService.cart;
  totalPrice = this.cartService.totalPrice;

  removeFromCart(cakeId: number) {
    this.cartService.removeFromCart(cakeId);
  }

  updateQuantity(cakeId: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const quantity = parseInt(input.value, 10);
    this.cartService.updateQuantity(cakeId, quantity);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
