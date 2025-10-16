import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Checkout {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private cartService = inject(CartService);
  private notificationService = inject(NotificationService);

  checkoutForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    payment: ['', Validators.required],
  });

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.cartService.clearCart();
      this.notificationService.showSuccess('¡Pedido realizado con éxito!', '¡Éxito!');
      this.router.navigate(['/confirmation']);
    } else {
      this.notificationService.showInfo('Por favor, complete todos los campos obligatorios', 'Formulario incompleto');
    }
  }
}
