import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake, CakeService } from '../../services/cake';
import { CartService } from '../../services/cart';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-cake-detail',
  imports: [CurrencyPipe, NgOptimizedImage],
  templateUrl: './cake-detail.html',
  styleUrls: ['./cake-detail.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CakeDetail {
  private route = inject(ActivatedRoute);
  private cakeService = inject(CakeService);
  private cartService = inject(CartService);
  private notificationService = inject(NotificationService);
  cake = signal<Cake | undefined>(undefined);

  constructor() {
    const cakeId = this.route.snapshot.paramMap.get('id');
    if (cakeId) {
      this.cakeService.getCakeById(+cakeId).subscribe(cake => {
        this.cake.set(cake);
      });
    }
  }

  addToCart() {
    const currentCake = this.cake();
    if (currentCake) {
      this.cartService.addToCart(currentCake);
      this.notificationService.showSuccess(`${currentCake.name} se agregó al carrito`, '¡Éxito!');
    }
  }
}
