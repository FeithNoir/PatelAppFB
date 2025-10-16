import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeService } from '../cake.service';
import { Cake } from '../cake.model';

@Component({
  selector: 'app-cake-list',
  imports: [CommonModule],
  templateUrl: './cake-list.html',
  styleUrl: './cake-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CakeListComponent {
  private cakeService = inject(CakeService);
  public cakes: Cake[] = this.cakeService.getCakes();
}
