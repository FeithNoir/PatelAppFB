import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CakeListComponent } from '../../components/cake-list/cake-list';
import { CakeService } from '../../services/cake';

@Component({
  selector: 'app-home',
  imports: [CakeListComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private cakeService = inject(CakeService);
  
  cakes = this.cakeService.cakes;
  loading = this.cakeService.loading;

  constructor() {
    this.cakeService.getCakes();
  }
}
