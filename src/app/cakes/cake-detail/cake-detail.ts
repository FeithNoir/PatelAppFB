import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeService } from '../cake.service';
import { Cake } from '../cake.model';
import { ActivatedRoute } from '@angular/router';
import { computed } from '@angular/core';

@Component({
  selector: 'app-cake-detail',
  imports: [CommonModule],
  templateUrl: './cake-detail.html',
  styleUrl: './cake-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CakeDetailComponent {
  private route = inject(ActivatedRoute);
  private cakeService = inject(CakeService);
  public cake = computed(() => {
    const cakeId = this.route.snapshot.paramMap.get('id');
    return this.cakeService.getCake(Number(cakeId));
  });
}
