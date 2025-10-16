import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-icon',
  imports: [RouterModule],
  template: `
    <a routerLink="/cart">
      <span class="cart-icon"></span>
      <span class="cart-count">{{ cartService.totalItems() }}</span>
    </a>
  `,
  styles: [`
    a {
      position: relative;
      display: inline-block;
      text-decoration: none;
    }
    .cart-icon {
      font-size: 2rem;
    }
    .cart-count {
      position: absolute;
      top: -5px;
      right: -10px;
      background-color: #ff4081;
      color: white;
      border-radius: 50%;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartIcon {
  cartService = inject(CartService);
}
