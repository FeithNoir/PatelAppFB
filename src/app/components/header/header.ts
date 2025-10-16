import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileNavComponent } from '../mobile-nav/mobile-nav';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, MobileNavComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  authService = inject(AuthService);
  mobileNavOpen = signal(false);

  toggleMobileNav() {
    this.mobileNavOpen.set(!this.mobileNavOpen());
  }

  logout() {
    this.authService.logout();
  }
}
