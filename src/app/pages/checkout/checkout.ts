import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {}
