import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Cake } from '../../services/cake';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cake-card',
  imports: [CommonModule, RouterModule, NgOptimizedImage, CurrencyPipe],
  templateUrl: './cake-card.html',
  styleUrl: './cake-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CakeCardComponent {
  cake = input.required<Cake>();
  private cartService = inject(CartService);

  addToCart() {
    this.cartService.addToCart(this.cake());
  }
}
