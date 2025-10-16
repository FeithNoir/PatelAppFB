import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink],
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent {}
