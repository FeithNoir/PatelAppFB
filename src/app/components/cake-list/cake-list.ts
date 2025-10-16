import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cake } from '../../services/cake';
import { CakeCardComponent } from '../cake-card/cake-card';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner';

@Component({
  selector: 'app-cake-list',
  imports: [CakeCardComponent, CommonModule, LoadingSpinnerComponent],
  templateUrl: './cake-list.html',
  styleUrl: './cake-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CakeListComponent {
  cakes = input.required<Cake[]>();
  loading = input.required<boolean>();
}
